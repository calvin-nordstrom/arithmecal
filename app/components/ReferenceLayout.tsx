import Header from '@/app/components/Header';
import AdPanelLeft from '@/app/components/AdPanelLeft';
import AdPanelRight from '@/app/components/AdPanelRight';
import Footer from '@/app/components/Footer';
import React from 'react';

interface ReferenceLayoutProps {
  children: React.ReactNode;
}

export default function ReferenceLayout({ children }: ReferenceLayoutProps) {
  return (
    <>
      <div className='top'>
        <Header />
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
