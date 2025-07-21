import CalculatorLayout from '@/app/components/CalculatorLayout';
import type { Metadata } from 'next'
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import ASCIIToBinaryConverter from '@/app/components/conversion/ascii-to-binary/ASCIIToBinaryConverter';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ASCII to Binary Conversion',
  description: 'Convert ASCII text to binary and binary to ASCII with Arithmecal’s free converter. Includes examples, ASCII table reference, and conversion explanation.',
  keywords: 'ASCII to binary, binary to ASCII, ASCII converter, text to binary, binary converter, ASCII table, free online converter',
  alternates: {
    canonical: 'https://www.arithmecal.com/conversion/ascii-to-binary',
  },
}

export default function ASCIIToBinaryConversionPage() {
  return (
    <CalculatorLayout>
      <h1>ASCII to Binary Conversion</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <BaseConverterNavigator />
          <ASCIIToBinaryConverter />
        </div>
        <div className='calculator-description'>
          <p>The ASCII to binary converter allows you to convert from ASCII (plain text) to binary, and vice versa.</p>

          <h2>How to Use This Converter</h2>
          <ul>
            <li>Enter the ASCII text to be converted to binary</li>
            <li>Or enter the binary to be converted to ASCII text</li>
          </ul>
          <p>This converter is able to convert from ASCII text to binary and vice versa.</p>

          <h2>Understanding the Conversion</h2>
          <p>The quickest way to convert between ASCII text and binary is to use an <strong>ASCII table</strong>. Lucky for you, we have an <Link href='../reference/ascii-table' target='_blank'>ASCII table</Link> on our reference page!</p>
          <p>Typically, you can use an ASCII table to convert a letter into a 1 byte hexadecimal value. You can then use this hexadecimal value to compute the 8 bits of binary that make up the byte.</p>
          <p>For example, the letter &quot;A&quot; converts to 41<sub>16</sub>, which is equivalent to 01000001<sub>2</sub> in binary.</p>

          <h2>Example</h2>
          <p>Converting the text &quot;Hello&quot; to binary.</p>
          <p>Using the ASCII table, we find that the letters correspond to the following hexadecimal values:</p>
          <table>
            <thead>
              <tr>
                <th>Letter</th>
                <th>Hexadecimal</th>
                <th>Binary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>H</th>
                <td>48</td>
                <td>01001000</td>
              </tr>
              <tr>
                <th>e</th>
                <td>65</td>
                <td>01100101</td>
              </tr>
              <tr>
                <th>l</th>
                <td>6C</td>
                <td>01101100</td>
              </tr>
              <tr>
                <th>l</th>
                <td>6C</td>
                <td>01101100</td>
              </tr>
              <tr>
                <th>o</th>
                <td>6F</td>
                <td>01101111</td>
              </tr>
            </tbody>
          </table>

          <h2>More About ASCII</h2>
          <p>ASCII stands for <strong>American Standard Code for Information Interchange</strong>. Developed in the 1960s, ASCII became a widely adopted standard for representing letters, digits, punctuation, and control characters in computers and communication equipment.</p>
          <p>ASCII uses <strong>7 bits</strong> to represent each character, allowing for a total of 128 unique symbols. These include standard English letters (A-Z, a-z), digits (0-9), punctuation marks, and control codes like newline and carriage return.</p>
          <p>Although ASCII only requires 7 bits, characters are typically stored in <strong>8-bit bytes</strong> in modern systems. The extra bit (the most significant bit) was sometimes used for error detection or extended character sets, such as <a href='https://en.wikipedia.org/wiki/ISO/IEC_8859-1' target='_blank'>ISO 8859-1</a> or other encodings that support additional symbols.</p>
          <p>For a full ASCII table, visit our <Link href='../reference/ascii-table' target='_blank'>ASCII table</Link>.</p>
        </div>
      </div>
    </CalculatorLayout>
  );
}
