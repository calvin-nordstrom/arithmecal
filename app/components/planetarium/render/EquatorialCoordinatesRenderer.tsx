import { Line } from '@react-three/drei';
import { altAzToVector, raDecToAltAz } from '../util/coordinateUtil';
import { Observer } from '../Observer';

export default function EquatorialCoordinatesRenderer({
  observer
}: { observer: Observer }) {
  const lines = [];

  // Horizontal lines
  const decSpacing = 10;
  const decSegments = 90;
  for (let dec = -90; dec <= 90; dec += decSpacing) {
    const points = [];
    for (let ra = 0; ra <= 360; ra += 360 / decSegments) {
      const altAz = raDecToAltAz(ra / 15, dec, observer);
      const v = altAzToVector(altAz.alt, altAz.az);
      points.push(v);
    }
    lines.push(points);
  }

  // Vertical lines
  const raSpacing = 24;
  const raSegments = 90;
  for (let ra = 0; ra < 360; ra += 360 / raSpacing) {
    // Skip north and south celestial pole lines
    if (ra % 90 === 0) {
      continue;
    }
    const points = [];
    for (let dec = -90 + decSpacing; dec <= 90 - decSpacing; dec += 180 / raSegments) {
      const altAz = raDecToAltAz(ra / 15, dec, observer);
      const v = altAzToVector(altAz.alt, altAz.az);
      points.push(v);
    }

    if (points.length > 0) lines.push(points);
  }

  // North and south celestial pole vertical lines
  for (let ra of [0, 90, 180, 270]) {
    const points = [];
    for (let dec = -90; dec <= 90; dec += 180 / raSegments) {
      const altAz = raDecToAltAz(ra / 15, dec, observer);
      const v = altAzToVector(altAz.alt, altAz.az);
      points.push(v);
    }
    lines.push(points);
  }

  return (
    <>
      {lines.map((points, index) => (
        <Line
          key={index}
          points={points}
          dashed={true}
          gapSize={0}
          transparent={true}
          lineWidth={1}
          color={0xFDAE44}
          opacity={0.25}
        />
      ))}
    </>
  );
}
