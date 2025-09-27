'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, 
  faRocket, 
  faGift,
  faHeadset
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function OpenSource() {
  return (
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
            href={process.env.NEXT_PUBLIC_REPOSITORY_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
          >
            <FontAwesomeIcon icon={faGithub} className="text-lg" />
            <span>Ver no GitHub</span>
          </a>
          <a 
            href={`${process.env.NEXT_PUBLIC_REPOSITORY_URL}/issues`} 
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
  );
}
