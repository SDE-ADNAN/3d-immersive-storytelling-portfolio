"use client";

import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const to = 'adnan@example.com';
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'website'}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-16">
      <div className="max-w-2xl w-full px-6">
        <div className="glass p-6">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-2 text-sm text-neutral-300">Interested in working together? Send a short note.</p>

          <form onSubmit={handleSubmit} className="mt-6 grid gap-4" aria-label="Contact form">
            <label className="sr-only" htmlFor="name">Name</label>
            <input id="name" className="p-3 rounded bg-transparent border border-white/10" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />

            <label className="sr-only" htmlFor="email">Email</label>
            <input id="email" type="email" className="p-3 rounded bg-transparent border border-white/10" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label className="sr-only" htmlFor="message">Message</label>
            <textarea id="message" rows={4} className="p-3 rounded bg-transparent border border-white/10" placeholder="A brief message" value={message} onChange={(e) => setMessage(e.target.value)} />

            <div className="flex items-center gap-4">
              <button type="submit" className="glass px-4 py-2">Send</button>
              <a className="text-sm text-neutral-300" href="mailto:adnan@example.com">Or email directly</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

