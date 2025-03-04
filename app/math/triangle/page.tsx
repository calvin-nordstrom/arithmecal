import Head from 'next/head';
import TriangleCalculatorSwitcher from './TriangleCalculatorSwitcher';

export default function TriangleCalculatorPage() {
  return (
    <>
      <Head>
        <title>Triangle Calculator</title>
        <meta name="description" content="Calculate the properties of triangles including area, perimeter, sides, base, and height." />
      </Head>
      <main style={{ padding: '2rem' }}>
        <h1>Triangle Calculator</h1>
        <TriangleCalculatorSwitcher />
      </main>
    </>
  );
}
