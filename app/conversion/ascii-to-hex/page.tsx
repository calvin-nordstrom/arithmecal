import CalculatorLayout from '@/app/components/CalculatorLayout';
import type { Metadata } from 'next'
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import ASCIIToHexConverter from '@/app/components/conversion/ASCIIToHexConverter';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ASCII to Hex Conversion',
  description: 'Convert ASCII text to hexadecimal and vice versa with Arithmecal’s free online converter. Includes examples, explanations, and a full ASCII table reference.',
  keywords: 'ASCII to hex, hex to ASCII, ASCII hex converter, text to hexadecimal, hex conversion tool, online ASCII converter, ASCII table reference',
}

export default function ASCIIToHexConversionPage() {
  return (
    <CalculatorLayout>
      <h1>ASCII to Hex Conversion</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <BaseConverterNavigator />
          <ASCIIToHexConverter />
        </div>
        <div className='calculator-description'>
          <p>The ASCII to hexadecimal converter allows you to convert ASCII text into hex values, and vice versa.</p>

          <h2>How to Use This Converter</h2>
          <ul>
            <li>Enter ASCII characters to convert them into hexadecimal format</li>
            <li>Or enter hexadecimal values to convert them back into ASCII text</li>
          </ul>
          <p>This converter supports both directions: ASCII to hex and hex to ASCII.</p>

          <h2>Understanding the Conversion</h2>
          <p>Each ASCII character corresponds to a numeric value, which can be represented in hexadecimal (base-16). You can find these mappings in our <Link href='../reference/ascii-table' target="_blank">ASCII table</Link>.</p>
          <p>For example, the character &quot;A&quot; corresponds to the decimal value 65, which is <strong>41</strong> in hexadecimal.</p>
          <p>Hex is commonly used in programming and digital electronics because it&apos;s a compact representation of binary data.</p>

          <h2>Example</h2>
          <p>Converting the text &quot;Hello&quot; to hexadecimal.</p>
          <table>
            <thead>
              <tr>
                <th>Letter</th>
                <th>Decimal</th>
                <th>Hexadecimal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>H</th>
                <td>72</td>
                <td>48</td>
              </tr>
              <tr>
                <th>e</th>
                <td>101</td>
                <td>65</td>
              </tr>
              <tr>
                <th>l</th>
                <td>108</td>
                <td>6C</td>
              </tr>
              <tr>
                <th>l</th>
                <td>108</td>
                <td>6C</td>
              </tr>
              <tr>
                <th>o</th>
                <td>111</td>
                <td>6F</td>
              </tr>
            </tbody>
          </table>

          <h2>More About ASCII</h2>
          <p>ASCII (American Standard Code for Information Interchange) maps characters to numeric values. These values are often represented in hexadecimal when working with low-level systems, debugging tools, or data encodings.</p>
          <p>While ASCII itself uses 7-bit values, hexadecimal makes it easier to visualize and group binary data—especially in formats like UTF-8, network protocols, or hexadecimal dumps.</p>
          <p>Explore our full <Link href='../reference/ascii-table' target="_blank">ASCII table</Link> for a detailed breakdown.</p>
        </div>
      </div>
    </CalculatorLayout>
  );
}
