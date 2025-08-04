import CalculatorLayout from '@/app/components/CalculatorLayout';
import type { Metadata } from 'next'
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import ASCIIToOctalConverter from '@/app/components/conversion/ascii-to-octal/ASCIIToOctalConverter';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ASCII to Octal Converter',
  description: 'Convert ASCII text to octal numbers (base-8) and vice versa with Arithmecal’s free online converter. Includes examples, explanations, and ASCII reference.',
  keywords: 'ASCII to octal, octal to ASCII, ASCII octal converter, text to octal, octal conversion tool, online ASCII converter, ASCII table reference',
  alternates: {
    canonical: 'https://www.arithmecal.com/conversion/ascii-to-octal',
  },
}

export default function ASCIIToOctalConverterPage() {
  return (
    <CalculatorLayout>
      <h1>ASCII to Octal Converter</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <BaseConverterNavigator />
          <ASCIIToOctalConverter />
        </div>
        <div className='calculator-description'>
          <p>This ASCII to octal converter allows you to convert plain text into octal numbers and back again.</p>

          <h2>How to Use This Converter</h2>
          <ul>
            <li>Type or paste ASCII text to see its octal (base-8) representation</li>
            <li>Or enter octal numbers to convert them back to ASCII characters</li>
          </ul>
          <p>The converter works both ways — ASCII to octal and octal to ASCII.</p>

          <h2>Understanding the Conversion</h2>
          <p>Each ASCII character maps to a decimal value, which can be converted to octal. Octal (base-8) is another way of representing binary data in a more compact form than binary itself.</p>
          <p>For example, the character &quot;A&quot; has a decimal value of 65, which is <strong>101</strong> in octal.</p>
          <p>You can use an <Link href='../reference/ascii-table' target='_blank'>ASCII table</Link> to find decimal values, then convert those to octal manually or using this tool.</p>

          <h2>Example</h2>
          <p>Converting &quot;Hello&quot; to octal:</p>
          <table>
            <thead>
              <tr>
                <th>Letter</th>
                <th>Decimal</th>
                <th>Octal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>H</th>
                <td>72</td>
                <td>110</td>
              </tr>
              <tr>
                <th>e</th>
                <td>101</td>
                <td>145</td>
              </tr>
              <tr>
                <th>l</th>
                <td>108</td>
                <td>154</td>
              </tr>
              <tr>
                <th>l</th>
                <td>108</td>
                <td>154</td>
              </tr>
              <tr>
                <th>o</th>
                <td>111</td>
                <td>157</td>
              </tr>
            </tbody>
          </table>

          <h2>More About ASCII</h2>
          <p>ASCII is a 7-bit character set, and each character maps to a specific decimal value. These values can be expressed in octal form, which was more commonly used in older computer systems and certain programming environments like early Unix systems.</p>
          <p>While octal isn&apos;t as widely used today as hexadecimal, it still shows up in specific contexts — especially when dealing with file permissions in Unix-like systems.</p>
          <p>You can refer to our full <Link href='../reference/ascii-table' target='_blank'>ASCII table</Link> for more information.</p>
        </div>
      </div>
    </CalculatorLayout>
  );
}
