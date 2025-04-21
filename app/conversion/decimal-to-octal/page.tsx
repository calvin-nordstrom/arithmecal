import CalculatorLayout from '@/app/components/CalculatorLayout';
import KatexRenderer from '@/app/components/KatexRenderer';
import Image from 'next/image';
import type { Metadata } from 'next'
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import DecimalToOctalConverter from '@/app/components/conversion/DecimalToOctalConverter';

export const metadata: Metadata = {
  title: 'Decimal to Octal Conversion',
  description: 'Arithmecal decimal to octal conversion',
  keywords: '',
};

export default function DecimalToOctalConversionPage() {
  return (
    <CalculatorLayout>
      <h1>Decimal to Octal Conversion</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <BaseConverterNavigator />
          <DecimalToOctalConverter />
        </div>
        <div className='calculator-description'>
          <p>This tool converts numbers between the decimal system (base-10) and the octal system (base-8).</p>

          <h2>How to Use This Converter</h2>
          <ul>
            <li>Enter a decimal number (e.g., 64) to get the equivalent in octal</li>
            <li>Or input an octal number (e.g., 100) to get its decimal value</li>
          </ul>
          <p>Supports two-way conversion between decimal and octal values.</p>

          <h2>Understanding the Conversion</h2>
          <p>Octal (base-8) uses digits from 0 to 7. It&apos;s particularly useful in computing because each octal digit directly represents 3 bits of binary data.</p>
          <p>Example:</p>
          <ul>
            <li>Decimal 64 = Octal 100</li>
            <li>Decimal 83 = Octal 123</li>
            <li>Decimal 255 = Octal 377</li>
          </ul>

          <h2>Example</h2>
          <p>Convert decimal <code>200</code> to octal:</p>
          <ol>
            <li>200 ÷ 8 = 25 remainder 0</li>
            <li>25 ÷ 8 = 3 remainder 1</li>
            <li>3 ÷ 8 = 0 remainder 3</li>
            <li>Read remainders in reverse: <strong>310</strong></li>
          </ol>
          <p><strong>Result: 200<sub>10</sub> = 310<sub>8</sub></strong></p>

          <h2>Octal Reference Table (0-63)</h2>
          <table>
            <thead>
              <tr>
                <th>Decimal</th>
                <th>Octal</th>
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
                <td>10</td>
              </tr>
              <tr>
                <td>9</td>
                <td>11</td>
              </tr>
              <tr>
                <td>10</td>
                <td>12</td>
              </tr>
              <tr>
                <td>11</td>
                <td>13</td>
              </tr>
              <tr>
                <td>12</td>
                <td>14</td>
              </tr>
              <tr>
                <td>13</td>
                <td>15</td>
              </tr>
              <tr>
                <td>14</td>
                <td>16</td>
              </tr>
              <tr>
                <td>15</td>
                <td>17</td>
              </tr>
              <tr>
                <td>16</td>
                <td>20</td>
              </tr>
              <tr>
                <td>32</td>
                <td>40</td>
              </tr>
              <tr>
                <td>63</td>
                <td>77</td>
              </tr>
            </tbody>
          </table>

          <h2>Why Use Octal?</h2>
          <p>Octal was historically used in Unix file permissions and in older mainframe computing. While less common than hexadecimal, it&apos;s still useful for compactly representing binary data in groups of 3 bits.</p>
          <p>Example: Unix file permissions like <code>chmod 755</code> are in octal!</p>
        </div>
      </div>
    </CalculatorLayout>
  );
}
