import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

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

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white drop-shadow-lg">Отзывы</h2>
        <p className="text-center text-white/90 text-lg mb-12 drop-shadow-lg">
          Что говорят наши клиенты
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review) => (
            <Card key={review.name} className="hover:scale-105 transition-transform duration-300 bg-slate-900/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-white/90 mb-4 italic">"{review.text}"</p>
                <p className="font-semibold text-white">{review.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;