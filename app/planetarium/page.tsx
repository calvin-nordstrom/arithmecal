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
    <PlanetariumCanvas />
  );
}
