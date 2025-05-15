import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import React from 'react';

interface MiscLayoutProps {
  children: React.ReactNode;
}

export default function MiscLayout({ children }: MiscLayoutProps) {
  return (
    <>
      <div className='top'>
        <Header />
      </div>

      <div className='center'>
        <main className='reference-content'>
          {children}
        </main>
      </div>

      <div className='bottom'>
        <Footer />
      </div>
    </>
  );
}
