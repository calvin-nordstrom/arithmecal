import CalculatorLayout from '@/app/components/CalculatorLayout';
import type { Metadata } from 'next'
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import DecimalToASCIIConverter from '@/app/components/conversion/decimal-to-ascii/DecimalToASCIIConverter';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Decimal to ASCII Conversion',
  description: 'Convert decimal numbers to ASCII characters and vice versa with Arithmecal’s easy-to-use tool. Learn decimal-ASCII mappings and through conversion examples.',
  keywords: 'decimal to ASCII, ASCII to decimal, decimal ASCII converter, ASCII conversion tool, number to character conversion, Arithmecal, base-10 to ASCII',
  alternates: {
    canonical: 'https://www.arithmecal.com/conversion/decimal-to-ascii',
  },
};

export default function DecimalToASCIIConversionPage() {
  return (
    <CalculatorLayout>
      <h1>Decimal to ASCII Conversion</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <BaseConverterNavigator />
          <DecimalToASCIIConverter />
        </div>
        <div className='calculator-description'>
          <p>This converter allows you to convert decimal numbers (base-10) into ASCII characters, and vice versa.</p>

          <h2>How to Use This Converter</h2>
          <ul>
            <li>Enter a decimal number (e.g., 65) to see the corresponding ASCII character</li>
            <li>Or enter ASCII text to get its decimal representation</li>
          </ul>
          <p>This converter supports both conversions: decimal to ASCII and ASCII to decimal.</p>

          <h2>Understanding the Conversion</h2>
          <p>Each ASCII character is represented by a number between 0 and 127. These numbers correspond to letters, digits, symbols, and control characters.</p>
          <p>For example:</p>
          <ul>
            <li>65 → &apos;A&apos;</li>
            <li>66 → &apos;B&apos;</li>
            <li>97 → &apos;a&apos;</li>
            <li>32 → (space character)</li>
          </ul>
          <p>You can use our <Link href='../reference/ascii-table' target='_blank'>ASCII table</Link> to look up any character&apos;s decimal code.</p>

          <h2>Example</h2>
          <p>Convert the decimal values <code>72 101 108 108 111</code> to ASCII:</p>
          <ul>
            <li>72 → H</li>
            <li>101 → e</li>
            <li>108 → l</li>
            <li>108 → l</li>
            <li>111 → o</li>
          </ul>
          <p><strong>Result: <code>&quot;Hello&quot;</code></strong></p>

          <h2>Why This Is Useful</h2>
          <p>Decimal to ASCII conversions are useful when dealing with low-level data formats, communication protocols, or debugging output from devices that show ASCII values in numeric form.</p>
          <p>This kind of conversion is common in programming, networking, and embedded systems.</p>

          <h2>More About ASCII</h2>
          <p>ASCII (American Standard Code for Information Interchange) defines 128 characters using numbers 0-127. These include:</p>
          <ul>
            <li>Control characters (0-31 and 127)</li>
            <li>Digits (48-57)</li>
            <li>Uppercase letters (65-90)</li>
            <li>Lowercase letters (97-122)</li>
            <li>Common punctuation and symbols</li>
          </ul>
          <p>Visit our <Link href='../reference/ascii-table' target='_blank'>ASCII table</Link> for a full reference.</p>
        </div>
      </div>
    </CalculatorLayout>
  );
}
