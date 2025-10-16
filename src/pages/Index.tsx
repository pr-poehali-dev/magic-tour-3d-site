import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/layout/Navigation';
import SocialButtons from '@/components/layout/SocialButtons';
import HeroSection from '@/components/sections/HeroSection';
import ToursSection from '@/components/sections/ToursSection';
import GallerySection from '@/components/sections/GallerySection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import ContactSection from '@/components/sections/ContactSection';
import BookingDialog from '@/components/sections/BookingDialog';

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

      <Navigation activeSection={activeSection} onScrollToSection={scrollToSection} />
      
      <HeroSection onScrollToSection={scrollToSection} onBookingOpen={() => setIsBookingOpen(true)} />
      
      <ToursSection />
      
      <GallerySection selectedImage={selectedImage} onImageSelect={setSelectedImage} />
      
      <ReviewsSection />
      
      <NewsletterSection />
      
      <ContactSection />

      <BookingDialog
        isOpen={isBookingOpen}
        onOpenChange={setIsBookingOpen}
        formData={formData}
        onInputChange={handleInputChange}
        onSubmit={handleBookingSubmit}
      />

      <SocialButtons />
    </div>
  );
};

export default Index;