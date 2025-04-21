import CalculatorLayout from '@/app/components/CalculatorLayout';
import KatexRenderer from '@/app/components/KatexRenderer';
import Image from 'next/image';
import type { Metadata } from 'next'
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import HexToBinaryConverter from '@/app/components/conversion/HexToBinaryConverter';

export const metadata: Metadata = {
  title: 'Hex to Binary Conversion',
  description: 'Arithmecal hex to binary conversion',
  keywords: '',
};

export default function HexToBinaryConversionPage() {
  return (
    <CalculatorLayout>
      <h1>Hex to Binary Conversion</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <BaseConverterNavigator />
          <HexToBinaryConverter />
        </div>
        <div className='calculator-description'>
          <p>This tool converts hexadecimal (base-16) values to binary (base-2), and vice versa.</p>

          <h2>How to Use This Converter</h2>
          <ul>
            <li>Enter a hex value (e.g., <code>2F</code>) to get the binary equivalent</li>
            <li>Or input binary digits (e.g., <code>101111</code>) to see the hex version</li>
          </ul>
          <p>The converter supports both directions for easy translation between these formats.</p>

          <h2>Understanding the Conversion</h2>
          <p>Each hex digit directly maps to 4 binary bits. This makes hex-to-binary conversion fast and straightforward:</p>
          <ul>
            <li>0 → 0000</li>
            <li>1 → 0001</li>
            <li>A → 1010</li>
            <li>F → 1111</li>
          </ul>
          <p>So <code>2F<sub>16</sub></code> = <code>0010 1111<sub>2</sub></code></p>
          <p className='note'>Fun fact: a group of 4 bits is called a <strong>nibble</strong>.</p>

          <h2>Example</h2>
          <p>Convert <code>DEAD<sub>16</sub></code> to binary:</p>
          <table>
            <thead>
              <tr>
                <th>Hex</th>
                <th>Binary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>D</td>
                <td>1101</td>
              </tr>
              <tr>
                <td>E</td>
                <td>1110</td>
              </tr>
              <tr>
                <td>A</td>
                <td>1010</td>
              </tr>
              <tr>
                <td>D</td>
                <td>1101</td>
              </tr>
            </tbody>
          </table>
          <p><strong>Result: 1101111010101101</strong></p>

          <h2>Why Use Hex and Binary?</h2>
          <p>Hex is a compact way to represent binary. It&apos;s commonly used in:</p>
          <ul>
            <li>Machine code and assembly</li>
            <li>Memory addresses</li>
            <li>Color codes in web development</li>
          </ul>
          <p>Binary shows exact bit-level data, while hex is much easier to read and write.</p>
        </div>
      </div>
    </CalculatorLayout>
  );
}
