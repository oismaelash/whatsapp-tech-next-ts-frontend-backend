'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp as faWhatsappBrand, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="py-12 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex justify-center items-center space-x-2 mb-4">
          <FontAwesomeIcon icon={faWhatsappBrand} className="text-2xl text-green-500" />
          <span className="text-xl font-bold">{process.env.NEXT_PUBLIC_PROJECT_NAME}</span>
        </div>
        <p className="text-gray-400 mb-6">Projeto independente para ajudar a comunidade de tecnologia. Atualizado periodicamente.</p>
        <div className="flex justify-center space-x-6">
          <a href={process.env.NEXT_PUBLIC_REPOSITORY_URL} className="cursor-pointer text-gray-400 hover:text-white transition-colors duration-200">
            <FontAwesomeIcon icon={faGithub} className="text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}
