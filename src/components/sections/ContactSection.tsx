import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white drop-shadow-lg">Контакты</h2>
        <p className="text-center text-white/90 text-lg mb-12 drop-shadow-lg">
          Свяжитесь с нами для подбора идеального тура
        </p>
        <Card className="border-2 bg-slate-900/80 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-white">Туроператор</h3>
                    <p className="text-white/90">Елена А.</p>
                    <p className="text-sm text-white/70">Профессиональный подбор туров</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-white">Телефон</h3>
                    <a href="tel:+79884755504" className="text-white/90 hover:text-secondary transition-colors">
                      +7 (988) 475-55-04
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-white">Email</h3>
                    <a href="mailto:magic-tour01@yandex.ru" className="text-white/90 hover:text-accent transition-colors">
                      magic-tour01@yandex.ru
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://yandex.ru/map-widget/v1/?ll=39.9944%2C44.2000&mode=search&sll=39.9944%2C44.2000&text=%D0%9B%D0%B0%D0%B3%D0%BE-%D0%9D%D0%B0%D0%BA%D0%B8%2C%20%D0%BA%D0%B0%D0%BC%D0%B5%D0%BD%D0%BD%D0%BE%D0%BC%D0%BE%D1%81%D1%82%D1%81%D0%BA%D0%B8%D0%B9%2C%20%D0%BC%D0%B5%D0%B7%D0%BC%D0%B0%D0%B9%2C%20%D0%B4%D0%B0%D1%85%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%2C%20%D0%B3%D1%83%D0%B7%D0%B5%D1%80%D0%B8%D0%BF%D0%BB%D1%8C&z=10&l=sat"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Карта местоположения"
                  ></iframe>
                </div>
                <p className="text-sm text-white/70 text-center">
                  Работаем ежедневно с 9:00 до 21:00
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;