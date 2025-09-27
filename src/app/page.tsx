'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSyncAlt, 
  faLayerGroup, 
  faGift, 
  faRocket, 
  faCode, 
  faServer, 
  faMobileAlt, 
  faLaptopCode, 
  faBell, 
  faHeadset, 
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import { 
  faWhatsapp as faWhatsappBrand,
  faTwitter,
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import { GroupsData, Category, EmailForm, ContactForm } from '@/types';

const groupsData: GroupsData = {
  frontend: [
    { name: "Vagas Frontend Brasil", members: "15.2k", category: "Frontend" },
    { name: "React Jobs BR", members: "8.5k", category: "Frontend" },
    { name: "Vue.js Vagas", members: "6.3k", category: "Frontend" },
    { name: "Angular Opportunities", members: "4.7k", category: "Frontend" }
  ],
  backend: [
    { name: "Vagas Backend Brasil", members: "12.8k", category: "Backend" },
    { name: "Node.js Jobs", members: "9.1k", category: "Backend" },
    { name: "Python Vagas BR", members: "11.4k", category: "Backend" },
    { name: "Java Opportunities", members: "7.9k", category: "Backend" }
  ],
  mobile: [
    { name: "Vagas Mobile Brasil", members: "10.3k", category: "Mobile" },
    { name: "React Native Jobs", members: "6.8k", category: "Mobile" },
    { name: "Flutter Vagas", members: "5.2k", category: "Mobile" },
    { name: "iOS/Android Jobs", members: "8.7k", category: "Mobile" }
  ],
  geral: [
    { name: "Vagas Tech Brasil", members: "25.6k", category: "Geral" },
    { name: "Oportunidades TI", members: "18.9k", category: "Geral" },
    { name: "Tech Jobs Community", members: "14.2k", category: "Geral" },
    { name: "Startups Vagas", members: "12.1k", category: "Geral" }
  ]
};

const categories: Category[] = [
  { key: "frontend", label: "Frontend", icon: faCode },
  { key: "backend", label: "Backend", icon: faServer },
  { key: "mobile", label: "Mobile", icon: faMobileAlt },
  { key: "geral", label: "Geral", icon: faLaptopCode }
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [emailForm, setEmailForm] = useState<EmailForm>({ name: '', email: '' });
  const [contactForm, setContactForm] = useState<ContactForm>({
    contact_type: 'broken_link',
    group_name: '',
    whatsapp_link: '',
    email: '',
    message: ''
  });

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email form submitted:', emailForm);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailForm({
      ...emailForm,
      [e.target.name]: e.target.value
    });
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Open Source Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
          <div className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faGithub} className="text-xl" />
            <span className="font-semibold text-sm md:text-base">🌟 Este projeto é Open Source!</span>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <span className="text-sm opacity-90 text-center md:text-left">Contribua e ajude a comunidade</span>
            <a 
              href="https://github.com/oismaelash/whatsapp-jobs-next-ts-frontend-backend" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-purple-600 hover:bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 shadow-md hover:shadow-lg"
            >
              <FontAwesomeIcon icon={faGithub} className="text-sm" />
              <span>Ver no GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-gradient-to-br from-blue-50 to-green-50 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://readdy.ai/api/search-image?query=modern%20technology%20workspace%20with%20smartphones%20laptops%20and%20digital%20communication%20icons%20floating%20in%20a%20clean%20minimalist%20environment%20with%20soft%20blue%20and%20green%20lighting%20professional%20atmosphere&width=1440&height=600&seq=header-bg-001&orientation=landscape')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <nav className="relative z-10 px-6 py-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faWhatsappBrand} className="text-2xl text-green-600" />
              <span className="text-xl font-bold text-gray-800">TechVagas</span>
            </div>
          </div>
        </nav>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Encontre vagas de tecnologia em grupos de WhatsApp 🚀
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Uma lista organizada de canais e grupos para você entrar agora mesmo e aumentar suas chances de conseguir a próxima oportunidade.
              </p>
              <button className="rounded-lg whitespace-nowrap cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold transition-colors duration-200 inline-flex items-center space-x-2">
                <FontAwesomeIcon icon={faWhatsappBrand} className="text-xl" />
                <span>Acessar lista de grupos</span>
              </button>
            </div>
            <div className="hidden lg:block">
              <Image 
                src="https://readdy.ai/api/search-image?query=professional%20person%20using%20smartphone%20with%20WhatsApp%20interface%20showing%20job%20opportunities%20and%20tech%20career%20growth%20symbols%20floating%20around%20in%20a%20modern%20clean%20background%20with%20blue%20and%20green%20accents&width=600&height=500&seq=hero-img-001&orientation=portrait" 
                alt="Pessoa usando WhatsApp para encontrar vagas" 
                width={600}
                height={500}
                className="w-full h-auto object-cover object-top rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faSyncAlt} className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">✅ Atualizado constantemente</h3>
              <p className="text-gray-600">Lista sempre atualizada com os principais grupos de vagas do mercado</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-2xl">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faLayerGroup} className="text-2xl text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">✅ Organizado por categorias</h3>
              <p className="text-gray-600">Separados por frontend, backend, mobile e vagas gerais de tecnologia</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-2xl">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faGift} className="text-2xl text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">✅ Acesso gratuito e imediato</h3>
              <p className="text-gray-600">Entre nos grupos agora mesmo, sem custos ou burocracias</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <FontAwesomeIcon icon={faRocket} className="text-4xl" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Pare de perder tempo procurando vagas</h2>
          <p className="text-xl opacity-90">Entre nos grupos certos e esteja mais perto da sua próxima contratação.</p>
        </div>
      </section>

      {/* Groups Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Lista de Grupos e Canais</h2>
            <p className="text-xl text-gray-600">Escolha a categoria que mais se adequa ao seu perfil</p>
          </div>

          <div className="flex flex-wrap justify-center mb-8 bg-white rounded-2xl p-2 shadow-sm">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`rounded-lg whitespace-nowrap cursor-pointer px-6 py-3 font-medium transition-all duration-200 flex items-center space-x-2 ${
                  activeCategory === category.key
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <FontAwesomeIcon icon={category.icon} />
                <span>{category.label}</span>
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {groupsData[activeCategory].map((group, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200 ${
                  index !== groupsData[activeCategory].length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <FontAwesomeIcon icon={faWhatsappBrand} className="text-lg text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{group.name}</h3>
                    <div className="flex items-center space-x-3 mt-1">
                      <span className="text-sm text-gray-500">{group.members} membros</span>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">
                        {group.category}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="rounded-lg whitespace-nowrap cursor-pointer bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-sm font-medium transition-colors duration-200 flex items-center space-x-2">
                  <FontAwesomeIcon icon={faWhatsappBrand} />
                  <span>Entrar no grupo</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
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

      {/* Open Source Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faGithub} className="text-2xl text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Projeto Open Source</h2>
            <p className="text-xl text-gray-600 mb-6">
              Este projeto é desenvolvido de forma colaborativa e transparente. 
              Qualquer pessoa pode contribuir, sugerir melhorias ou reportar problemas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faCode} className="text-lg text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Código Aberto</h3>
              <p className="text-gray-600 text-sm">
                Todo o código está disponível no GitHub para consulta e contribuição
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faRocket} className="text-lg text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Contribuições</h3>
              <p className="text-gray-600 text-sm">
                Aceitamos pull requests, issues e sugestões da comunidade
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faGift} className="text-lg text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Gratuito</h3>
              <p className="text-gray-600 text-sm">
                Sempre gratuito e mantido pela comunidade para a comunidade
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="https://github.com/oismaelash/whatsapp-jobs-next-ts-frontend-backend" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
            >
              <FontAwesomeIcon icon={faGithub} className="text-lg" />
              <span>Ver no GitHub</span>
            </a>
            <a 
              href="https://github.com/oismaelash/whatsapp-jobs-next-ts-frontend-backend/issues" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-purple-600 hover:bg-gray-50 border border-purple-200 px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
            >
              <FontAwesomeIcon icon={faHeadset} className="text-lg" />
              <span>Reportar Problema</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <FontAwesomeIcon icon={faWhatsappBrand} className="text-2xl text-green-500" />
            <span className="text-xl font-bold">TechVagas</span>
          </div>
          <p className="text-gray-400 mb-6">Projeto independente para ajudar a comunidade de tecnologia. Atualizado periodicamente.</p>
          <div className="flex justify-center space-x-6">
            {/* <a href="#" className="cursor-pointer text-gray-400 hover:text-white transition-colors duration-200">
              <FontAwesomeIcon icon={faTwitter} className="text-xl" />
            </a>
            <a href="#" className="cursor-pointer text-gray-400 hover:text-white transition-colors duration-200">
              <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
            </a> */}
            <a href="#" className="cursor-pointer text-gray-400 hover:text-white transition-colors duration-200">
              <FontAwesomeIcon icon={faGithub} className="text-xl" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
