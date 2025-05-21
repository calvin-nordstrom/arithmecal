import MiscLayout from '@/app/components/MiscLayout';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read Arithmecal’s Terms of Service to understand the rules and limitations for using our services including acceptable use, liability, and third-party services.',
  keywords: 'Terms of Service, Website Terms, Legal, Disclaimer, Privacy, Usage Rules, Liability, Google Analytics, Google AdSense, Online Tools, Calculator Terms',
}

export default function TermsPage() {
  return (
    <MiscLayout>
      <h1>Terms of Service</h1>
      <p>Last updated: May 19, 2025</p>

      <p>These Terms of Service (&quot;Terms&quot;) govern your use of this website (&quot;the Site&quot;). By accessing or using the Site, you agree to these Terms. If you do not agree, please do not use the Site.</p>

      <h2>1. Use of the Site</h2>
      <p>The Site is provided for informational and personal use only. You agree not to use the Site for any unlawful purpose or in violation of these Terms.</p>

      <h2>2. Intellectual Property</h2>
      <p>Unless otherwise stated, all content on the Site — including calculators, code, text, graphics, and design — is the intellectual property of the Site owner and may not be copied, redistributed, or modified without permission.</p>

      <h2>3. Third-Party Services</h2>
      <p>The Site may use third-party services such as Google Analytics and Google AdSense. Use of these services is governed by their own terms and policies.</p>
      <ul>
        <li><a href='https://policies.google.com/privacy' target='_blank'>Google Privacy Policy</a></li>
        <li><a href='https://policies.google.com/technologies/ads' target='_blank'>Google Ad Terms</a></li>
      </ul>

      <h2>4. No Warranties</h2>
      <p>The Site is provided &quot;as is&quot; without warranties of any kind, either express or implied. While efforts are made to ensure content is accurate and functional, no guarantees are made regarding correctness, availability, or uninterrupted use.</p>

      <h2>5. Limitation of Liability</h2>
      <p>To the fullest extent permitted by law, the Site owner shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the Site or its content.</p>

      <h2>6. User Content</h2>
      <p>If you submit any content (such as through the contact form), you grant the Site a non-exclusive, royalty-free right to use that content to respond to your inquiry. You remain responsible for its legality and accuracy.</p>

      <h2>7. Changes to These Terms</h2>
      <p>These Terms may be updated at any time. It is your responsibility to review them periodically. Continued use of the Site after changes constitutes acceptance of the revised Terms.</p>

      <h2>8. Termination</h2>
      <p>The Site owner reserves the right to restrict or terminate access to the Site for violations of these Terms, or for any reason, without notice.</p>

      <h2>9. Governing Law</h2>
      <p>These Terms shall be governed by and interpreted in accordance with the laws of the State of Massachusetts and the United States of America, without regard to conflict of law principles.</p>

      <h2>10. Contact</h2>
      <p>If you have any questions about these Terms, please contact:</p>
      <p><strong>Email:</strong> <a href='mailto:[example@example.com]'>[example@example.com]</a></p>
    </MiscLayout>
  );
}
