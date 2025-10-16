import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  activeSection: string;
  onScrollToSection: (sectionId: string) => void;
}

const Navigation = ({ activeSection, onScrollToSection }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              MagicTour
            </h1>
            
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