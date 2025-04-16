import CalculatorLayout from '@/app/components/CalculatorLayout';
import KatexRenderer from '@/app/components/KatexRenderer';
import Image from 'next/image';
import type { Metadata } from 'next'
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import DecimalToBinaryConverter from '@/app/components/conversion/DecimalToBinaryConverter';

export const metadata: Metadata = {
  title: 'Decimal to Binary Conversion',
  description: 'Arithmecal decimal to binary conversion',
  keywords: '',
};

export default function DecimalToBinaryConversionPage() {
  return (
    <CalculatorLayout>
      <h1>Decimal to Binary Conversion</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <BaseConverterNavigator />
          <DecimalToBinaryConverter />
        </div>
        <div className='calculator-description'>
          <p>This converter helps you convert decimal numbers (base-10) into binary (base-2), and vice versa.</p>

          <h2>How to Use This Converter</h2>
          <ul>
            <li>Enter a decimal number like <code>42</code> to get the binary result</li>
            <li>Or enter binary (e.g., <code>101010</code>) to convert it to decimal</li>
          </ul>
          <p>You can switch between decimal and binary easily using this tool.</p>

          <h2>Understanding the Conversion</h2>
          <p>Decimal is the standard base-10 number system using digits 0-9. Binary is base-2 and only uses 0 and 1.</p>
          <p>Each digit in binary represents a power of 2, starting from the right. Here's how the conversion works:</p>
          <ul>
            <li>42 in decimal → 101010 in binary</li>
            <li>Explanation: 42 = 32 + 8 + 2 = 2⁵ + 2³ + 2¹</li>
          </ul>

          <h2>Example</h2>
          <p>Convert decimal <code>19</code> to binary:</p>
          <ol>
            <li>Find the largest power of 2 less than or equal to 19 → 16 (2⁴)</li>
            <li>Subtract 16: 19 - 16 = 3</li>
            <li>Next power of 2: 2 (2¹), remaining: 1</li>
            <li>Next: 1 (2⁰), remaining: 0</li>
            <li>Binary: 10011</li>
          </ol>
          <p><strong>Result: <code>19<sub>10</sub> = 10011<sub>2</sub></code></strong></p>

          <h2>Binary Table (0-15)</h2>
          <table>
            <thead>
              <tr>
                <th>Decimal</th>
                <th>Binary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0</td>
                <td>0000</td>
              </tr>
              <tr>
                <td>1</td>
                <td>0001</td>
              </tr>
              <tr>
                <td>2</td>
                <td>0010</td>
              </tr>
              <tr>
                <td>3</td>
                <td>0011</td>
              </tr>
              <tr>
                <td>4</td>
                <td>0100</td>
              </tr>
              <tr>
                <td>5</td>
                <td>0101</td>
              </tr>
              <tr>
                <td>6</td>
                <td>0110</td>
              </tr>
              <tr>
                <td>7</td>
                <td>0111</td>
              </tr>
              <tr>
                <td>8</td>
                <td>1000</td>
              </tr>
              <tr>
                <td>9</td>
                <td>1001</td>
              </tr>
              <tr>
                <td>10</td>
                <td>1010</td>
              </tr>
              <tr>
                <td>11</td>
                <td>1011</td>
              </tr>
              <tr>
                <td>12</td>
                <td>1100</td>
              </tr>
              <tr>
                <td>13</td>
                <td>1101</td>
              </tr>
              <tr>
                <td>14</td>
                <td>1110</td>
              </tr>
              <tr>
                <td>15</td>
                <td>1111</td>
              </tr>
            </tbody>
          </table>

          <h2>Where Binary Is Used</h2>
          <p>Binary is the fundamental language of computers and digital electronics. Everything from numbers, characters, images, and sounds are represented as sequences of 0s and 1s in binary.</p>
          <p>Use this tool to understand and convert numbers into binary for:</p>
          <ul>
            <li>Programming and software development</li>
            <li>Computer architecture and low-level debugging</li>
            <li>Electronics and logic gate design</li>
            <li>Learning how computers actually work</li>
          </ul>
        </div>
      </div>
    </CalculatorLayout>
  );
}
