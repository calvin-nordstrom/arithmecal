import Navbar from '@/app/components/Navbar';
import AdPanelLeft from '@/app/components/AdPanelLeft';
import AdPanelRight from '@/app/components/AdPanelRight';
import Footer from '@/app/components/Footer';
import React from 'react';

interface CalculatorLayoutProps {
  children: React.ReactNode;
}

export default function CalculatorLayout({ children }: CalculatorLayoutProps) {
  return (
    <>
      <div className='top'>
        <Navbar />
      </div>

      <div className='center'>
        <AdPanelLeft />
        <main className='reference-content'>
          {children}
        </main>
        <AdPanelRight />
      </div>

      <div className='bottom'>
        <Footer />
      </div>
    </>
  );
}
