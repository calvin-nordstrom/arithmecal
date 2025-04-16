import CalculatorLayout from '@/app/components/CalculatorLayout';
import KatexRenderer from '@/app/components/KatexRenderer';
import Image from 'next/image';
import type { Metadata } from 'next'
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import HexToDecimalConverter from '@/app/components/conversion/HexToDecimalConverter';

export const metadata: Metadata = {
  title: 'Hex to Decimal Conversion',
  description: 'Arithmecal hex to decimal conversion',
  keywords: '',
};

export default function HexToDecimalConversionPage() {
  return (
    <CalculatorLayout>
      <h1>Hex to Decimal Conversion</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <BaseConverterNavigator />
          <HexToDecimalConverter />
        </div>
        <div className='calculator-description'>
          <p>This converter allows you to convert hexadecimal (base-16) values into decimal (base-10) numbers, and vice versa.</p>

          <h2>How to Use This Converter</h2>
          <ul>
            <li>Enter a hexadecimal number like <code>1A3</code> to convert it to decimal</li>
            <li>Or input a decimal number to see its hex equivalent</li>
          </ul>

          <h2>Understanding the Conversion</h2>
          <p>Hexadecimal is a base-16 system, which means it uses 16 symbols: 0-9 and A-F. Each digit represents a power of 16.</p>
          <p>To convert from hex to decimal, multiply each digit by 16 raised to the power of its position (right to left, starting at 0).</p>
          <p><strong>Example:</strong> Convert <code>1A3<sub>16</sub></code> to decimal:</p>
          <ul>
            <li>1 &times; 16² = 256</li>
            <li>A &times; 16¹ = 10 &times; 16 = 160</li>
            <li>3 &times; 16⁰ = 3</li>
          </ul>
          <p><strong>Result: 256 + 160 + 3 = 419</strong></p>

          <h2>Hex to Decimal Table (0-15)</h2>
          <table>
            <thead>
              <tr>
                <th>Hexadecimal</th>
                <th>Decimal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>2</td>
                <td>2</td>
              </tr>
              <tr>
                <td>3</td>
                <td>3</td>
              </tr>
              <tr>
                <td>4</td>
                <td>4</td>
              </tr>
              <tr>
                <td>5</td>
                <td>5</td>
              </tr>
              <tr>
                <td>6</td>
                <td>6</td>
              </tr>
              <tr>
                <td>7</td>
                <td>7</td>
              </tr>
              <tr>
                <td>8</td>
                <td>8</td>
              </tr>
              <tr>
                <td>9</td>
                <td>9</td>
              </tr>
              <tr>
                <td>A</td>
                <td>10</td>
              </tr>
              <tr>
                <td>B</td>
                <td>11</td>
              </tr>
              <tr>
                <td>C</td>
                <td>12</td>
              </tr>
              <tr>
                <td>D</td>
                <td>13</td>
              </tr>
              <tr>
                <td>E</td>
                <td>14</td>
              </tr>
              <tr>
                <td>F</td>
                <td>15</td>
              </tr>
            </tbody>
          </table>

          <h2>Applications of Hex to Decimal</h2>
          <p>Hexadecimal is frequently used in:</p>
          <ul>
            <li>Programming and debugging (memory addresses, error codes)</li>
            <li>Color codes in HTML/CSS (e.g., <code>#FF5733</code>)</li>
            <li>Data encoding and machine-level computation</li>
          </ul>
        </div>
      </div>
    </CalculatorLayout>
  );
}
