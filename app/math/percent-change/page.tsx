import PercentChangeCalculator from '@/app/components/math/PercentChangeCalculator';
import Head from 'next/head';

export default function TriangleCalculatorPage() {
  return (
    <>
      <Head>
        <title>Triangle Calculator</title>
        <meta name="description" content="" />
      </Head>
      <main style={{ padding: '2rem' }}>
        <h1>Percent Change Calculator</h1>
        <PercentChangeCalculator />
      </main>
    </>
  );
}
