import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, FileText, QrCode, MessageSquare, ShieldCheck, CheckCircle2, Calendar, Clock, DollarSign } from 'lucide-react';
import { APP_FEATURES } from '../data/initialData';

export const FeatureCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const getPreviewMock = (id: string) => {
    switch (id) {
      case 'feat-1':
        return (
          <div className="bg-[#f8f9fa] border border-[#dadce0] rounded-xl p-4 h-full flex flex-col justify-between">
            <div className="flex items-center justify-between pb-3 border-b border-[#e8eaed]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#202124]">Apto 402 - Jardins</div>
                  <div className="text-[10px] text-[#5f6368]">Vencimento dia 10</div>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-100 text-emerald-800">
                Em dia
              </span>
            </div>
            
            <div className="my-3 space-y-2">
              <div className="p-2.5 rounded-lg bg-white border border-[#e8eaed]">
                <div className="text-[10px] text-[#5f6368]">Valor do Aluguel + Condomínio</div>
                <div className="text-sm font-bold text-[#202124]">R$ 2.450,00</div>
              </div>
              <div className="flex items-center justify-between text-[11px] text-[#5f6368] px-1">
                <span>Contrato: 30 meses</span>
                <span>Reajuste: IPCA</span>
              </div>
            </div>

            <div className="pt-2 border-t border-[#e8eaed] flex items-center gap-1.5 text-[10px] text-[#01875f] font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Contrato assinado digitalmente</span>
            </div>
          </div>
        );

      case 'feat-2':
        return (
          <div className="bg-[#f8f9fa] border border-[#dadce0] rounded-xl p-4 h-full flex flex-col justify-between">
            <div className="flex items-center justify-between pb-3 border-b border-[#e8eaed]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
                  <QrCode className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#202124]">Segunda Via & Pix</div>
                  <div className="text-[10px] text-[#5f6368]">Compensação instantânea</div>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-blue-100 text-blue-800">
                Pix 24h
              </span>
            </div>

            <div className="my-3 bg-white p-3 rounded-lg border border-[#e8eaed] flex items-center justify-between">
              <div className="space-y-1">
                <div className="text-[10px] text-[#5f6368]">Código de Barras Boleto</div>
                <div className="text-xs font-mono text-[#202124] tracking-wider">34191.79001 01043...</div>
              </div>
              <button 
                onClick={(e) => { e.preventDefault(); }}
                className="px-2.5 py-1 text-[11px] font-medium text-[#01875f] border border-[#01875f] rounded hover:bg-[#e6f4ea] transition-colors"
              >
                Copiar
              </button>
            </div>

            <div className="pt-2 border-t border-[#e8eaed] flex items-center gap-1.5 text-[10px] text-[#5f6368]">
              <Clock className="w-3.5 h-3.5 text-blue-600" />
              <span>Recibo emitido automaticamente após pagamento</span>
            </div>
          </div>
        );

      case 'feat-3':
        return (
          <div className="bg-[#f8f9fa] border border-[#dadce0] rounded-xl p-4 h-full flex flex-col justify-between">
            <div className="flex items-center justify-between pb-3 border-b border-[#e8eaed]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#202124]">Chamado #084</div>
                  <div className="text-[10px] text-[#5f6368]">Manutenção hidráulica</div>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-100 text-amber-800">
                Aprovado
              </span>
            </div>

            <div className="my-3 p-2.5 bg-white rounded-lg border border-[#e8eaed] text-[11px] text-[#3c4043] leading-relaxed">
              &ldquo;Troca da válvula da pia autorizada pelo proprietário. Técnico agendado para amanhã às 14h.&rdquo;
            </div>

            <div className="pt-2 border-t border-[#e8eaed] flex items-center justify-between text-[10px] text-[#5f6368]">
              <span>Protocolo formal</span>
              <span className="text-[#01875f] font-medium">Histórico salvo</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-[#f8f9fa] border border-[#dadce0] rounded-xl p-4 h-full flex flex-col justify-between">
            <div className="flex items-center justify-between pb-3 border-b border-[#e8eaed]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#202124]">Vistoria de Entrada</div>
                  <div className="text-[10px] text-[#5f6368]">48 itens verificados</div>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-purple-100 text-purple-800">
                Concluída
              </span>
            </div>

            <div className="my-3 space-y-1.5">
              <div className="flex items-center justify-between text-[11px] bg-white p-2 rounded border border-[#e8eaed]">
                <span>Pintura e Paredes</span>
                <span className="text-emerald-600 font-medium">100% OK</span>
              </div>
              <div className="flex items-center justify-between text-[11px] bg-white p-2 rounded border border-[#e8eaed]">
                <span>Instalações Elétricas</span>
                <span className="text-emerald-600 font-medium">100% OK</span>
              </div>
            </div>

            <div className="pt-2 border-t border-[#e8eaed] flex items-center gap-1.5 text-[10px] text-[#5f6368]">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />
              <span>Validade jurídica com termo de entrega</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="my-6 relative group">
      {/* Carousel navigation buttons */}
      <button
        onClick={() => scroll('left')}
        aria-label="Anterior"
        className="absolute -left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-[#dadce0] shadow-md flex items-center justify-center text-[#5f6368] hover:text-[#202124] hover:bg-[#f8f9fa] opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hidden sm:flex"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={() => scroll('right')}
        aria-label="Próximo"
        className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-[#dadce0] shadow-md flex items-center justify-center text-[#5f6368] hover:text-[#202124] hover:bg-[#f8f9fa] opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hidden sm:flex"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Cards container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto no-scrollbar py-2 scroll-smooth"
      >
        {APP_FEATURES.map((feat) => (
          <div
            key={feat.id}
            className="shrink-0 w-[275px] sm:w-[310px] h-[220px] rounded-2xl bg-white shadow-xs hover:shadow-md transition-shadow border border-[#dadce0]/80 overflow-hidden flex flex-col"
          >
            {/* Mockup preview (PURE CSS & VECTORS, ZERO RASTER IMAGES) */}
            <div className="h-full p-2.5">
              {getPreviewMock(feat.id)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
