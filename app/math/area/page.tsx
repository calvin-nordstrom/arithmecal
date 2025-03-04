import Head from 'next/head';
import AreaCalculatorSwitcher from './AreaCalculatorSwitcher';

export default function AreaCalculatorPage() {
  return (
    <>
      <Head>
        <title>Area Calculator</title>
        <meta name="description" content="Calculate the area for different shapes including circles and triangles." />
      </Head>
      <main style={{ padding: '2rem' }}>
        <h1>Area Calculator</h1>
        <AreaCalculatorSwitcher />
      </main>
    </>
  );
}
