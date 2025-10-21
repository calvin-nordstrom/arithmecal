import CalculatorLayout from '@/app/components/CalculatorLayout';
import type { Metadata } from 'next'
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import OctalToBinaryConverter from '@/app/components/conversion/octal-to-binary/OctalToBinaryConverter';

export const metadata: Metadata = {
  title: 'Octal to Binary Converter',
  description: 'Convert octal (base-8) values to binary (base-2) numbers with Arithmecal’s Octal to Binary converter. Useful for programming, electronics, and digital systems.',
  keywords: 'octal to binary, octal conversion, binary conversion, number system conversion, octal to binary converter, digital systems, electronics, programming',
  alternates: {
    canonical: 'https://arithmecal.com/conversion/octal-to-binary',
  },
};

export default function OctalToBinaryConverterPage() {
  return (
    <CalculatorLayout>
      <h1>Octal to Binary Converter</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <BaseConverterNavigator />
          <OctalToBinaryConverter />
        </div>
        <div className='calculator-description'>
          <p>This tool helps you convert numbers between octal (base-8) and binary (base-2).</p>

          <h2>How to Use This Converter</h2>
          <ul>
            <li>Enter an octal value like <code>75</code> to get its binary representation</li>
            <li>Or input a binary number to convert it into octal</li>
          </ul>

          <h2>Understanding the Conversion</h2>
          <p>Each octal digit maps directly to 3 binary bits, making conversion fast and easy:</p>
          <ul>
            <li>0 → 000</li>
            <li>1 → 001</li>
            <li>7 → 111</li>
          </ul>
          <p><strong>Example:</strong> Convert <code>75<sub>8</sub></code> to binary:</p>
          <ul>
            <li>7 → 111</li>
            <li>5 → 101</li>
          </ul>
          <p><strong>Result: 111101</strong></p>

          <h2>Why Use Octal and Binary?</h2>
          <p>Octal and binary are both used for compact and exact digital representations:</p>
          <ul>
            <li><strong>Octal:</strong> More compact than binary, easier to read and write in some systems</li>
            <li><strong>Binary:</strong> Directly represents machine-level data (bits)</li>
          </ul>
          <p>This converter is ideal for electronics, computer architecture, and programming tasks involving low-level data.</p>
        </div>
      </div>
    </CalculatorLayout>
  );
}
