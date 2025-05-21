import CalculatorLayout from '@/app/components/CalculatorLayout';
import type { Metadata } from 'next'
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import ASCIIToDecimalConverter from '@/app/components/conversion/ASCIIToDecimalConverter';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ASCII to Decimal Conversion',
  description: 'Use Arithmecal’s ASCII to decimal converter to convert plain text to decimal values or vice versa. Includes examples and a link to the full ASCII table.',
  keywords: 'ASCII to decimal, decimal to ASCII, ASCII converter, text to decimal, decimal code converter, ASCII table reference, online ASCII converter',
}

export default function ASCIIToDecimalConversionPage() {
  return (
    <CalculatorLayout>
      <h1>ASCII to Decimal Conversion</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <BaseConverterNavigator />
          <ASCIIToDecimalConverter />
        </div>
        <div className='calculator-description'>
      <p>The ASCII to decimal converter allows you to convert from ASCII (plain text) to decimal numeric values, and vice versa.</p>

      <h2>How to Use This Converter</h2>
      <ul>
        <li>Enter the ASCII text you want to convert to decimal values</li>
        <li>Or input a sequence of decimal numbers to convert back to ASCII text</li>
      </ul>
      <p>This tool supports both ASCII to decimal and decimal to ASCII conversion.</p>

      <h2>Understanding the Conversion</h2>
      <p>Each character in ASCII is represented by a specific decimal number. You can look up these values in an <strong>ASCII table</strong>. We have one available on our <Link href='../reference/ascii-table' target='_blank'>reference page</Link>!</p>
      <p>For example, the uppercase letter &quot;A&quot; corresponds to the decimal value <strong>65</strong>. This value comes directly from the ASCII specification.</p>
      <p>Using this table, you can easily map text characters to their decimal equivalents and reconstruct text from decimal numbers.</p>

      <h2>Example</h2>
      <p>Converting the text &quot;Hello&quot; to decimal.</p>
      <p>Using the ASCII table, we find that the characters map to the following decimal values:</p>
      <table>
        <thead>
          <tr>
            <th>Letter</th>
            <th>Decimal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>H</th>
            <td>72</td>
          </tr>
          <tr>
            <th>e</th>
            <td>101</td>
          </tr>
          <tr>
            <th>l</th>
            <td>108</td>
          </tr>
          <tr>
            <th>l</th>
            <td>108</td>
          </tr>
          <tr>
            <th>o</th>
            <td>111</td>
          </tr>
        </tbody>
      </table>

      <h2>More About ASCII</h2>
      <p>ASCII stands for <strong>American Standard Code for Information Interchange</strong>. It was developed in the early days of computing to create a standard way of representing text.</p>
      <p>Each ASCII character is assigned a unique number between 0 and 127. These decimal values represent everything from uppercase and lowercase letters to digits and punctuation marks.</p>
      <p>Although ASCII uses just <strong>7 bits</strong> (for 128 total characters), modern systems typically store them in <strong>8-bit bytes</strong>, with the extra bit sometimes used for extended character sets or additional symbols.</p>
      <p>You can view the full ASCII chart on our <Link href='../reference/ascii-table' target='_blank'>ASCII table</Link> page.</p>
    </div>
      </div>
    </CalculatorLayout>
  );
}
