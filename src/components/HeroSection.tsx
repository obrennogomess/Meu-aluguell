import React from 'react';
import { Star, Share2, Bookmark, Check, Info, Download } from 'lucide-react';

interface HeroSectionProps {
  onInstall: () => void;
  onShare: () => void;
  isWishlisted: boolean;
  onToggleWishlist: () => void;
  installStatus: 'idle' | 'installing' | 'installed';
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onInstall,
  onShare,
  isWishlisted,
  onToggleWishlist,
  installStatus
}) => {
  return (
    <section className="pt-6 pb-2">
      {/* App Header layout: Info on Left, Big Official Logo on Right (Google Play layout) */}
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-6 md:gap-10">
        {/* Left Column: Titles, Stats and Actions */}
        <div className="flex-1 w-full flex flex-col items-center md:items-start text-center md:text-left">
          {/* Mobile-only logo display */}
          <div className="md:hidden mb-4">
            <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg border border-[#dadce0]/60">
              <img 
                src="/logo.svg" 
                alt="Meu Aluguel Logo" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-[#202124] google-sans leading-tight">
            Meu Aluguel
          </h1>

          <div className="mt-1.5">
            <a
              href="#reviews"
              className="text-sm font-medium text-[#01875f] hover:underline inline-flex items-center gap-1"
            >
              <span>Este app está disponível para alguns dos seus dispositivos</span>
            </a>
          </div>

          {/* Stats Bar (5,0 Star, 100 mi+ Downloads, 18+ Rating) */}
          <div className="mt-6 flex items-center justify-center md:justify-start gap-4 sm:gap-7 divide-x divide-[#dadce0]">
            {/* Rating */}
            <div className="pr-3 sm:pr-6">
              <div className="flex items-center justify-center md:justify-start gap-1 text-[#202124] font-medium text-sm sm:text-base">
                <span className="font-semibold text-[#202124]">5,0</span>
                <Star className="w-3.5 h-3.5 fill-[#202124] text-[#202124]" />
              </div>
              <div className="text-[11px] sm:text-xs text-[#5f6368] mt-0.5 whitespace-nowrap">
                404 mil avaliações
              </div>
            </div>

            {/* Downloads */}
            <div className="px-3 sm:px-6">
              <div className="text-[#202124] font-medium text-sm sm:text-base">
                100 mi+
              </div>
              <div className="text-[11px] sm:text-xs text-[#5f6368] mt-0.5 whitespace-nowrap">
                Downloads
              </div>
            </div>

            {/* Age Rating 18+ */}
            <div className="pl-3 sm:pl-6">
              <div className="flex items-center justify-center md:justify-start">
                <div className="px-1.5 py-0.5 rounded border border-[#202124] bg-white text-[#202124] text-[11px] font-bold tracking-tighter leading-none inline-block">
                  18
                </div>
              </div>
              <div className="flex items-center gap-1 text-[11px] sm:text-xs text-[#5f6368] mt-1 whitespace-nowrap">
                <span>Classificado para 18+</span>
                <Info className="w-3 h-3 text-[#5f6368] inline" />
              </div>
            </div>
          </div>

          {/* Action Buttons Row */}
          <div className="mt-7 flex flex-wrap items-center justify-center md:justify-start gap-3 w-full">
            {/* Big Green Install Button */}
            <button
              onClick={onInstall}
              disabled={installStatus === 'installing'}
              className={`min-w-[160px] px-8 py-2.5 rounded-lg text-sm font-medium transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer ${
                installStatus === 'installed'
                  ? 'bg-[#e6f4ea] text-[#01875f] border border-[#01875f]'
                  : 'bg-[#01875f] hover:bg-[#0b6348] text-white active:scale-[0.98]'
              }`}
            >
              {installStatus === 'installing' ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Instalando...</span>
                </>
              ) : installStatus === 'installed' ? (
                <>
                  <Check className="w-4 h-4 text-[#01875f]" />
                  <span>Instalado</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 text-white" />
                  <span>Instalar</span>
                </>
              )}
            </button>

            {/* Share Button */}
            <button
              onClick={onShare}
              className="px-4 py-2.5 rounded-lg border border-[#dadce0] hover:bg-[#f8f9fa] text-[#01875f] text-sm font-medium transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span>Compartilhar</span>
            </button>

            {/* Wishlist Button */}
            <button
              onClick={onToggleWishlist}
              className={`px-4 py-2.5 rounded-lg border text-sm font-medium transition-colors flex items-center gap-2 cursor-pointer ${
                isWishlisted
                  ? 'border-[#01875f] bg-[#e6f4ea] text-[#01875f]'
                  : 'border-[#dadce0] hover:bg-[#f8f9fa] text-[#01875f]'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isWishlisted ? 'fill-[#01875f]' : ''}`} />
              <span>{isWishlisted ? 'Na lista de desejos' : 'Adicionar à lista de desejos'}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Desktop Official Logo (EXACT LOGO PROVIDED BY USER) */}
        <div className="hidden md:flex shrink-0">
          <div className="w-44 h-44 lg:w-56 lg:h-56 rounded-3xl overflow-hidden shadow-xl border border-[#dadce0]/70 bg-[#071330] p-1 group transition-transform hover:scale-[1.02]">
            <img 
              src="/logo.svg" 
              alt="Meu Aluguel Logo Oficial" 
              className="w-full h-full object-cover rounded-[20px]" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};
