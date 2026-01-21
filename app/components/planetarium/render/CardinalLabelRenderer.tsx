import { Text } from '@react-three/drei';
import { altAzToVector } from '../coordinateUtils';

const CARDINAL_FONT_SIZE = 0.04;
const INTERCARDINAL_FONT_SIZE = 0.03;

const directions = [
  { label: 'N', az: 0, fontSize: CARDINAL_FONT_SIZE },
  { label: 'NE', az: 45, fontSize: INTERCARDINAL_FONT_SIZE },
  { label: 'E', az: 90, fontSize: CARDINAL_FONT_SIZE },
  { label: 'SE', az: 135, fontSize: INTERCARDINAL_FONT_SIZE },
  { label: 'S', az: 180, fontSize: CARDINAL_FONT_SIZE },
  { label: 'SW', az: 225, fontSize: INTERCARDINAL_FONT_SIZE },
  { label: 'W', az: 270, fontSize: CARDINAL_FONT_SIZE },
  { label: 'NW', az: 315, fontSize: INTERCARDINAL_FONT_SIZE },
];

export default function CardinalLabelRenderer() {
  return (
    <>
      {directions.map((d) => {
        const pos = altAzToVector(0, d.az);
        return (
          <Text
            key={d.label}
            position={pos.clone()}
            fontSize={d.fontSize}
            color={0xFFFFFF}
            anchorX='center'
            anchorY='bottom'
            rotation={[0, d.az / -90 * Math.PI / 2, 0]}
          >
            {d.label}
          </Text>
        );
      })}
    </>
  );
}
