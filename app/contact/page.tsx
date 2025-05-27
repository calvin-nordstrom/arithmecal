import MiscLayout from '@/app/components/MiscLayout';
import type { Metadata } from 'next'
import EmailForm from '../components/EmailForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Have feedback, found an error, or want to suggest a new calculator or unit? Use our contact forms to reach the Arithmecal team.',
  keywords: 'contact Arithmecal, feedback form, report error, suggest calculator, suggest unit, calculator suggestions, unit suggestions',
}

export default function ContactPage() {
  const recipient = '';

  return (
    <MiscLayout>
      <h1>Contact Us</h1>

      <div className='contact'>
        <div className='contact-form-container'>
          <EmailForm
            title='Send Feedback'
            description='Use this form to help us improve our services by providing general feedback or reporting errors.'
            recipient={recipient}
            subject='Feedback'
            buttonLabel='Send Feedback'
            fields={[
              { id: 'email', label: 'Email (optional)', type: 'input' },
              { id: 'page', label: 'Calculator/Page', required: true, type: 'input' },
              { id: 'feedback', label: 'Feedback', required: true, type: 'textarea' },
            ]}
          />
        </div>

        <div className='contact-form-container'>
          <EmailForm
            title='Suggest a Calculator'
            description='Use this form to suggest a new calculator or provide feedback on an existing one.'
            recipient={recipient}
            subject='Calculator Suggestion'
            buttonLabel='Suggest Calculator'
            fields={[
              { id: 'email', label: 'Email (optional)', type: 'input' },
              { id: 'name', label: 'Calculator Name', required: true, type: 'input' },
              { id: 'description', label: 'Calculator Description', required: true, type: 'textarea' },
            ]}
          />
        </div>

        <div className='contact-form-container'>
          <EmailForm
            title='Suggest a Unit'
            description='Use this form to suggest a new unit or provide feedback on an existing one.'
            recipient={recipient}
            subject='Unit Suggestion'
            buttonLabel='Suggest Unit'
            fields={[
              { id: 'email', label: 'Email (optional)', type: 'input' },
              { id: 'unit', label: 'Unit', required: true, type: 'input' },
              { id: 'description', label: 'Unit Description', required: true, type: 'textarea' },
            ]}
          />
        </div>
      </div>
    </MiscLayout>
  );
}
