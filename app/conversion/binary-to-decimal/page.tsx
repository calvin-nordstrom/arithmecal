import CalculatorLayout from '@/app/components/CalculatorLayout';
import KatexRenderer from '@/app/components/KatexRenderer';
import type { Metadata } from 'next'
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import BinaryToDecimalConverter from '@/app/components/conversion/binary-to-decimal/BinaryToDecimalConverter';

export const metadata: Metadata = {
  title: 'Binary to Decimal Converter',
  description: 'Convert binary numbers to decimal and vice versa with Arithmecal’s accurate and easy-to-use converter. Understand binary place values through math examples.',
  keywords: 'binary to decimal, decimal to binary, binary converter, base-2 to base-10, binary number calculator, binary math, bit value table, binary positional values, number base conversion',
  alternates: {
    canonical: 'https://www.arithmecal.com/conversion/binary-to-decimal',
  },
}

export default function BinaryToDecimalConverterPage() {
  return (
    <CalculatorLayout>
      <h1>Binary to Decimal Converter</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <BaseConverterNavigator />
          <BinaryToDecimalConverter />
        </div>
        <div className='calculator-description'>
          <p>This converter helps you convert binary numbers into decimal values and vice versa.</p>

          <h2>How to Use This Converter</h2>
          <ul>
            <li>Enter a binary number (base-2) to see its decimal equivalent</li>
            <li>Or input a decimal number to convert it into binary</li>
          </ul>
          <p>Works for both binary to decimal and decimal to binary conversions.</p>

          <h2>Understanding the Conversion</h2>
          <p>Binary numbers use base-2, where each digit is a power of 2. Like decimal numbers, the <strong>most significant digits are the leftmost ones</strong>. To derive the positional values, follow these steps:</p>
          <ol>
            <li>Find the bit position relative to the least significant bit (the rightmost digit)</li>
            <li>The positional value is 2 raised to the bit position</li>
          </ol>
          <p>For example, these are the digit values for 8 bits (1 byte)</p>
          <table>
            <thead>
              <tr>
                <th>Bit Position</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>7</td>
                <td>128</td>
              </tr>
              <tr>
                <td>6</td>
                <td>64</td>
              </tr>
              <tr>
                <td>5</td>
                <td>32</td>
              </tr>
              <tr>
                <td>4</td>
                <td>16</td>
              </tr>
              <tr>
                <td>3</td>
                <td>8</td>
              </tr>
              <tr>
                <td>2</td>
                <td>4</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2</td>
              </tr>
              <tr>
                <td>0</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>

          <h2>Example</h2>
          <p>Convert the binary number <code>10110011</code> to decimal.</p>
          <table>
            <thead>
              <tr>
                <th>Bit Position</th>
                <th>Value</th>
                <th>Binary Digit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>7</td>
                <td>128</td>
                <td>1</td>
              </tr>
              <tr>
                <td>6</td>
                <td>64</td>
                <td>0</td>
              </tr>
              <tr>
                <td>5</td>
                <td>32</td>
                <td>1</td>
              </tr>
              <tr>
                <td>4</td>
                <td>16</td>
                <td>1</td>
              </tr>
              <tr>
                <td>3</td>
                <td>8</td>
                <td>0</td>
              </tr>
              <tr>
                <td>2</td>
                <td>4</td>
                <td>0</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>1</td>
              </tr>
              <tr>
                <td>0</td>
                <td>1</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
          <div className='katex-block'>
            <KatexRenderer formula='128+32+16+2+1=179' />
          </div>
          <p>Adding up the positional values of the binary digits that are <code>1</code>, we find that the decimal equivalent of <code>10110011</code> is <strong>179</strong>.</p>

          <h2>Why It Matters</h2>
          <p>Binary is used internally by computers, while decimal is what humans use daily. Understanding this conversion is key for anyone learning about computing, programming, or digital electronics.</p>
        </div>
      </div>
    </CalculatorLayout>
  );
}
