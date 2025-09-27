'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { EmailForm } from '@/types';
import { analytics } from '@/lib/analytics';

export default function Newsletter() {
  const [emailForm, setEmailForm] = useState<EmailForm>({ name: '', email: '' });

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    analytics.trackNewsletterSubmission(emailForm.email);
    console.log('Email form submitted:', emailForm);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailForm({
      ...emailForm,
      [e.target.name]: e.target.value
    });
    
    // Track when user starts filling the form
    if (e.target.name === 'email' && e.target.value.length === 1) {
      analytics.trackNewsletterFormStart();
    }
  };

  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <FontAwesomeIcon icon={faBell} className="text-4xl mb-4" />
          <h2 className="text-3xl font-bold mb-4">Quer receber novos grupos e vagas direto no seu e-mail?</h2>
          <p className="text-xl opacity-90">Cadastre-se abaixo e seja o primeiro a saber sobre novas oportunidades</p>
        </div>
        <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto bg-white bg-opacity-10 rounded-2xl p-8 shadow-md">
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              value={emailForm.name}
              onChange={handleEmailChange}
              className="w-full px-4 py-3 rounded-xl border border-black text-gray-900 text-sm bg-white bg-opacity-80"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Seu melhor e-mail"
              value={emailForm.email}
              onChange={handleEmailChange}
              className="w-full px-4 py-3 rounded-xl border border-black text-gray-900 text-sm bg-white bg-opacity-80"
              required
            />
            <button
              type="submit"
              className="rounded-lg whitespace-nowrap cursor-pointer w-full bg-green-600 hover:bg-green-700 text-white py-3 font-semibold transition-colors duration-200"
            >
              Quero receber novidades
            </button>
          </div>
          <p className="text-sm opacity-75 mt-4 text-black">Não enviamos spam. Você pode cancelar a qualquer momento.</p>
        </form>
      </div>
    </section>
  );
}
