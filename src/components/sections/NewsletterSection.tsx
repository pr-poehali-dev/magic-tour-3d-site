import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="bg-gradient-to-r from-primary/90 to-blue-600/90 backdrop-blur-sm border-none">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-8">
              <Icon name="Mail" size={48} className="text-white mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Подпишитесь на новости
              </h2>
              <p className="text-white/90 text-lg">
                Получайте спецпредложения, новые туры и акции первыми!
              </p>
            </div>

            {subscribed ? (
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
                <Icon name="CheckCircle" size={48} className="text-white mx-auto mb-3" />
                <p className="text-white text-xl font-semibold">
                  Спасибо за подписку!
                </p>
                <p className="text-white/80 mt-2">
                  Мы отправим вам письмо с подтверждением
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Ваш email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-12 bg-white/20 backdrop-blur-sm border-white/30 text-white placeholder:text-white/60 focus:bg-white/30"
                />
                <Button 
                  type="submit"
                  className="h-12 px-8 bg-white text-primary hover:bg-white/90 font-semibold"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Подписаться
                </Button>
              </form>
            )}

            <div className="flex items-center justify-center gap-6 mt-8 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <Icon name="Gift" size={16} />
                <span>Эксклюзивные предложения</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Bell" size={16} />
                <span>Новые туры</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default NewsletterSection;
