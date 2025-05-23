import type { Metadata } from 'next'
import Link from 'next/link';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Arithmecal',
  description: 'Arithmecal is an all-in-one platform for fast, free, and accurate calculators featuring tools and references for math, science, technology, conversion, and more.',
  keywords: 'online calculators, math calculator, unit converter, physics calculator, conversion tools, educational tools, reference calculators, Arithmecal, free calculators, web tools, STEM calculators'
}

export default function HomePage() {
  return (
    <>
      <main className='home'>
        <div className='title-banner'>
          <h1>Arithmecal</h1>
          <h2><em>The everything calculator</em></h2>
        </div>

        <div className='home-content-container'>
          <div className='home-content'>
            <h2>Search Calculators</h2>
            <input type='text' className='search-input' placeholder='Search calculators...' />
          </div>
          <div className='home-content'>
            <h2>Featured Categories</h2>
            <div className='home-category-item-container'>
              <div className='home-category-item'>
                <Link href='./conversion' className='home-category-link'>
                  <h3>Conversion</h3>
                </Link>
              </div>
              <div className='home-category-item'>
                <Link href='./math' className='home-category-link'>
                  <h3>Math</h3>
                </Link>
              </div>
              <div className='home-category-item'>
                <Link href='./physics' className='home-category-link'>
                  <h3>Physics</h3>
                </Link>
              </div>
              <div className='home-category-item'>
                <Link href='./reference' className='home-category-link'>
                  <h3>Reference</h3>
                </Link>
              </div>
            </div>
          </div>
          <div className='home-content home-about'>
            <h2>About Us</h2>
            <p>Whether you&apos;re a student, professional, or casual learner, calculations are involved. Sometimes you might not know how to solve something or lack the details behind a calculation. These are times where a tool like Arithmecal is your best friend. Our services provide accurate results in an easy-to-use and efficient calculator format.</p>
            <Link href='./about' className='home-about-link'>
              <span>Read more</span>
            </Link>
          </div>
        </div>
      </main>

      <div className='bottom'>
        <Footer />
      </div>
    </>
  )
}
