'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function OpenSourceBanner() {
  return (
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
  );
}
