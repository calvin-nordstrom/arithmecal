import CalculatorLayout from '@/app/components/CalculatorLayout';
import KatexRenderer from '@/app/components/KatexRenderer';
import Image from 'next/image';
import type { Metadata } from 'next'
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import OctalToDecimalConverter from '@/app/components/conversion/OctalToDecimalConverter';

export const metadata: Metadata = {
  title: 'Octal to Decimal Conversion',
  description: 'Arithmecal octal to decimal conversion',
  keywords: '',
};

export default function OctalToDecimalConversionPage() {
  return (
    <CalculatorLayout>
      <h1>Octal to Decimal Conversion</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <BaseConverterNavigator />
          <OctalToDecimalConverter />
        </div>
        <div className='calculator-description'>
          <p>This tool helps you convert octal (base-8) numbers to decimal (base-10) numbers and vice versa.</p>

          <h2>How to Use This Converter</h2>
          <ul>
            <li>Enter an octal number (e.g., <code>35</code>) to get its decimal equivalent</li>
            <li>Or enter a decimal number to convert it to octal</li>
          </ul>

          <h2>Understanding the Conversion</h2>
          <p>Octal uses the digits 0-7, and each digit represents a power of 8. To convert from octal to decimal, multiply each digit by 8 raised to the power of its position (right to left, starting at 0).</p>
          <p><strong>Example:</strong> Convert <code>35<sub>8</sub></code> to decimal:</p>
          <ul>
            <li>3 &times; 8¹ = 24</li>
            <li>5 &times; 8⁰ = 5</li>
          </ul>
          <p><strong>Result: 24 + 5 = 29</strong></p>

          <h2>Why Use Octal and Decimal?</h2>
          <p>Octal is useful in older systems like UNIX, while decimal is the standard number system in everyday use. This converter is ideal for tasks that require working with both number systems in fields like computing and electronics.</p>
        </div>
      </div>
    </CalculatorLayout>
  );
}
