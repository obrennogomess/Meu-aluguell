import React, { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const tags = [
    'Estilizado',
    'Casual',
    'ativação e qualificação',
    'Off-line'
  ];

  return (
    <section className="py-6 border-b border-[#dadce0]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg sm:text-xl font-medium text-[#202124] google-sans">
          Sobre Nosso Trabalho
        </h2>
        <button
          onClick={() => setExpanded(!expanded)}
          aria-label="Expandir sobre o app"
          className="p-2 text-[#01875f] hover:bg-[#e6f4ea] rounded-full transition-colors"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Main Text Content */}
      <div className="mt-3 text-sm text-[#5f6368] leading-relaxed">
        <p>
          Este app está disponível para alguns dos seus dispositivos. Nosso sistema é feito com todos os tipos de segurança e desenvolvimento web para que nossos clientes tenham o melhor de nós com a máxima segurança.
        </p>
        
        {expanded && (
          <div className="mt-3 space-y-2 text-[#5f6368] animate-in fade-in duration-200">
            <p>
              O <strong>Meu Aluguel</strong> é a solução definitiva para proprietários, inquilinos e administradores de imóveis. Desenvolvido para eliminar a burocracia das locações residenciais e comerciais, proporcionando total clareza em pagamentos, emissão de boletos bancários com código de barras, transferências Pix com baixa automatizada e geração de recibos digitais com autenticidade comprovada.
            </p>
            <p>
              Conte ainda com sistema de chamados para reparos com anexos de vistorias fotográficas e suporte especializado para dúvidas sobre contratos e reajustes periódicos.
            </p>
          </div>
        )}
      </div>

      {/* Update Date */}
      <div className="mt-4">
        <div className="text-xs font-medium text-[#202124]">Atualizado em</div>
        <div className="text-xs text-[#5f6368] mt-0.5">13 de julho de 2026</div>
      </div>

      {/* Tags Chips */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-3.5 py-1.5 rounded-full border border-[#dadce0] text-xs font-medium text-[#5f6368] hover:bg-[#f8f9fa] hover:text-[#202124] transition-colors cursor-default"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
};
