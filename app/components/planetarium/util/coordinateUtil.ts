import { PerspectiveCamera, Quaternion, Vector3 } from 'three';
import { Horizon, Observer as AstroObserver } from 'astronomy-engine';
import { Star } from '../render/star/Star';
import { Observer } from '../Observer';

const DEG2RAD = Math.PI / 180;

export function altAzToVector(
  alt: number,
  az: number
): Vector3 {
  const altRad = alt * DEG2RAD;
  const azRad = az * DEG2RAD;

  const x = Math.cos(altRad) * Math.sin(azRad);
  const y = Math.sin(altRad);
  const z = -Math.cos(altRad) * Math.cos(azRad);

  return new Vector3(x, y, z).normalize();
}

export function raDecToAltAz(
  ra: number,
  dec: number,
  observer: Observer
): { alt: number; az: number } {
  const astroObserver = new AstroObserver(
    observer.latitude,
    observer.longitude,
    observer.elevation ?? 0
  );

  const horizontal = Horizon(
    observer.date,
    astroObserver,
    ra,
    dec,
    'normal'
  );

  return {
    alt: horizontal.altitude,
    az: horizontal.azimuth,
  };
}

export function buildStarDirections(
  stars: Star[],
  observer: Observer
): Vector3[] {
  const result: Vector3[] = [];

  for (const star of stars) {
    const { alt, az } = raDecToAltAz(star.ra, star.dec, observer);

    // Cull stars below horizon
    // if (alt <= 0) continue;

    const v = altAzToVector(alt, az);
    
    result.push(v);
  }

  return result;
}

export function directionToYawPitch(dir: Vector3) {
  const yaw = Math.atan2(dir.x, -dir.z);
  const pitch = Math.asin(dir.y);

  return { yaw, pitch };
}

export function rotationBetweenVectors(a: Vector3, b: Vector3) {
  const q = new Quaternion();
  q.setFromUnitVectors(b, a);
  return q;
}

export function ray(
  ndcX: number,
  ndcY: number,
  pCamera: PerspectiveCamera
): Vector3 {
  return new Vector3(ndcX, ndcY, 0.5)
    .unproject(pCamera)
    .sub(pCamera.position)
    .normalize();
}

export function distance(
  a: { 
    x: number; 
    y: number 
  }, 
  b: { 
    x: number; 
    y: number 
  }
) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy);
}
