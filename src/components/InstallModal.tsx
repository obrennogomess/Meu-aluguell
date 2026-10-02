import React, { useEffect, useState } from 'react';
import { Check, X, Download, ShieldCheck, Home } from 'lucide-react';

interface InstallModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInstalled: () => void;
}

export const InstallModal: React.FC<InstallModalProps> = ({
  isOpen,
  onClose,
  onInstalled
}) => {
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState<'downloading' | 'installing' | 'done'>('downloading');

  useEffect(() => {
    if (!isOpen) {
      setProgress(0);
      setStep('downloading');
      return;
    }

    // Progress timer simulation
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 15) + 10;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(interval);
        setStep('installing');

        setTimeout(() => {
          setStep('done');
          onInstalled();
        }, 1200);
      } else {
        setProgress(current);
      }
    }, 250);

    return () => clearInterval(interval);
  }, [isOpen, onInstalled]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between pb-3 border-b border-[#dadce0]">
          <div className="flex items-center gap-2">
            <Home className="w-5 h-5 text-[#01875f]" />
            <span className="font-medium text-[#202124] text-sm">Instalador Google Play</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#5f6368] hover:text-[#202124] rounded-full transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-5 text-center flex flex-col items-center">
          {/* App icon badge (NO RASTER IMAGES) */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#01875f] to-[#047857] text-white flex items-center justify-center shadow-md mb-3">
            <Home className="w-8 h-8" />
          </div>

          <h4 className="text-base font-medium text-[#202124]">Meu Aluguel</h4>
          <p className="text-xs text-[#5f6368] mt-0.5">Versão 3.4.1 (Oficial)</p>

          <div className="w-full mt-6 space-y-2">
            <div className="flex items-center justify-between text-xs text-[#5f6368]">
              <span>
                {step === 'downloading'
                  ? 'Baixando pacote do aplicativo...'
                  : step === 'installing'
                  ? 'Instalando no dispositivo...'
                  : 'Instalação concluída!'}
              </span>
              <span className="font-semibold text-[#01875f]">{progress}%</span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-2 bg-[#e8eaed] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#01875f] rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-[11px] text-[#80868b] pt-1">
              <span>Tamanho: 14,2 MB</span>
              <span className="flex items-center gap-1 text-[#01875f]">
                <ShieldCheck className="w-3 h-3" />
                <span>Play Protect verificado</span>
              </span>
            </div>
          </div>

          {/* Action button */}
          <div className="mt-6 w-full">
            {step === 'done' ? (
              <button
                onClick={onClose}
                className="w-full py-2.5 bg-[#01875f] hover:bg-[#0b6348] text-white text-sm font-medium rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs"
              >
                <Check className="w-4 h-4" />
                <span>Pronto para usar</span>
              </button>
            ) : (
              <button
                onClick={onClose}
                className="w-full py-2 border border-[#dadce0] text-[#5f6368] hover:bg-[#f8f9fa] text-xs font-medium rounded-lg transition-colors cursor-pointer"
              >
                Cancelar
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
