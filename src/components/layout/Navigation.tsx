import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import MagicParticles from '@/components/MagicParticles';

interface NavigationProps {
  activeSection: string;
  onScrollToSection: (sectionId: string) => void;
}

const Navigation = ({ activeSection, onScrollToSection }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const menuItems = [
    { id: 'home', label: 'Главная' },
    { id: 'tours', label: 'Туры' },
    { id: 'gallery', label: 'Галерея' },
    { id: 'reviews', label: 'Отзывы' },
    { id: 'contact', label: 'Контакты' }
  ];

  const handleMenuClick = (sectionId: string) => {
    onScrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-lg z-50 border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => onScrollToSection('home')}
              onMouseEnter={() => setIsLogoHovered(true)}
              onMouseLeave={() => setIsLogoHovered(false)}
            >
              <div className="relative w-12 h-12">
                <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                  <defs>
                    <path id="circlePath" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
                  </defs>
                  <text className="fill-amber-400/70 group-hover:fill-amber-300 transition-colors text-[9px]" style={{ fontFamily: 'serif', fontWeight: 'bold', letterSpacing: '0.8px' }}>
                    <textPath href="#circlePath" startOffset="0%" textLength="238.76" lengthAdjust="spacing">
                      ᚠ ᚢ ᚦ ᚨ ᚱ ᚲ ᚷ ᚹ ᚺ ᚾ ᛁ ᛃ ᛇ ᛈ ᛉ ᛊ ᛏ ᛒ ᛖ ᛗ ᛚ ᛜ ᛞ ᛟ
                    </textPath>
                  </text>
                </svg>
                
                <img 
                  src="https://cdn.poehali.dev/projects/7a775a18-54ec-4bcc-8a62-8d723b3ce525/files/ee62f679-b7af-441f-ae87-758987dd4a47.jpg" 
                  alt="MagicTour Logo" 
                  className="absolute inset-0 h-full w-full object-contain rounded-full border-2 border-purple-500/50 group-hover:border-purple-400 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 animate-logo-appear animate-logo-glow"
                  style={{ padding: '6px' }}
                />
                <div className="absolute inset-0 rounded-full animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <MagicParticles isActive={isLogoHovered} />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-amber-300 to-blue-400 bg-clip-text text-transparent animate-fade-in">
                MagicTour
              </h1>
            </div>
            
            <div className="hidden md:flex gap-6">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onScrollToSection(item.id)}
                  className={`font-semibold transition-all duration-300 hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-white/90'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </Button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-lg" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="absolute top-20 right-4 left-4 bg-slate-900/95 backdrop-blur-lg rounded-lg border border-white/20 shadow-xl p-6 space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className={`w-full text-left py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-primary text-white'
                    : 'text-white/90 hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;