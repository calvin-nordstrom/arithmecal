import MiscLayout from '@/app/components/MiscLayout';
import type { Metadata } from 'next'
import FeedbackForm from '../components/contact/FeedbackForm';
import SuggestCalculatorForm from '../components/contact/SuggestCalculatorForm';
import SuggestUnitForm from '../components/contact/SuggestUnitForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Arithmecal contact us page',
  keywords: '',
  formatDetection: { telephone: false, },
}

export default function ContactPage() {
  return (
    <MiscLayout>
      <h1>Contact Us</h1>

      <div className='contact'>
        <div className='contact-form-container'>
          <h2>1. Feedback/Errors</h2>
          <p>Use this form to help us improve our services by providing <strong>general feedback</strong> or <strong>reporting errors</strong>.</p>
          <FeedbackForm />
        </div>

        <div className='contact-form-container'>
          <h2>2. Suggest a Calculator</h2>
          <p>Use this form to suggest a new calculator or provide feedback on an existing one.</p>
          <SuggestCalculatorForm />
        </div>

        <div className='contact-form-container'>
          <h2>3. Suggest a Unit</h2>
          <p>Use this form to suggest a new unit or provide feedback on an existing one.</p>
          <SuggestUnitForm />
        </div>
      </div>
    </MiscLayout>
  );
}
