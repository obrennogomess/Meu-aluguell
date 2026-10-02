import React, { useState } from 'react';
import { ArrowRight, Share2, ShieldCheck, Trash2, X, Lock } from 'lucide-react';

export const DataSafetySection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="py-6 border-b border-[#dadce0]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg sm:text-xl font-medium text-[#202124] google-sans">
          Mais detalhes
        </h2>
        <button
          onClick={() => setShowModal(true)}
          aria-label="Ver mais detalhes de segurança"
          className="p-2 text-[#01875f] hover:bg-[#e6f4ea] rounded-full transition-colors"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Description */}
      <p className="mt-3 text-sm text-[#5f6368] leading-relaxed">
        Nosso sistema é feito com todos os tipos de segurança e desenvolvimento web para que nossos clientes tenham o melhor de nós com a máxima segurança.
      </p>

      {/* Security Items List (NO RASTER IMAGES - Pure SVG Icons) */}
      <div className="mt-4 p-4 border border-[#dadce0] rounded-xl space-y-4 bg-white">
        {/* Item 1 */}
        <div className="flex items-start gap-3.5">
          <div className="w-6 h-6 shrink-0 mt-0.5 text-[#5f6368] flex items-center justify-center">
            <Share2 className="w-5 h-5" />
          </div>
          <div className="text-sm text-[#3c4043] leading-snug">
            Este app pode compartilhar estes tipos de dados com terceiros
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex items-start gap-3.5">
          <div className="w-6 h-6 shrink-0 mt-0.5 text-[#5f6368] flex items-center justify-center">
            <ShieldCheck className="w-5 h-5 text-[#01875f]" />
          </div>
          <div className="text-sm text-[#3c4043] leading-snug">
            Nenhum dado foi coletado sem autorização prévia
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex items-start gap-3.5">
          <div className="w-6 h-6 shrink-0 mt-0.5 text-[#5f6368] flex items-center justify-center">
            <Trash2 className="w-5 h-5" />
          </div>
          <div className="text-sm text-[#3c4043] leading-snug">
            Você pode solicitar a exclusão dos dados
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <button
            onClick={() => setShowModal(true)}
            className="text-sm font-medium text-[#01875f] hover:underline cursor-pointer"
          >
            Ver detalhes
          </button>
        </div>
      </div>

      {/* Modal for Details */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-[#dadce0]">
              <div className="flex items-center gap-2 text-[#202124]">
                <Lock className="w-5 h-5 text-[#01875f]" />
                <h3 className="text-lg font-medium google-sans">Segurança dos dados</h3>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="p-1.5 text-[#5f6368] hover:text-[#202124] hover:bg-[#f1f3f4] rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 space-y-4 text-sm text-[#5f6368] leading-relaxed">
              <p>
                A segurança começa com a compreensão da forma como os desenvolvedores coletam e compartilham seus dados. As práticas de privacidade e segurança dos dados podem variar de acordo com o uso, a região e a sua idade.
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="p-3 bg-[#f8f9fa] rounded-xl border border-[#dadce0]">
                  <h4 className="font-medium text-[#202124] text-sm">Criptografia em trânsito</h4>
                  <p className="text-xs text-[#5f6368] mt-1">
                    Seus dados de pagamento, contratos e documentos são transmitidos usando uma conexão segura HTTPS/TLS de 256 bits.
                  </p>
                </div>

                <div className="p-3 bg-[#f8f9fa] rounded-xl border border-[#dadce0]">
                  <h4 className="font-medium text-[#202124] text-sm">Exclusão simplificada</h4>
                  <p className="text-xs text-[#5f6368] mt-1">
                    O desenvolvedor oferece uma forma transparente e rápida de solicitar a exclusão de todos os seus dados cadastrais.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-5 py-2 bg-[#01875f] text-white text-sm font-medium rounded-lg hover:bg-[#0b6348] transition-colors"
              >
                Entendi
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
