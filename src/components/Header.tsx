'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp as faWhatsappBrand } from '@fortawesome/free-brands-svg-icons';
import { analytics } from '@/lib/analytics';

export default function Header() {
  const scrollToGroups = () => {
    const groupsSection = document.getElementById('groups');
    if (groupsSection) {
      analytics.trackCTAClick('Acessar lista de grupos', 'header');
      analytics.trackScrollToGroups();
      groupsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="bg-gradient-to-br from-blue-50 to-green-50 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          // backgroundImage: "url('https://readdy.ai/api/search-image?query=modern%20technology%20workspace%20with%20smartphones%20laptops%20and%20digital%20communication%20icons%20floating%20in%20a%20clean%20minimalist%20environment%20with%20soft%20blue%20and%20green%20lighting%20professional%20atmosphere&width=1440&height=600&seq=header-bg-001&orientation=landscape')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Encontre vagas de tecnologia em grupos de WhatsApp 🚀
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Uma lista organizada de canais e grupos para você entrar agora mesmo e aumentar suas chances de conseguir a próxima oportunidade.
            </p>
            <button 
              onClick={scrollToGroups}
              className="rounded-lg whitespace-nowrap cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold transition-colors duration-200 inline-flex items-center space-x-2"
            >
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
  );
}
