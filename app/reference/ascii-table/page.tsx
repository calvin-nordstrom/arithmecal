import CalculatorLayout from '@/app/components/CalculatorLayout';
import KatexRenderer from '@/app/components/KatexRenderer';
import Image from 'next/image';
import type { Metadata } from 'next'
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import ASCIIToBinaryConverter from '@/app/components/conversion/ASCIIToBinaryConverter';

export const metadata: Metadata = {
  title: 'ASCII Table',
  description: 'Arithmecal ASCII table',
  keywords: '',
}

export default function ASCIITablePage() {
  return (
    <CalculatorLayout>
      <h1>ASCII Table</h1>
      
    </CalculatorLayout>
  );
}
