'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, 
  faServer, 
  faMobileAlt, 
  faLaptopCode
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp as faWhatsappBrand } from '@fortawesome/free-brands-svg-icons';
import { GroupsData } from '@/types';

// Mapeamento de ícones para strings
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: { [key: string]: any } = {
  faCode,
  faServer,
  faMobileAlt,
  faLaptopCode
};

export default function Groups() {
  const [activeCategory, setActiveCategory] = useState('');
  const [groupsData, setGroupsData] = useState<GroupsData>({ categories: [] });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchGroupsData = async () => {
      try {
        const response = await fetch('/groups.json');
        const data = await response.json();
        setGroupsData(data);
        // Define a primeira categoria como ativa por padrão
        if (data.categories && data.categories.length > 0) {
          setActiveCategory(data.categories[0].key);
        }
      } catch (error) {
        console.error('Erro ao carregar dados dos grupos:', error);
      }
    };

    fetchGroupsData();
  }, []);

  // Fechar dropdown quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isDropdownOpen && !target.closest('.dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <section className="py-8 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Lista de Grupos e Canais</h2>
          <p className="text-lg md:text-xl text-gray-600">Escolha a categoria que mais se adequa ao seu perfil</p>
        </div>

        <div className="flex justify-center mb-6 md:mb-8">
          <div className="relative dropdown-container w-full max-w-xs md:max-w-none">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 md:px-6 py-3 pr-10 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm cursor-pointer w-full md:min-w-[200px] flex items-center justify-between"
            >
              <div className="flex items-center space-x-2">
                {activeCategory && (
                  <>
                    <FontAwesomeIcon icon={iconMap[groupsData.categories.find(cat => cat.key === activeCategory)?.icon || 'faCode']} />
                    <span>{groupsData.categories.find(cat => cat.key === activeCategory)?.label || 'Selecione uma categoria'}</span>
                  </>
                )}
                {!activeCategory && (
                  <span>Selecione uma categoria</span>
                )}
              </div>
              <svg 
                className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                {groupsData.categories.map((category) => (
                  <button
                    key={category.key}
                    onClick={() => {
                      setActiveCategory(category.key);
                      setIsDropdownOpen(false);
                    }}
                    className="w-full px-4 md:px-6 py-3 text-left hover:bg-gray-50 flex items-center space-x-2 transition-colors duration-200"
                  >
                    <FontAwesomeIcon icon={iconMap[category.icon]} className="text-gray-600" />
                    <span className="text-gray-700 font-medium text-sm md:text-base">{category.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {groupsData.categories
            .find(category => category.key === activeCategory)
            ?.groups.map((group, index) => {
              const activeCategoryData = groupsData.categories.find(cat => cat.key === activeCategory);
              const isLastItem = index === (activeCategoryData?.groups.length || 0) - 1;
              
              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row md:items-center md:justify-between p-4 hover:bg-gray-50 transition-colors duration-200 ${
                    !isLastItem ? 'border-b border-gray-100' : ''
                  }`}
                >
                  <div className="flex items-start md:items-center space-x-3 md:space-x-4 mb-3 md:mb-0">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={faWhatsappBrand} className="text-lg text-green-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-gray-900 text-sm md:text-base truncate">{group.name}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 mt-1 space-y-1 sm:space-y-0">
                        {/* <span className="text-xs md:text-sm text-gray-500">{group.members} membros</span> */}
                        {/* <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full w-fit">
                          {group.category}
                        </span> */}
                      </div>
                    </div>
                  </div>
                  <a 
                    href={group.whatsapp_link.includes('wa.me') 
                      ? group.whatsapp_link.replace('{group_name}', group.name)
                      : group.whatsapp_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg cursor-pointer bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-sm font-medium transition-colors duration-200 flex items-center justify-center space-x-2 w-full md:w-auto"
                  >
                    <FontAwesomeIcon icon={faWhatsappBrand} />
                    <span className="hidden sm:inline">
                      {group.whatsapp_link.includes('wa.me') ? 'Solicitar link' : 'Entrar no grupo'}
                    </span>
                    <span className="sm:hidden">
                      {group.whatsapp_link.includes('wa.me') ? 'Solicitar link' : 'Entrar'}
                    </span>
                  </a>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
