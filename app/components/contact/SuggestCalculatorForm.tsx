'use client';

import { useState } from 'react';

export default function SuggestCalculatorForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const recipient = 'example@example.com';
    const subject = encodeURIComponent('Calculator Suggestion');
    const body = encodeURIComponent(
      `Suggested Calculator: ${name}\n` +
      `User Email: ${email || 'Not provided'}\n\n` +
      `Description:\n${description}`
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email (optional):</label><br />
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="name">Calculator Name:</label><br />
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="description">Calculator Description:</label><br />
        <textarea
          id="description"
          rows={6}
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button type="submit">Suggest Calculator</button>
    </form>
  );
}
