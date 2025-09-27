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

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Lista de Grupos e Canais</h2>
          <p className="text-xl text-gray-600">Escolha a categoria que mais se adequa ao seu perfil</p>
        </div>

        <div className="flex flex-wrap justify-center mb-8 bg-white rounded-2xl p-2 shadow-sm">
          {groupsData.categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`rounded-lg whitespace-nowrap cursor-pointer px-6 py-3 font-medium transition-all duration-200 flex items-center space-x-2 ${
                activeCategory === category.key
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <FontAwesomeIcon icon={iconMap[category.icon]} />
              <span>{category.label}</span>
            </button>
          ))}
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
                  className={`flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200 ${
                    !isLastItem ? 'border-b border-gray-100' : ''
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
                  <a 
                    href={group.whatsapp_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg whitespace-nowrap cursor-pointer bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-sm font-medium transition-colors duration-200 flex items-center space-x-2"
                  >
                    <FontAwesomeIcon icon={faWhatsappBrand} />
                    <span>Entrar no grupo</span>
                  </a>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
