interface NavigationProps {
  activeSection: string;
  onScrollToSection: (sectionId: string) => void;
}

const Navigation = ({ activeSection, onScrollToSection }: NavigationProps) => {
  const menuItems = [
    { id: 'home', label: 'Главная' },
    { id: 'tours', label: 'Туры' },
    { id: 'gallery', label: 'Галерея' },
    { id: 'reviews', label: 'Отзывы' },
    { id: 'contact', label: 'Контакты' }
  ];

  return (
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
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
