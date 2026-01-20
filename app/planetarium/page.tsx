import type { Metadata } from 'next'
import PlanetariumCanvas from '../components/planetarium/PlanetariumCanvas';

export const metadata: Metadata = {
  title: 'Planetarium',
  description: '',
  keywords: '',
  alternates: {
    canonical: 'https://arithmecal.com/planetarium',
  },
}

export default function PlanetariumPage() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <PlanetariumCanvas />
    </div>
  );
}
