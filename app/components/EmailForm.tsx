'use client';

import { useState } from 'react';

type Field = {
  id: string;
  label: string;
  required?: boolean;
  type: 'input' | 'textarea';
};

type EmailFormProps = {
  title: string;
  description: string;
  recipient: string;
  subject: string;
  fields: Field[];
  buttonLabel: string;
};

export default function EmailForm({
  title,
  description,
  recipient,
  subject,
  fields,
  buttonLabel,
}: EmailFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>(
    Object.fromEntries(fields.map((f) => [f.id, '']))
  );

  const handleChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const body = fields
      .map(
        (f) =>
          `${f.label}: ${formData[f.id] || (f.required ? '[Required but missing]' : 'Not provided')}`
      )
      .join('\n\n');

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{title}</h2>
      <p>{description}</p>
      <br />
      {fields.map((field) => (
        <div key={field.id}>
          <label htmlFor={field.id}>{field.label}{field.required ? ' *' : ''}</label><br />
          {field.type === 'input' ? (
            <input
              id={field.id}
              type='text'
              required={field.required}
              value={formData[field.id]}
              onChange={(e) => handleChange(field.id, e.target.value)}
            />
          ) : (
            <textarea
              id={field.id}
              rows={6}
              required={field.required}
              value={formData[field.id]}
              onChange={(e) => handleChange(field.id, e.target.value)}
            />
          )}
        </div>
      ))}

      <button type='submit'>{buttonLabel}</button>
    </form>
  );
}
