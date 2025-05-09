import CalculatorLayout from '@/app/components/CalculatorLayout';
import type { Metadata } from 'next'
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import DecimalToHexConverter from '@/app/components/conversion/DecimalToHexConverter';

export const metadata: Metadata = {
  title: 'Decimal to Hex Conversion',
  description: 'Convert decimal numbers to hexadecimal and vice versa with Arithmecal’s easy-to-use tool. Understand hexadecimal conversion for programming and digital systems.',
  keywords: 'decimal to hex, hex to decimal, decimal hexadecimal converter, number conversion tool, hexadecimal conversion, Arithmecal',
};

export default function DecimalToHexConversionPage() {
  return (
    <CalculatorLayout>
      <h1>Decimal to Hex Conversion</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <BaseConverterNavigator />
          <DecimalToHexConverter />
        </div>
        <div className='calculator-description'>
          <p>This converter allows you to convert decimal (base-10) numbers into hexadecimal (base-16), and vice versa.</p>

          <h2>How to Use This Converter</h2>
          <ul>
            <li>Enter a decimal number to get the hexadecimal equivalent</li>
            <li>Or enter a hexadecimal number to convert it back to decimal</li>
          </ul>
          <p>This tool handles both directions of the conversion process.</p>

          <h2>Understanding the Conversion</h2>
          <p>Decimal is our standard number system, using digits 0-9. Hexadecimal extends this by using digits 0-9 and letters A-F:</p>
          <ul>
            <li>Decimal 10 → Hex A</li>
            <li>Decimal 15 → Hex F</li>
            <li>Decimal 255 → Hex FF</li>
          </ul>
          <p>Each hexadecimal digit represents 4 binary bits, which makes it very useful in computer systems and low-level programming.</p>

          <h2>Example</h2>
          <p>Convert <code>3735928559</code> (a classic number!) to hexadecimal:</p>
          <p><strong>3735928559<sub>10</sub> = DEADBEEF<sub>16</sub></strong></p>
          <p>This is often used as a debugging marker in memory dumps.</p>

          <h2>Hex Table (0-15)</h2>
          <table>
            <thead>
              <tr>
                <th>Decimal</th>
                <th>Hexadecimal</th>
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
                <td>10</td>
                <td>A</td>
              </tr>
              <tr>
                <td>11</td>
                <td>B</td>
              </tr>
              <tr>
                <td>12</td>
                <td>C</td>
              </tr>
              <tr>
                <td>13</td>
                <td>D</td>
              </tr>
              <tr>
                <td>14</td>
                <td>E</td>
              </tr>
              <tr>
                <td>15</td>
                <td>F</td>
              </tr>
            </tbody>
          </table>

          <h2>Why Use Hexadecimal?</h2>
          <p>Hex is widely used in computing for representing memory addresses, color values in HTML/CSS, and compactly representing binary data.</p>
          <p>For example, the RGB color <code>#FF5733</code> is made of three hexadecimal values: FF (red), 57 (green), and 33 (blue).</p>
        </div>
      </div>
    </CalculatorLayout>
  );
}
