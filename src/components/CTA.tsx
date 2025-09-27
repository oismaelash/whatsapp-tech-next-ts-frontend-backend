'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

export default function CTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-6">
          <FontAwesomeIcon icon={faRocket} className="text-4xl" />
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Pare de perder tempo procurando vagas</h2>
        <p className="text-xl opacity-90">Entre nos grupos certos e esteja mais perto da sua próxima contratação.</p>
      </div>
    </section>
  );
}
