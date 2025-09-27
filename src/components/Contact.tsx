'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { ContactForm } from '@/types';

export default function Contact() {
  const [contactForm, setContactForm] = useState<ContactForm>({
    contact_type: 'broken_link',
    group_name: '',
    whatsapp_link: '',
    email: '',
    message: ''
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FontAwesomeIcon icon={faHeadset} className="text-2xl text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Precisa de ajuda?</h2>
          <p className="text-xl text-gray-600">Encontrou algum link quebrado ou quer sugerir um novo grupo? Nos avise!</p>
        </div>
        <form onSubmit={handleContactSubmit} className="bg-white rounded-2xl shadow-sm p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de contato</label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="contact_type"
                    value="broken_link"
                    checked={contactForm.contact_type === 'broken_link'}
                    onChange={handleContactChange}
                    className="text-blue-600"
                  />
                  <span className="ml-2 text-gray-700">Link quebrado</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="contact_type"
                    value="suggestion"
                    checked={contactForm.contact_type === 'suggestion'}
                    onChange={handleContactChange}
                    className="text-blue-600"
                  />
                  <span className="ml-2 text-gray-700">Sugerir grupo</span>
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nome do grupo</label>
              <input
                type="text"
                name="group_name"
                value={contactForm.group_name}
                onChange={handleContactChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Digite o nome do grupo"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Link do WhatsApp</label>
              <input
                type="url"
                name="whatsapp_link"
                value={contactForm.whatsapp_link}
                onChange={handleContactChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://chat.whatsapp.com/..."
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Seu e-mail</label>
              <input
                type="email"
                name="email"
                value={contactForm.email}
                onChange={handleContactChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Para retornarmos o contato"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem adicional</label>
              <textarea
                name="message"
                rows={4}
                value={contactForm.message}
                onChange={handleContactChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Descreva mais detalhes se necessário"
                maxLength={500}
              />
            </div>
            <button
              type="submit"
              className="rounded-lg whitespace-nowrap cursor-pointer w-full bg-blue-600 hover:bg-blue-700 text-white py-3 font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <FontAwesomeIcon icon={faPaperPlane} />
              <span>Enviar mensagem</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
