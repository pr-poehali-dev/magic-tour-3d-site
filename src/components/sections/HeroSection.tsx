import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  onScrollToSection: (sectionId: string) => void;
  onBookingOpen: () => void;
}

const HeroSection = ({ onScrollToSection, onBookingOpen }: HeroSectionProps) => {
  return (
    <section id="home" className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Магия гор Адыгеи
          </h2>
          <p className="text-2xl md:text-4xl mb-8 font-bold bg-gradient-to-r from-yellow-200 via-amber-300 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(251,191,36,0.8)] opacity-0 animate-gold-text-appear" style={{ fontFamily: '"Dancing Script", "Allura", "Sacramento", cursive', fontWeight: 700, textShadow: '0 0 30px rgba(251, 191, 36, 0.5)', animationDelay: '500ms' }}>
            Мы более 10 лет создаём незабываемые приключения в одном из самых красивых мест России
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-lg px-8 py-6"
              onClick={() => onScrollToSection('tours')}
            >
              Выбрать тур
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-secondary to-green-600 hover:from-secondary/90 hover:to-green-600/90 text-lg px-8 py-6 text-white"
              onClick={onBookingOpen}
            >
              <Icon name="Calendar" className="mr-2" size={20} />
              Забронировать
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <Card className="text-center hover:scale-105 transition-transform duration-300 bg-slate-900/80 backdrop-blur-sm opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <CardContent className="p-8">
              <Icon name="Award" size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-2 text-white">10+ лет</h3>
              <p className="text-white/80">опыта в туризме</p>
            </CardContent>
          </Card>
          <Card className="text-center hover:scale-105 transition-transform duration-300 bg-slate-900/80 backdrop-blur-sm opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <CardContent className="p-8">
              <Icon name="Users" size={48} className="mx-auto mb-4 text-secondary" />
              <h3 className="text-2xl font-bold mb-2 text-white">Индивидуальный</h3>
              <p className="text-white/80">подход к каждому</p>
            </CardContent>
          </Card>
          <Card className="text-center hover:scale-105 transition-transform duration-300 bg-slate-900/80 backdrop-blur-sm opacity-0 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <CardContent className="p-8">
              <Icon name="Shield" size={48} className="mx-auto mb-4 text-accent" />
              <h3 className="text-2xl font-bold mb-2 text-white">Безопасность</h3>
              <p className="text-white/80">превыше всего</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;