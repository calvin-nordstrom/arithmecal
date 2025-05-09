'use client';

import { useState } from 'react';

export default function SuggestUnitForm() {
  const [email, setEmail] = useState('');
  const [unit, setUnit] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const recipient = 'example@example.com';
    const subject = encodeURIComponent('Unit Suggestion');
    const body = encodeURIComponent(
      `Suggested Unit: ${unit}\n` +
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
        <label htmlFor="unit">Unit:</label><br />
        <input
          id="unit"
          type="text"
          required
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="description">Unit Description:</label><br />
        <textarea
          id="description"
          rows={6}
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button type="submit">Suggest Unit</button>
    </form>
  );
}
