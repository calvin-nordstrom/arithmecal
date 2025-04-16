import CalculatorLayout from '@/app/components/CalculatorLayout';
import KatexRenderer from '@/app/components/KatexRenderer';
import Image from 'next/image';
import type { Metadata } from 'next'
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import OctalToASCIIConverter from '@/app/components/conversion/OctalToASCIIConverter';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Octal to ASCII Conversion',
  description: 'Arithmecal octal to ASCII conversion',
  keywords: '',
};

export default function OctalToASCIIConversionPage() {
  return (
    <CalculatorLayout>
      <h1>Octal to ASCII Conversion</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <BaseConverterNavigator />
          <OctalToASCIIConverter />
        </div>
        <div className='calculator-description'>
          <p>This tool allows you to convert between octal (base-8) values and ASCII text characters.</p>

          <h2>How to Use This Converter</h2>
          <ul>
            <li>Enter an octal value like <code>110 145 154 154 157</code> to get ASCII text (e.g., "Hello")</li>
            <li>Or enter ASCII text to see its octal representation</li>
          </ul>

          <h2>Understanding the Conversion</h2>
          <p>Each ASCII character has a unique numeric value. Octal is one way of representing that value, especially in low-level systems like UNIX.</p>
          <p><strong>Example:</strong> The word "Hello" in octal:</p>
          <table>
            <thead>
              <tr>
                <th>Character</th>
                <th>ASCII (Decimal)</th>
                <th>Octal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>H</td>
                <td>72</td>
                <td>110</td>
              </tr>
              <tr>
                <td>e</td>
                <td>101</td>
                <td>145</td>
              </tr>
              <tr>
                <td>l</td>
                <td>108</td>
                <td>154</td>
              </tr>
              <tr>
                <td>l</td>
                <td>108</td>
                <td>154</td>
              </tr>
              <tr>
                <td>o</td>
                <td>111</td>
                <td>157</td>
              </tr>
            </tbody>
          </table>
          <p><strong>Result: 110 145 154 154 157 → "Hello"</strong></p>

          <h2>Why Use Octal?</h2>
          <p>Octal representation is still relevant in contexts such as:</p>
          <ul>
            <li>UNIX file permissions (e.g., <code>chmod 755</code>)</li>
            <li>Working with ASCII in legacy systems</li>
            <li>Viewing octal values in raw data formats</li>
          </ul>
          <p>For more character codes, check out our <Link href='../reference/ascii-table' target='_blank'>ASCII Table</Link>.</p>
        </div>
      </div>
    </CalculatorLayout>
  );
}
