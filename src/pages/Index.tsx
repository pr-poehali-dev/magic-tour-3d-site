import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    tourType: '',
    people: '',
    date: '',
    message: ''
  });
  const { toast } = useToast();

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

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.tourType) {
      toast({
        title: 'Ошибка',
        description: 'Заполните обязательные поля',
        variant: 'destructive'
      });
      return;
    }

    try {
      const response = await fetch('https://functions.poehali.dev/31afdd22-f506-4a21-84e0-dcdc4a2dc515', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: 'Заявка отправлена!',
          description: 'Елена свяжется с вами в ближайшее время',
        });

        setFormData({
          name: '',
          phone: '',
          email: '',
          tourType: '',
          people: '',
          date: '',
          message: ''
        });
        setIsBookingOpen(false);
      } else {
        toast({
          title: 'Ошибка отправки',
          description: data.error || 'Попробуйте позже или позвоните напрямую',
          variant: 'destructive'
        });
      }
    } catch (error) {
      toast({
        title: 'Ошибка соединения',
        description: 'Проверьте интернет или позвоните по телефону +7 (988) 475-55-04',
        variant: 'destructive'
      });
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

  const galleryImages = [
    'https://cdn.poehali.dev/projects/7a775a18-54ec-4bcc-8a62-8d723b3ce525/files/f5b9735e-a44b-4aee-8404-b64f160bf0aa.jpg',
    'https://cdn.poehali.dev/projects/7a775a18-54ec-4bcc-8a62-8d723b3ce525/files/28fc8ce0-d02b-41fe-923f-c091a4fe6623.jpg',
    'https://cdn.poehali.dev/projects/7a775a18-54ec-4bcc-8a62-8d723b3ce525/files/55099b18-6fef-48a2-8e85-b8a5cee77341.jpg',
    'https://cdn.poehali.dev/projects/7a775a18-54ec-4bcc-8a62-8d723b3ce525/files/ff84d34d-6a9d-42de-b717-e1bab6049a95.jpg',
    'https://cdn.poehali.dev/projects/7a775a18-54ec-4bcc-8a62-8d723b3ce525/files/34721ea5-5a3a-4037-b389-74ee5e86f03b.jpg',
    'https://cdn.poehali.dev/projects/7a775a18-54ec-4bcc-8a62-8d723b3ce525/files/aff811bf-9a36-4411-9cf7-4b124078f818.jpg',
    'https://cdn.poehali.dev/projects/7a775a18-54ec-4bcc-8a62-8d723b3ce525/files/5c47d210-e7df-4fa8-b236-6357870b5c4e.jpg',
    'https://cdn.poehali.dev/projects/7a775a18-54ec-4bcc-8a62-8d723b3ce525/files/20ea7fe7-b8ca-4c25-be52-b4b2a6e0e91b.jpg',
    'https://cdn.poehali.dev/projects/7a775a18-54ec-4bcc-8a62-8d723b3ce525/files/26aba0e6-74e8-4e01-ae0f-50f9ebebcd6b.jpg'
  ];

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 -z-10">
        <div 
          className="w-full h-full bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/7a775a18-54ec-4bcc-8a62-8d723b3ce525/files/d7c26a3c-e587-4d48-a57e-6cff97e16cd9.jpg)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>
      <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-lg z-50 border-b border-white/20">
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
                  <Button 
                    className={`w-full bg-gradient-to-r ${tour.gradient} hover:opacity-90`}
                    onClick={() => {
                      setFormData(prev => ({ ...prev, tourType: tour.title }));
                      setIsBookingOpen(true);
                    }}
                  >
                    Забронировать
                    <Icon name="Calendar" className="ml-2" size={16} />
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
            {galleryImages.map((image, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div
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
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-full p-0 bg-black/95 border-0">
                  <div className="relative w-full">
                    <img 
                      src={image} 
                      alt={`Адыгея ${index + 1}`}
                      className="w-full h-auto max-h-[90vh] object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>
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
                      <a href="tel:+79884755504" className="text-foreground/80 hover:text-secondary transition-colors">
                        +7 (988) 475-55-04
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <a href="mailto:magic-tour01@yandex.ru" className="text-foreground/80 hover:text-accent transition-colors">
                        magic-tour01@yandex.ru
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

      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Забронировать тур</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleBookingSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Ваше имя *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Иван Иванов"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Телефон *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+7 (900) 123-45-67"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="ivan@example.com"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="tourType">Тип тура *</Label>
                <Select value={formData.tourType} onValueChange={(value) => handleInputChange('tourType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите тур" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Рафтинг">Рафтинг</SelectItem>
                    <SelectItem value="Воздушный шар">Воздушный шар</SelectItem>
                    <SelectItem value="Конные прогулки">Конные прогулки</SelectItem>
                    <SelectItem value="Сплав">Сплав</SelectItem>
                    <SelectItem value="Треккинг">Треккинг</SelectItem>
                    <SelectItem value="Экскурсии">Экскурсии</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="people">Количество человек</Label>
                <Input
                  id="people"
                  type="number"
                  min="1"
                  value={formData.people}
                  onChange={(e) => handleInputChange('people', e.target.value)}
                  placeholder="2"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Желаемая дата</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Дополнительная информация</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Расскажите о ваших пожеланиях..."
                rows={4}
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1 bg-gradient-to-r from-primary to-secondary">
                <Icon name="Send" className="mr-2" size={18} />
                Отправить заявку
              </Button>
              <Button type="button" variant="outline" onClick={() => setIsBookingOpen(false)}>
                Отмена
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href="https://wa.me/79884755504"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 group"
          aria-label="Написать в WhatsApp"
        >
          <Icon name="MessageCircle" size={28} className="group-hover:scale-110 transition-transform" />
        </a>
        <a
          href="https://t.me/79884755504"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#0088cc] hover:bg-[#006ba1] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 group"
          aria-label="Написать в Telegram"
        >
          <Icon name="Send" size={26} className="group-hover:scale-110 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default Index;