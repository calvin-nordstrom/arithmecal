import CalculatorLayout from '@/app/components/CalculatorLayout';
import type { Metadata } from 'next'
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import HexToOctalConverter from '@/app/components/conversion/hex-to-octal/HexToOctalConverter';

export const metadata: Metadata = {
  title: 'Hex to Octal Conversion',
  description: 'Convert hexadecimal to octal and vice versa with Arithmecal’s Hex to Octal converter. Ideal for developers, programmers, and tech enthusiasts.',
  keywords: 'hex to octal, octal to hex, hex conversion, octal conversion, number system conversion, binary to octal, Arithmecal',
  alternates: {
    canonical: 'https://www.arithmecal.com/conversion/hex-to-octal',
  },
};

export default function HexToOctalConversionPage() {
  return (
    <CalculatorLayout>
      <h1>Hex to Octal Conversion</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <BaseConverterNavigator />
          <HexToOctalConverter />
        </div>
        <div className='calculator-description'>
          <p>Use this tool to convert hexadecimal (base-16) numbers into octal (base-8), and vice versa.</p>

          <h2>How to Use This Converter</h2>
          <ul>
            <li>Enter a hex value (e.g., <code>2F</code>) to see its octal representation</li>
            <li>Or input an octal number to convert it to hexadecimal</li>
          </ul>

          <h2>Understanding the Conversion</h2>
          <p>Hex and octal are both number systems used in computing, but they don&apos;t convert directly digit-by-digit. The easiest way to convert between them is via binary:</p>
          <ol>
            <li>Convert hex to binary (each hex digit = 4 bits)</li>
            <li>Group the binary into 3-bit chunks (starting from the right)</li>
            <li>Convert each 3-bit group into an octal digit</li>
          </ol>

          <h2>Example</h2>
          <p>Convert <code>2F<sub>16</sub></code> to octal:</p>
          <ul>
            <li>Hex <code>2F</code> = Binary <code>0010 1111</code></li>
            <li>Binary <code>00101111</code> → group as <code>000 101 111</code></li>
            <li>Octal = <code>057<sub>8</sub></code></li>
          </ul>

          <h2>Why Use Octal?</h2>
          <p>Octal was used more frequently in older computing systems, especially when dealing with byte-aligned systems where 3-bit groupings made sense.</p>
          <p>It&apos;s still useful for interpreting file permissions in Unix/Linux systems (e.g., <code>chmod 755</code>).</p>
          <p>Hex and octal both simplify binary numbers for humans. Use this converter when working with different low-level numeric representations.</p>
        </div>
      </div>
    </CalculatorLayout>
  );
}
