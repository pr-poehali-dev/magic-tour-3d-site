import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'tours', 'gallery', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tours = [
    {
      title: 'Рафтинг',
      description: 'Экстремальный сплав по горным рекам Адыгеи',
      icon: 'Waves',
      gradient: 'from-primary to-blue-600'
    },
    {
      title: 'Воздушный шар',
      description: 'Незабываемый полёт над горами на рассвете',
      icon: 'Cloud',
      gradient: 'from-accent to-orange-600'
    },
    {
      title: 'Конные прогулки',
      description: 'Живописные маршруты верхом на лошадях',
      icon: 'Mountain',
      gradient: 'from-secondary to-green-600'
    },
    {
      title: 'Сплав',
      description: 'Спокойный сплав для всей семьи',
      icon: 'Ship',
      gradient: 'from-primary to-cyan-600'
    },
    {
      title: 'Треккинг',
      description: 'Пешие походы к водопадам и пещерам',
      icon: 'Footprints',
      gradient: 'from-secondary to-emerald-600'
    },
    {
      title: 'Экскурсии',
      description: 'Знакомство с культурой и природой края',
      icon: 'Camera',
      gradient: 'from-accent to-yellow-600'
    }
  ];

  const reviews = [
    {
      name: 'Анна Петрова',
      text: 'Невероятные впечатления! Елена подобрала идеальный тур с учётом всех наших пожеланий.',
      rating: 5
    },
    {
      name: 'Дмитрий Соколов',
      text: 'Профессиональный подход и внимание к деталям. Отдых удался на 100%!',
      rating: 5
    },
    {
      name: 'Мария Волкова',
      text: 'Рафтинг был потрясающим! Безопасно, интересно и очень красиво.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              MagicTour
            </h1>
            <div className="hidden md:flex gap-6">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'tours', label: 'Туры' },
                { id: 'gallery', label: 'Галерея' },
                { id: 'reviews', label: 'Отзывы' },
                { id: 'contact', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-semibold transition-all duration-300 hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-foreground/70'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <div className="inline-block mb-6">
              <span className="text-6xl animate-float">🏔️</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Магия гор Адыгеи
            </h2>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8">
              Более 20 лет создаём незабываемые приключения в самых красивых местах России
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-lg px-8 py-6"
                onClick={() => scrollToSection('tours')}
              >
                Выбрать тур
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6"
                onClick={() => scrollToSection('contact')}
              >
                Связаться с нами
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20 animate-fade-in-up">
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">⭐</div>
                <h3 className="text-xl font-bold mb-2">20+ лет опыта</h3>
                <p className="text-foreground/70">Профессионалы туристического бизнеса</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-secondary transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-2">Индивидуальный подход</h3>
                <p className="text-foreground/70">Туры под ваши пожелания</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold mb-2">Безопасность</h3>
                <p className="text-foreground/70">Сертифицированные инструкторы</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="tours" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши туры</h2>
          <p className="text-center text-foreground/70 text-lg mb-12">
            Выберите своё приключение в горах Адыгеи
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours.map((tour, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 hover:border-primary cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`h-2 bg-gradient-to-r ${tour.gradient}`} />
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${tour.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={tour.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{tour.title}</h3>
                  <p className="text-foreground/70 mb-4">{tour.description}</p>
                  <Button className={`w-full bg-gradient-to-r ${tour.gradient} hover:opacity-90`}>
                    Узнать больше
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Галерея</h2>
          <p className="text-center text-foreground/70 text-lg mb-12">
            Красота гор Адыгеи в фотографиях
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'https://cdn.poehali.dev/projects/7a775a18-54ec-4bcc-8a62-8d723b3ce525/files/f5b9735e-a44b-4aee-8404-b64f160bf0aa.jpg',
              'https://cdn.poehali.dev/projects/7a775a18-54ec-4bcc-8a62-8d723b3ce525/files/28fc8ce0-d02b-41fe-923f-c091a4fe6623.jpg',
              'https://cdn.poehali.dev/projects/7a775a18-54ec-4bcc-8a62-8d723b3ce525/files/55099b18-6fef-48a2-8e85-b8a5cee77341.jpg',
              'https://cdn.poehali.dev/projects/7a775a18-54ec-4bcc-8a62-8d723b3ce525/files/f5b9735e-a44b-4aee-8404-b64f160bf0aa.jpg',
              'https://cdn.poehali.dev/projects/7a775a18-54ec-4bcc-8a62-8d723b3ce525/files/28fc8ce0-d02b-41fe-923f-c091a4fe6623.jpg',
              'https://cdn.poehali.dev/projects/7a775a18-54ec-4bcc-8a62-8d723b3ce525/files/55099b18-6fef-48a2-8e85-b8a5cee77341.jpg'
            ].map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <img 
                  src={image} 
                  alt={`Адыгея ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Icon name="ZoomIn" size={40} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Отзывы</h2>
          <p className="text-center text-foreground/70 text-lg mb-12">
            Что говорят наши клиенты
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-4 italic">"{review.text}"</p>
                  <p className="font-semibold text-primary">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Контакты</h2>
          <p className="text-center text-foreground/70 text-lg mb-12">
            Свяжитесь с нами для подбора идеального тура
          </p>
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="User" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Туроператор</h3>
                      <p className="text-foreground/80">Елена А.</p>
                      <p className="text-sm text-foreground/60">Профессиональный подбор туров</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Телефон</h3>
                      <a href="tel:+79286693165" className="text-foreground/80 hover:text-secondary transition-colors">
                        +7 (928) 669-31-65
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <a href="mailto:MagicTour01@gmail.com" className="text-foreground/80 hover:text-accent transition-colors">
                        MagicTour01@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-lg p-8">
                  <div className="text-6xl mb-4 animate-float">🗻</div>
                  <p className="text-center text-foreground/70 mb-6">
                    Мы работаем ежедневно с 9:00 до 21:00
                  </p>
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                    <Icon name="MessageCircle" className="mr-2" size={20} />
                    Написать в WhatsApp
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground/5 py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-2">
            MagicTour
          </h2>
          <p className="text-foreground/60 text-sm">
            © 2024 MagicTour. Более 20 лет создаём незабываемые приключения в горах Адыгеи
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;