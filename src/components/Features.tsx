'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSyncAlt, 
  faLayerGroup, 
  faGift
} from '@fortawesome/free-solid-svg-icons';

export default function Features() {
  return (
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
  );
}
