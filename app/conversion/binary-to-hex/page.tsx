import CalculatorLayout from '@/app/components/CalculatorLayout';
import type { Metadata } from 'next'
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import BinaryToHexConverter from '@/app/components/conversion/binary-to-hex/BinaryToHexConverter';

export const metadata: Metadata = {
  title: 'Binary to Hex Converter',
  description: 'Convert binary numbers to hexadecimal and vice versa using Arithmecal’s converter. Understand 4-bit binary to hex mapping,  examples, and its importance.',
  keywords: 'binary to hex, hex to binary, binary converter, hexadecimal calculator, base-2 to base-16, hex digits, binary hex conversion, 4-bit binary mapping, hex values in computing',
  alternates: {
    canonical: 'https://www.arithmecal.com/conversion/binary-to-hex',
  },
}

export default function BinaryToHexConverterPage() {
  return (
    <CalculatorLayout>
      <h1>Binary to Hex Converter</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <BaseConverterNavigator />
          <BinaryToHexConverter />
        </div>
        <div className='calculator-description'>
          <p>This tool converts binary numbers into hexadecimal format and vice versa.</p>

          <h2>How to Use This Converter</h2>
          <ul>
            <li>Enter binary numbers to see their hexadecimal representation</li>
            <li>Or input hex values to convert them into binary</li>
          </ul>
          <p>Supports both directions: binary to hex and hex to binary.</p>

          <h2>Understanding the Conversion</h2>
          <p>Hexadecimal is base-16, using digits 0-9 and letters A-F. Each 4-bit binary value maps directly to a single hex digit:</p>
          <ul>
            <li><code>0000<sub>2</sub> = 0<sub>16</sub></code></li>
            <li><code>1010<sub>2</sub> = A<sub>16</sub></code></li>
            <li><code>1111<sub>2</sub> = F<sub>16</sub></code></li>
          </ul>

          <h2>Example</h2>
          <table>
            <thead>
              <tr>
                <th>Binary</th>
                <th>Hex</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0100 0001</td>
                <td>41</td>
              </tr>
              <tr>
                <td>01101000</td>
                <td>68</td>
              </tr>
              <tr>
                <td>01100101</td>
                <td>65</td>
              </tr>
            </tbody>
          </table>

          <h2>Why Use Hexadecimal?</h2>
          <p>Binary (base-2) uses only 0s and 1s. Computers use binary internally to represent all data, including ASCII characters.</p>
          <p>Hexadecimal is easier to read and write than binary and more compact. It&apos;s widely used in programming, color codes, memory dumps, and low-level debugging.</p>
        </div>
      </div>
    </CalculatorLayout>
  );
}
