import { Line } from '@react-three/drei';
import { altAzToVector } from '../coordinateUtils';

export default function HorizontalCoordinatesRenderer() {
  const lines = [];

  // Horizontal lines
  const altSpacing = 10;
  const altSegments = 90;
  for (let alt = -90; alt <= 90; alt += altSpacing) {
    const points = [];
    for (let az = 0; az <= 360; az += 360 / altSegments) {
      const v = altAzToVector(alt, az);
      points.push(v.clone());
    }
    lines.push(points);
  }

  // Vertical lines
  const azSpacing = 15;
  const azSegments = 90;
  for (let az = 0; az <= 360; az += azSpacing) {
    // Skip zenith and nadir lines
    if (az % 90 === 0) {
      continue;
    }
    const points = [];
    for (let alt = -90 + altSpacing; alt <= 90 - altSpacing; alt += 90 / azSegments) {
      const v = altAzToVector(alt, az);
      points.push(v.clone());
    }
    lines.push(points);
  }

  // Zenith and nadir vertical lines
  for (let az of [0, 90, 180, 270]) {
    const points = [];
    for (let alt = -90; alt <= 90; alt += 90 / azSegments) {
      const v = altAzToVector(alt, az);
      points.push(v.clone());
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
          color={0x00FFFF}
          opacity={0.2}
        />
      ))}
    </>
  );
}
