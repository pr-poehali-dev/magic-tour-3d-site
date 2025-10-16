import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

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

const ToursSection = () => {
  return (
    <section id="tours" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white drop-shadow-lg">Наши туры</h2>
        <p className="text-center text-white/90 text-lg mb-12 drop-shadow-lg">
          Выберите приключение по душе
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour, idx) => (
            <Card 
              key={tour.title} 
              className="group hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden bg-slate-900/80 backdrop-blur-sm opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r ${tour.gradient}`} />
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${tour.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon name={tour.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{tour.title}</h3>
                </div>
                <p className="text-white/80">{tour.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToursSection;