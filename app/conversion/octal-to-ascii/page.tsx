import CalculatorLayout from '@/app/components/CalculatorLayout';
import type { Metadata } from 'next'
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import OctalToASCIIConverter from '@/app/components/conversion/octal-to-ascii/OctalToASCIIConverter';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Octal to ASCII Conversion',
  description: 'Convert octal (base-8) values to ASCII text and vice versa using Arithmecal’s Octal to ASCII converter. Ideal for developers and working with legacy systems.',
  keywords: 'octal to ASCII, octal conversion, ASCII conversion, octal to text, ASCII to octal, number system conversion, legacy systems, UNIX',
  alternates: {
    canonical: 'https://www.arithmecal.com/conversion/octal-to-ascii',
  },
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
            <li>Enter an octal value like <code>110 145 154 154 157</code> to get ASCII text (e.g., &quot;Hello&quot;)</li>
            <li>Or enter ASCII text to see its octal representation</li>
          </ul>

          <h2>Understanding the Conversion</h2>
          <p>Each ASCII character has a unique numeric value. Octal is one way of representing that value, especially in low-level systems like UNIX.</p>
          <p><strong>Example:</strong> The word &quot;Hello&quot; in octal:</p>
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
          <p><strong>Result: 110 145 154 154 157 → &quot;Hello&quot;</strong></p>

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
