import CalculatorLayout from '@/app/components/CalculatorLayout';
import type { Metadata } from 'next'
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import OctalToHexConverter from '@/app/components/conversion/octal-to-hex/OctalToHexConverter';

export const metadata: Metadata = {
  title: 'Octal to Hexadecimal Conversion',
  description: 'Convert octal (base-8) numbers to hexadecimal (base-16) with Arithmecal’s easy-to-use tool. Ideal for programming, debugging, and systems work.',
  keywords: 'octal to hexadecimal, hexadecimal conversion, octal to hex converter, number system conversion, octal conversion, programming, debugging, memory addressing',
  alternates: {
    canonical: 'https://www.arithmecal.com/conversion/octal-to-hex',
  },
};

export default function OctalToHexConversionPage() {
  return (
    <CalculatorLayout>
      <h1>Octal to Hex Conversion</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <BaseConverterNavigator />
          <OctalToHexConverter />
        </div>
        <div className='calculator-description'>
          <p>Convert octal (base-8) numbers to hexadecimal (base-16) values, and vice versa, with this tool.</p>

          <h2>How to Use This Converter</h2>
          <ul>
            <li>Enter an octal value (e.g., <code>25</code>) to convert it to hexadecimal</li>
            <li>Or input a hexadecimal number to see its octal representation</li>
          </ul>

          <h2>Understanding the Conversion</h2>
          <p>The easiest way to convert between octal and hexadecimal is through binary:</p>
          <ol>
            <li>Convert the octal number to binary (each octal digit = 3 bits)</li>
            <li>Group the binary digits into 4-bit chunks (starting from the right)</li>
            <li>Convert each 4-bit group into its hexadecimal equivalent</li>
          </ol>

          <h2>Example</h2>
          <p>Convert <code>25<sub>8</sub></code> to hexadecimal:</p>
          <ul>
            <li>2 → 010</li>
            <li>5 → 101</li>
          </ul>
          <p>Binary: <code>010101</code></p>
          <p>Group into 4 bits: <code>0010 0101</code></p>
          <p>Hexadecimal: <code>25<sub>16</sub></code></p>

          <h2>Why Use Octal and Hexadecimal?</h2>
          <p>Hexadecimal provides a more compact and human-readable representation of binary data, making it especially useful in programming, debugging, and memory addressing.</p>
          <p>Despite not being as common as it once was, octal is still used by many popular systems such as UNIX file permissions (e.g., <code>chmod 755</code>)</p>
        </div>
      </div>
    </CalculatorLayout>
  );
}
