import type { Metadata } from 'next'
import Link from 'next/link';
import CalculatorLayout from '../components/CalculatorLayout';

export const metadata: Metadata = {
  title: 'Converters',
  description: 'Arithmecal converters',
  keywords: '',
}

export default function ConvertersPage() {
  return (
    <CalculatorLayout>
      <h1>Converters</h1>
      <div className='calculator-category'>
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
