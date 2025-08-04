import CalculatorLayout from '@/app/components/CalculatorLayout';
import type { Metadata } from 'next'
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import BinaryToOctalConverter from '@/app/components/conversion/binary-to-octal/BinaryToOctalConverter';

export const metadata: Metadata = {
  title: 'Binary to Octal Converter',
  description: 'Convert binary numbers to octal and octal to binary with Arithmecal’s accurate converter. Learn how 3-bit binary groups map to base-8 values with examples.',
  keywords: 'binary to octal, octal to binary, binary converter, octal calculator, base-2 to base-8, 3-bit grouping, Unix file permissions, octal conversion examples, binary octal mapping',
  alternates: {
    canonical: 'https://www.arithmecal.com/conversion/binary-to-octal',
  },
}

export default function BinaryToOctalConverterPage() {
  return (
    <CalculatorLayout>
      <h1>Binary to Octal Converter</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <BaseConverterNavigator />
          <BinaryToOctalConverter />
        </div>
        <div className='calculator-description'>
          <p>Use this converter to easily convert binary numbers into octal values and vice versa.</p>

          <h2>How to Use This Converter</h2>
          <ul>
            <li>Enter a binary number (base-2) to see its octal equivalent</li>
            <li>Or input an octal number (base-8) to convert it to binary</li>
          </ul>
          <p>This converter supports both directions: binary to octal and octal to binary.</p>

          <h2>Understanding the Conversion</h2>
          <p>Binary is base-2 and uses only 0s and 1s, while octal is base-8 and uses digits from 0 to 7. Each group of <strong>3 binary digits</strong> corresponds to <strong>1 octal digit</strong>. This makes binary-to-octal conversion quick and efficient without needing to go through decimal first.</p>

          <h3>Binary to Octal Grouping</h3>
          <p>To convert binary to octal:</p>
          <ol>
            <li>Start from the right and split the binary number into groups of 3 bits</li>
            <li>Add leading zeros to the leftmost group if needed to make a complete group of 3</li>
            <li>Convert each group to its octal value</li>
          </ol>
          <p>Example grouping:</p>
          <pre>
            Binary:     101110011 (9 bits)<br />
            Grouped:    000 101 110 011<br />
            Octal:      0    5   6   3 → 0563
          </pre>

          <h2>Example</h2>
          <p>Convert the binary number <code>100111</code> to octal:</p>
          <ol>
            <li>Group into 3s: <code>100 111</code></li>
            <li>Convert each: <code>4 7</code></li>
          </ol>
          <p><strong>Result: <code>100111<sub>2</sub> = 47<sub>8</sub></code></strong></p>
          <p>Additional example conversions:</p>
          <table>
            <thead>
              <tr>
                <th>Binary</th>
                <th>Octal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>000 100</td>
                <td>04</td>
              </tr>
              <tr>
                <td>111 111</td>
                <td>77</td>
              </tr>
              <tr>
                <td>100 110</td>
                <td>46</td>
              </tr>
              <tr>
                <td>010 011</td>
                <td>23</td>
              </tr>
            </tbody>
          </table>

          <h2>Why Use Octal?</h2>
          <p>Before hexadecimal became the standard, octal was widely used in early computing systems, especially with systems based on 12-bit, 24-bit, or 36-bit architectures.</p>
          <p>Octal offers a more human-readable format than binary while maintaining a straightforward mapping—each octal digit represents exactly 3 bits.</p>
          <p>Octal is still used today in areas like:</p>
          <ul>
            <li>File permissions in Unix/Linux systems (e.g., <code>chmod 755</code>)</li>
            <li>Embedded systems and microcontrollers</li>
            <li>Instruction sets and legacy computing systems</li>
          </ul>
        </div>
      </div>
    </CalculatorLayout>
  );
}
