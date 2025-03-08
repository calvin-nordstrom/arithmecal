import CircumscribedCircleCalculator from '@/app/components/math/CircumscribedCircleCalculator';
import Head from 'next/head';

export default function TriangleCalculatorPage() {
  return (
    <>
      <Head>
        <title>Triangle Calculator</title>
        <meta name="description" content="" />
      </Head>
      <main style={{ padding: '2rem' }}>
        <h1>Circumscribed Circle Calculator</h1>
        <CircumscribedCircleCalculator />
      </main>
    </>
  );
}
