import React from 'react';
import { Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f8f9fa] border-t border-[#dadce0] mt-12 text-[#5f6368] text-xs">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-10">
        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 pb-10 border-b border-[#dadce0]">
          {/* Column 1: Google Play */}
          <div>
            <h4 className="text-sm font-medium text-[#202124] mb-3">Google Play</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#202124] hover:underline">
                  Play Pass
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#202124] hover:underline">
                  Play Points
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#202124] hover:underline">
                  Vales-presente
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#202124] hover:underline">
                  Resgatar
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#202124] hover:underline">
                  Política de reembolso
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Crianças e família */}
          <div>
            <h4 className="text-sm font-medium text-[#202124] mb-3">Crianças e família</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#202124] hover:underline">
                  Guia para a família
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#202124] hover:underline">
                  Compartilhamento em família
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Region Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#202124] hover:underline">
              Termos de Serviço
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#202124] hover:underline">
              Privacidade
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#202124] hover:underline">
              Sobre o Google Play
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#202124] hover:underline">
              Desenvolvedores
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#202124] hover:underline">
              Google Store
            </a>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-[#202124]">
            <Globe className="w-4 h-4 text-[#5f6368]" />
            <span>Brasil (Português)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
