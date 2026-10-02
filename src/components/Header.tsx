import React from 'react';
import { Search, HelpCircle } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenSearch?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onOpenSearch }) => {
  const tabs = [
    {
      id: 'jogos',
      label: 'Jogos',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 21 16" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M19.3 8.4C19.2169 7.65213 19.0648 6.90427 18.9009 6.09902C18.8676 5.93522 18.8338 5.76904 18.8 5.6L18.8 5.59986C18.7 5.1 18.7 5.09996 18.6 4.7L18.5 4.4C18.2 1.8 16 0 13.3 0H6.7C4.1 0 1.8 1.8 1.4 4.4C1.4 4.43174 1.4 4.4534 1.3968 4.47458C1.38993 4.52014 1.36826 4.56347 1.3 4.7C1.3 5.1 1.3 5.1 1.2 5.6C1.1 6.05 1.025 6.525 0.95 7C0.875 7.475 0.8 7.95 0.7 8.4C0.1 11.9 0 12.5 0 12.7C0 14.2 1.2 15.5 2.8 15.5C3.6 15.5 4.3 15.2 4.8 14.7L7.7 11.9H12.4L15.3 14.8C15.8 15.3 16.5 15.6 17.3 15.6C18.8 15.6 20.1 14.4 20.1 12.8C20.0055 12.5165 19.911 11.9651 19.3946 8.95177L19.3 8.4ZM13 5C13.4971 5 13.9 4.59706 13.9 4.1C13.9 3.60294 13.4971 3.2 13 3.2C12.5029 3.2 12.1 3.60294 12.1 4.1C12.1 4.59706 12.5029 5 13 5ZM15.8 6C15.8 6.49706 15.3971 6.9 14.9 6.9C14.4029 6.9 14 6.49706 14 6C14 5.50294 14.4029 5.1 14.9 5.1C15.3971 5.1 15.8 5.50294 15.8 6ZM10.5 5.4C10.2 5.7 10.2 6.3 10.5 6.6C10.8 6.9 11.4 6.9 11.7 6.6C12 6.3 12 5.7 11.7 5.4C11.4 5.1 10.9 5.1 10.5 5.4ZM13 8.8C13.4971 8.8 13.9 8.39706 13.9 7.9C13.9 7.40294 13.4971 7 13 7C12.5029 7 12.1 7.40294 12.1 7.9C12.1 8.39706 12.5029 8.8 13 8.8ZM6.4 3.5H7.6V5.4H9.5V6.6H7.6V8.5H6.4V6.6H4.5V5.4H6.4V3.5ZM16.5 13.3C16.7 13.5 16.9 13.6 17.2 13.6C17.8 13.6 18.2 13.2 18.2 12.6C18.2 12.7 16.8 4.8 16.8 4.7C16.5 3 15 1.8 13.3 1.8H6.7C4.9 1.8 3.5 3 3.2 4.7C3.2 4.8 1.8 12.7 1.8 12.7C1.8 13.3 2.3 13.7 2.8 13.7C3.1 13.7 3.3 13.6 3.5 13.4L6.9 10H13.1L13.4 10.2L16.5 13.3Z" />
        </svg>
      )
    },
    {
      id: 'apps',
      label: 'Apps',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M15 4H18C19.1 4 20 4.9 20 6V9C20 10.1 19.1 11 18 11H15C13.9 11 13 10.1 13 9V6C13 4.9 13.9 4 15 4ZM9 13H6C4.9 13 4 13.9 4 15V18C4 19.1 4.9 20 6 20H9C10.1 20 11 19.1 11 18V15C11 13.9 10.1 13 9 13ZM18 13H15C13.9 13 13 13.9 13 15V18C13 19.1 13.9 20 15 20H18C19.1 20 20 19.1 20 18V15C20 13.9 19.1 13 18 13ZM9 4H6C4.9 4 4 4.9 4 6V9C4 10.1 4.9 11 6 11H9C10.1 11 11 10.1 11 9V6C11 4.9 10.1 4 9 4Z" />
        </svg>
      )
    },
    {
      id: 'filmes',
      label: 'Filmes',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M3 2V22H21V2H3ZM5 20H19V4H5V20ZM9 7H6V5H9V7ZM18 7H15V5H18V7ZM6 19H9V17H6V19ZM18 19H15V17H18V19ZM15 15H18V13H15V15ZM9 15H6V13H9V15ZM15 11H18V9H15V11ZM9 11H6V9H9V11Z" />
        </svg>
      )
    },
    {
      id: 'livros',
      label: 'Livros',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12.4996 6.36584L14.001 7.65237V4H11.001V7.65075L12.4996 6.36584ZM10 2H11.001H14.001H15H16.998C18.6461 2 20.001 3.35397 20.001 5.002V18.998C20.001 20.646 18.6461 22 16.998 22H4V2H10ZM18.001 5.002C18.001 4.459 17.542 4 16.998 4H16.001V12L12.5 9L9.001 12V4H6V20H16.998C17.542 20 18.001 19.541 18.001 18.998V5.002Z" />
        </svg>
      )
    },
    {
      id: 'criancas',
      label: 'Crianças',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M11.9995 20.439C13.1543 20.787 17.2264 22 17.6293 22C18.4311 22 18.928 21.578 19.154 21.325C19.7049 20.7081 19.7029 20.0604 19.6999 19.0794L19.6999 19.074C19.6989 18.647 19.6299 16.111 19.6009 15.125C20.2258 14.252 21.8914 11.907 22.1604 11.5C22.7292 10.643 23.2201 9.901 22.8972 8.908C22.5724 7.90856 21.7594 7.61034 20.8112 7.26259L20.8096 7.262C20.3747 7.103 17.7853 6.254 16.8195 5.942C16.2026 5.107 14.518 2.848 14.221 2.476L14.2198 2.47445C13.5875 1.68311 13.0416 1 11.9995 1C10.9577 1 10.4108 1.684 9.77797 2.477C9.48103 2.848 7.79639 5.107 7.18052 5.942C6.21372 6.25" />
        </svg>
      )
    }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#dadce0]">
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6">
        {/* Top brand & icons row */}
        <div className="flex items-center justify-between h-16">
          {/* Logo with Google Play text */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); }}
            className="flex items-center space-x-2.5 group cursor-pointer select-none"
          >
            {/* Colorful Google Play Vector Triangle */}
            <div className="w-10 h-10 flex items-center justify-center shrink-0">
              <svg className="w-9 h-9" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M72.3 20.8C65.5 24.5 61 31.8 61 40.5V471.5C61 480.2 65.5 487.5 72.3 491.2L278.4 256L72.3 20.8Z" fill="#00C1DE" />
                <path d="M346.9 187.5L278.4 256L346.9 324.5L428.3 278.1C441.9 270.3 451 255.8 451 256C451 256.2 441.9 241.7 428.3 233.9L346.9 187.5Z" fill="#FFA500" />
                <path d="M72.3 491.2C78.4 494.5 85.5 495.2 92.5 491.2L346.9 346.5L278.4 256L72.3 491.2Z" fill="#FF3A44" />
                <path d="M72.3 20.8L278.4 256L346.9 165.5L92.5 20.8C85.5 16.8 78.4 17.5 72.3 20.8Z" fill="#00E676" />
              </svg>
            </div>
            
            {/* Exactly "Google Play" title as requested */}
            <div className="flex items-baseline">
              <span className="text-[22px] tracking-tight google-sans">
                <span className="font-normal text-[#5f6368]">Google </span>
                <span className="font-medium text-[#202124]">Play</span>
              </span>
            </div>
          </a>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-1">
            <button
              onClick={onOpenSearch}
              title="Pesquisar"
              className="p-2.5 text-[#5f6368] hover:text-[#202124] hover:bg-[#f1f3f4] rounded-full transition-colors cursor-pointer"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              title="Ajuda e feedback"
              className="p-2.5 text-[#5f6368] hover:text-[#202124] hover:bg-[#f1f3f4] rounded-full transition-colors cursor-pointer"
            >
              <HelpCircle className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Categories Row (Jogos, Apps, Filmes, Livros, Crianças) */}
        <nav className="flex items-center space-x-1 overflow-x-auto no-scrollbar border-t border-[#f1f3f4] py-1">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2.5 text-sm font-medium rounded-full transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'text-[#01875f] font-semibold bg-[#e6f4ea]'
                    : 'text-[#5f6368] hover:text-[#202124] hover:bg-[#f1f3f4]'
                }`}
              >
                <span className={isActive ? 'text-[#01875f]' : 'text-[#5f6368]'}>
                  {tab.icon}
                </span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
