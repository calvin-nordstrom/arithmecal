'use client';

import { useState } from 'react';

export default function FeedbackForm() {
  const [email, setEmail] = useState('');
  const [page, setPage] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const recipient = 'example@example.com';
    const subject = encodeURIComponent('Website Feedback');
    const body = encodeURIComponent(
      `Calculator/Page: ${page}\n` +
      `User Email: ${email || 'Not provided'}\n\n` +
      `Feedback:\n${feedback}`
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
        <label htmlFor="page">Calculator/Page:</label><br />
        <input
          id="page"
          type="text"
          required
          value={page}
          onChange={(e) => setPage(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="feedback">Feedback:</label><br />
        <textarea
          id="feedback"
          rows={6}
          required
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
      </div>

      <button type="submit">Send Feedback</button>
    </form>
  );
}
