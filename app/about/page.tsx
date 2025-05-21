import MiscLayout from '@/app/components/MiscLayout';
import type { Metadata } from 'next'
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description: '',
  keywords: '',
}

export default function AboutPage() {
  return (
    <MiscLayout>
      <h1>About Us</h1>

      <h2>Our Mission</h2>
      <p>Arithmecal aims to provide <strong>fast</strong>, <strong>accurate</strong>, and <strong>easy-to-use</strong> calculators and reference tools across a wide range of subjects—from science, technology, engineering, and mathematics (STEM) to finance, health, and everyday needs. Whether you&apos;re a student, professional, or curious learner, we aim to simplify complex calculations and concepts for everyone.</p>

      <h2>What We Offer</h2>
      <p>Our site currently features:</p>
      <ul>
        <li><strong>Converters</strong>: Convert between number systems like binary, decimal, hexadecimal, and octal, and to ASCII</li>
        <li><strong>STEM Calculators</strong>: Solve equations from fields like physics and mathematics</li>
        <li><strong>Reference Pages</strong>: View useful resources from various industries</li>
      </ul>
      <p>We&apos;re constantly expanding. Our goal is to add hundreds more calculators and tools across categories including:</p>
      <ul>
        <li><strong>Chemistry, Biology, & Engineering</strong></li>
        <li><strong>Finance & Investment Tools</strong></li>
        <li><strong>Health & Fitness Calculators</strong></li>
        <li><strong>Common Everyday Utilities</strong></li>
      </ul>

      <h2>Why Use Our Tools?</h2>
      <ul>
        <li><strong>Simple Interfaces</strong>: Easy to use on desktop or mobile</li>
        <li><strong>Accurate Results</strong>: Based on proven formulas and trusted values</li>
        <li><strong>Fast & Lightweight</strong>: Minimal loading times and low performance requirements</li>
      </ul>

      <h2>Who We Are</h2>
      <p>This website is built and maintained by the Arithmecal team, with a background in science and mathematics. We are passionate about making knowledge accessible to everyone, regardless of background or expertise.</p>
      <p>If you&apos;re someone who wants to learn more about how things work, Arithmecal is a great place to start. Our site is maintained by people who aim to simplify calculations by providing informative descriptions and real-world examples.</p>

      <h2>Contribute or Suggest</h2>
      <p>Have an idea for a calculator or want to report an error? We&apos;d love to hear from you.</p>
      <p>Contact us: <Link href='../contact' target='_blank'>arithmecal.com/contact</Link></p>

      <h2>Stay Updated</h2>
      <p>We&apos;re constantly updating the site with new tools and features. Bookmark our page to see what&apos;s new!</p>
    </MiscLayout>
  );
}
