import CalculatorLayout from '@/app/components/CalculatorLayout';
import type { Metadata } from 'next'
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import BinaryToASCIIConverter from '@/app/components/conversion/binary-to-ascii/BinaryToASCIIConverter';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Binary to ASCII Converter',
  description: 'Convert binary values to ASCII characters and ASCII text to binary with Arithmecal’s accurate converter. Supports 8-bit binary groups and bidirectional conversion.',
  keywords: 'binary to ASCII, ASCII to binary, binary text converter, 8-bit binary ASCII, ASCII table reference, binary decoder, text to binary, binary character converter',
  alternates: {
    canonical: 'https://arithmecal.com/conversion/binary-to-ascii',
  },
}

export default function BinaryToASCIIConverterPage() {
  return (
    <CalculatorLayout>
      <h1>Binary to ASCII Converter</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <BaseConverterNavigator />
          <BinaryToASCIIConverter />
        </div>
        <div className='calculator-description'>
          <p>This binary to ASCII converter helps you decode binary-encoded text and convert ASCII characters to their binary representation.</p>

          <h2>How to Use This Converter</h2>
          <ul>
            <li>Enter binary values (in 8-bit groups) to see their ASCII equivalent</li>
            <li>Or type ASCII characters to view their binary representation</li>
          </ul>
          <p>Supports both binary to ASCII and ASCII to binary conversion.</p>

          <h2>Understanding the Conversion</h2>
          <p>Each ASCII character is represented by an 8-bit binary number. For example, the letter &quot;A&quot; is <strong>01000001</strong> in binary.</p>
          <p>To decode binary, split the binary input into 8-bit segments and match them with their decimal/ASCII equivalents using an <Link href='../reference/ascii-table' target='_blank'>ASCII table</Link>.</p>

          <h2>Example</h2>
          <p>Convert binary <code>01001000 01100101 01101100 01101100 01101111</code> to ASCII:</p>
          <table>
            <thead>
              <tr>
                <th>Binary</th>
                <th>Decimal</th>
                <th>ASCII</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01001000</td>
                <td>72</td>
                <td>H</td>
              </tr>
              <tr>
                <td>01100101</td>
                <td>101</td>
                <td>e</td>
              </tr>
              <tr>
                <td>01101100</td>
                <td>108</td>
                <td>l</td>
              </tr>
              <tr>
                <td>01101100</td>
                <td>108</td>
                <td>l</td>
              </tr>
              <tr>
                <td>01101111</td>
                <td>111</td>
                <td>o</td>
              </tr>
            </tbody>
          </table>

          <h2>More About Binary</h2>
          <p>Binary (base-2) uses only 0s and 1s. Computers use binary internally to represent all data, including ASCII characters.</p>
          <p>ASCII assigns each character a unique number between 0 and 127, which can be represented as a binary number using 7 or 8 bits.</p>

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
