import type { Metadata } from 'next'
import Link from 'next/link';
import CalculatorLayout from '../components/CalculatorLayout';

export const metadata: Metadata = {
  title: 'Converters',
  description: 'Explore a wide range of number system converters on Arithmecal, including ASCII, binary, decimal, hexadecimal, and octal conversions.',
  keywords: 'number system converters, ASCII to binary, binary to decimal, hexadecimal conversion, decimal to octal, radix conversion tools, online conversion tool',
  alternates: {
    canonical: 'https://www.arithmecal.com/conversion',
  },
};

export default function ConvertersPage() {
  return (
    <CalculatorLayout>
      <h1>Converters</h1>
      <p>Explore our comprehensive collection of converters. Whether you&apos;re a student, developer, engineer, or just curious, these tools provide instant, accurate conversions to support your work or learning. Our radix and ASCII converters help you understand the importance of number system conversion in computing, data encoding, and digital electronics—this page is your one-stop solution for mastering those conversions. More converter tools are coming soon to expand your capabilities even further.</p>

      <div className='calculator-category'>
        <h2>General Converters</h2>
        <ul>
          <li><Link href='conversion/unit-converter'>Unit Converter (All Units)</Link></li>
        </ul>

        <h2>Radix and ASCII Converters</h2>
        <ul>
          <li><Link href='conversion/ascii-to-binary'>ASCII to Binary</Link></li>
          <li><Link href='conversion/ascii-to-decimal'>ASCII to Decimal</Link></li>
          <li><Link href='conversion/ascii-to-hex'>ASCII to Hexadecimal</Link></li>
          <li><Link href='conversion/ascii-to-octal'>ASCII to Octal</Link></li>
          <li><Link href='conversion/binary-to-ascii'>Binary to ASCII</Link></li>
          <li><Link href='conversion/binary-to-decimal'>Binary to Decimal</Link></li>
          <li><Link href='conversion/binary-to-hex'>Binary to Hexadecimal</Link></li>
          <li><Link href='conversion/binary-to-octal'>Binary to Octal</Link></li>
          <li><Link href='conversion/decimal-to-ascii'>Decimal to ASCII</Link></li>
          <li><Link href='conversion/decimal-to-binary'>Decimal to Binary</Link></li>
          <li><Link href='conversion/decimal-to-hex'>Decimal to Hexadecimal</Link></li>
          <li><Link href='conversion/decimal-to-octal'>Decimal to Octal</Link></li>
          <li><Link href='conversion/hex-to-ascii'>Hexadecimal to ASCII</Link></li>
          <li><Link href='conversion/hex-to-binary'>Hexadecimal to Binary</Link></li>
          <li><Link href='conversion/hex-to-decimal'>Hexadecimal to Decimal</Link></li>
          <li><Link href='conversion/hex-to-octal'>Hexadecimal to Octal</Link></li>
          <li><Link href='conversion/octal-to-ascii'>Octal to ASCII</Link></li>
          <li><Link href='conversion/octal-to-binary'>Octal to Binary</Link></li>
          <li><Link href='conversion/octal-to-decimal'>Octal to Decimal</Link></li>
          <li><Link href='conversion/octal-to-hex'>Octal to Hexadecimal</Link></li>
        </ul>
      </div>
    </CalculatorLayout>
  );
}
