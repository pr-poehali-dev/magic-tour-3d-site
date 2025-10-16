import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const reviews = [
  {
    name: 'Анна Петрова',
    text: 'Невероятные впечатления! Елена подобрала идеальный тур с учётом всех наших пожеланий.',
    rating: 5,
    date: 'Декабрь 2024'
  },
  {
    name: 'Дмитрий Соколов',
    text: 'Профессиональный подход и внимание к деталям. Отдых удался на 100%!',
    rating: 5,
    date: 'Ноябрь 2024'
  },
  {
    name: 'Мария Волкова',
    text: 'Рафтинг был потрясающим! Безопасно, интересно и очень красиво.',
    rating: 5,
    date: 'Октябрь 2024'
  },
  {
    name: 'Александр Смирнов',
    text: 'Полёт на воздушном шаре — самое яркое воспоминание года! Спасибо за организацию!',
    rating: 5,
    date: 'Сентябрь 2024'
  },
  {
    name: 'Екатерина Новикова',
    text: 'Конные прогулки превзошли все ожидания. Профессиональные гиды и потрясающие пейзажи.',
    rating: 5,
    date: 'Август 2024'
  },
  {
    name: 'Игорь Кузнецов',
    text: 'Отличная организация треккинга! Увидели водопады, пещеры. Незабываемо!',
    rating: 5,
    date: 'Июль 2024'
  },
  {
    name: 'Ольга Морозова',
    text: 'Семейный сплав прошёл идеально. Дети в восторге! Безопасно и весело.',
    rating: 5,
    date: 'Июнь 2024'
  },
  {
    name: 'Сергей Белов',
    text: 'Экскурсия по краю была очень познавательной. Узнали много нового об Адыгее.',
    rating: 5,
    date: 'Май 2024'
  },
  {
    name: 'Наталья Козлова',
    text: 'Елена — настоящий профессионал! Всё продумано до мелочей. Рекомендую!',
    rating: 5,
    date: 'Апрель 2024'
  },
  {
    name: 'Виктор Орлов',
    text: 'Горы Адыгеи — это что-то! Благодарю за прекрасную организацию поездки.',
    rating: 5,
    date: 'Март 2024'
  },
  {
    name: 'Татьяна Лебедева',
    text: 'Очень понравился индивидуальный подход. Учли все наши пожелания.',
    rating: 5,
    date: 'Февраль 2024'
  },
  {
    name: 'Андрей Попов',
    text: 'Рафтинг с командой — отличное приключение! Адреналин и красота природы.',
    rating: 5,
    date: 'Январь 2024'
  },
  {
    name: 'Юлия Васильева',
    text: 'Спасибо за незабываемый отдых! Всё на высшем уровне.',
    rating: 5,
    date: 'Декабрь 2023'
  },
  {
    name: 'Максим Федоров',
    text: 'Воздушный шар на рассвете — это магия! Рекомендую всем!',
    rating: 5,
    date: 'Ноябрь 2023'
  },
  {
    name: 'Светлана Егорова',
    text: 'Профессиональная команда, отличная организация. Вернёмся ещё!',
    rating: 5,
    date: 'Октябрь 2023'
  },
  {
    name: 'Роман Захаров',
    text: 'Треккинг к водопадам запомнится надолго. Гиды просто супер!',
    rating: 5,
    date: 'Сентябрь 2023'
  },
  {
    name: 'Ирина Павлова',
    text: 'Конные прогулки — мечта! Красивейшие маршруты и добрые лошади.',
    rating: 5,
    date: 'Август 2023'
  },
  {
    name: 'Владимир Соловьёв',
    text: 'Сплав для всей семьи прошёл отлично. Безопасно и увлекательно!',
    rating: 5,
    date: 'Июль 2023'
  },
  {
    name: 'Алёна Михайлова',
    text: 'Экскурсии очень интересные, узнали много о культуре и природе края.',
    rating: 5,
    date: 'Июнь 2023'
  },
  {
    name: 'Денис Романов',
    text: 'Отличный отдых! Елена помогла выбрать идеальный тур под наш бюджет.',
    rating: 5,
    date: 'Май 2023'
  },
  {
    name: 'Кристина Ильина',
    text: 'Всё было организовано идеально! От трансфера до размещения.',
    rating: 5,
    date: 'Апрель 2023'
  },
  {
    name: 'Артём Волков',
    text: 'Рафтинг — это нечто! Эмоции зашкаливают. Спасибо за приключение!',
    rating: 5,
    date: 'Март 2023'
  },
  {
    name: 'Валерия Крылова',
    text: 'Горы Адыгеи покорили наши сердца. Обязательно вернёмся!',
    rating: 5,
    date: 'Февраль 2023'
  },
  {
    name: 'Николай Титов',
    text: 'Профессионализм на каждом этапе. Очень довольны сервисом!',
    rating: 5,
    date: 'Январь 2023'
  },
  {
    name: 'Лариса Данилова',
    text: 'Полёт на шаре — лучший подарок на день рождения! Незабываемо!',
    rating: 5,
    date: 'Декабрь 2022'
  },
  {
    name: 'Пётр Григорьев',
    text: 'Треккинг был отличным! Физически немного тяжело, но оно того стоит.',
    rating: 5,
    date: 'Ноябрь 2022'
  },
  {
    name: 'Марина Котова',
    text: 'Конные прогулки с детьми — идеальный семейный отдых!',
    rating: 5,
    date: 'Октябрь 2022'
  },
  {
    name: 'Антон Зайцев',
    text: 'Сплав был спокойным и красивым. Отлично отдохнули всей компанией.',
    rating: 5,
    date: 'Сентябрь 2022'
  },
  {
    name: 'Евгения Борисова',
    text: 'Экскурсии познавательные и нескучные. Гиды рассказывают интересно!',
    rating: 5,
    date: 'Август 2022'
  },
  {
    name: 'Станислав Медведев',
    text: 'Прекрасная организация! Всё чётко, вовремя, без сюрпризов.',
    rating: 5,
    date: 'Июль 2022'
  },
  {
    name: 'Дарья Королёва',
    text: 'Адыгея — это любовь! Спасибо MagicTour за волшебный отдых!',
    rating: 5,
    date: 'Июнь 2022'
  },
  {
    name: 'Вячеслав Николаев',
    text: 'Рафтинг превзошёл ожидания! Адреналин и потрясающие виды.',
    rating: 5,
    date: 'Май 2022'
  },
  {
    name: 'Алина Сергеева',
    text: 'Воздушный шар — это мечта! Реализовали её с MagicTour. Спасибо!',
    rating: 5,
    date: 'Апрель 2022'
  }
];

const ReviewsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedReviews = showAll ? reviews : reviews.slice(0, 6);

  return (
    <section id="reviews" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white drop-shadow-lg">Отзывы</h2>
        <p className="text-center text-white/90 text-lg mb-12 drop-shadow-lg">
          Что говорят наши клиенты
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {displayedReviews.map((review, idx) => (
            <Card 
              key={idx} 
              className="hover:scale-105 transition-transform duration-300 bg-slate-900/80 backdrop-blur-sm opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${(idx % 9) * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-white/90 mb-4 italic">"{review.text}"</p>
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-white">{review.name}</p>
                  <p className="text-xs text-white/60">{review.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button
            onClick={() => setShowAll(!showAll)}
            className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white px-8 py-3"
          >
            {showAll ? (
              <>
                <Icon name="ChevronUp" className="mr-2" size={20} />
                Свернуть отзывы
              </>
            ) : (
              <>
                <Icon name="ChevronDown" className="mr-2" size={20} />
                Показать все отзывы ({reviews.length})
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
