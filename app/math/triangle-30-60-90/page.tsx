import Triangle306090Calculator from '@/app/components/math/Triangle306090Calculator';
import Head from 'next/head';

export default function TriangleCalculatorPage() {
  return (
    <>
      <Head>
        <title>Triangle Calculator</title>
        <meta name="description" content="" />
      </Head>
      <main style={{ padding: '2rem' }}>
        <h1>30 60 90 Triangle Calculator</h1>
        <Triangle306090Calculator />
      </main>
    </>
  );
}
