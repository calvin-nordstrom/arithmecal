import CalculatorLayout from '@/app/components/CalculatorLayout';
import KatexRenderer from '@/app/components/KatexRenderer';
import Image from 'next/image';
import type { Metadata } from 'next'
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import BinaryToHexConverter from '@/app/components/conversion/BinaryToHexConverter';

export const metadata: Metadata = {
  title: 'Binary to Hex Conversion',
  description: 'Arithmecal binary to hex conversion',
  keywords: '',
}

export default function BinaryToHexConversionPage() {
  return (
    <CalculatorLayout>
      <h1>Binary to Hex Conversion</h1>
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
