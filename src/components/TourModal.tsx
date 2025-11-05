import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';

interface Tour {
  title: string;
  description: string;
  icon: string;
  gradient: string;
  fullDescription: string;
  images: string[];
  duration: string;
  difficulty: string;
  price: string;
  features: string[];
}

interface TourModalProps {
  tour: Tour | null;
  isOpen: boolean;
  onClose: () => void;
}

const TourModal = ({ tour, isOpen, onClose }: TourModalProps) => {
  const [isAgreed, setIsAgreed] = useState(false);
  
  if (!tour) return null;

  const handleBooking = () => {
    if (!isAgreed) return;
    const message = `Здравствуйте! Хочу забронировать тур: ${tour.title}`;
    const whatsappUrl = `https://wa.me/79281234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 text-white border-slate-700">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold mb-2">{tour.title}</DialogTitle>
          <DialogDescription className="text-white/80 text-lg">
            {tour.description}
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          {tour.images.map((image, idx) => (
            <div 
              key={idx} 
              className={`rounded-lg overflow-hidden ${idx === 0 ? 'md:col-span-2' : ''}`}
            >
              <img 
                src={image} 
                alt={`${tour.title} - фото ${idx + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <p className="text-white/90 text-lg leading-relaxed">
            {tour.fullDescription}
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 bg-slate-800/50 rounded-lg p-4">
              <Icon name="Clock" size={24} className="text-primary" />
              <div>
                <p className="text-sm text-white/60">Продолжительность</p>
                <p className="font-semibold">{tour.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-slate-800/50 rounded-lg p-4">
              <Icon name="Activity" size={24} className="text-accent" />
              <div>
                <p className="text-sm text-white/60">Сложность</p>
                <p className="font-semibold">{tour.difficulty}</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Icon name="CheckCircle" size={24} className="text-primary" />
              Что входит в тур
            </h3>
            <ul className="grid md:grid-cols-2 gap-3">
              {tour.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Icon name="Check" size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-white/90">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-start gap-3 bg-slate-800/30 rounded-lg p-4 mb-4">
            <Checkbox 
              id="privacy-agree"
              checked={isAgreed}
              onCheckedChange={(checked) => setIsAgreed(checked as boolean)}
              className="mt-1"
            />
            <label 
              htmlFor="privacy-agree" 
              className="text-sm text-white/80 cursor-pointer leading-relaxed"
            >
              Я согласен на обработку персональных данных и принимаю условия политики конфиденциальности
            </label>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={handleBooking}
              disabled={!isAgreed}
              className="flex-1 h-14 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Icon name="MessageCircle" size={24} className="mr-2" />
              Забронировать в WhatsApp
            </Button>
            <Button 
              onClick={onClose}
              variant="outline"
              className="h-14 px-8 border-slate-600 text-white hover:bg-slate-800"
            >
              Закрыть
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TourModal;