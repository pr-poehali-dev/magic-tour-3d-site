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
    title: '30-й Маршрут',
    description: 'Легендарный пеший маршрут через горы к Чёрному морю',
    icon: 'Compass',
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    title: 'Восхождение на Тхач',
    description: 'Покорение величественной горы Тхач — объекта ЮНЕСКО',
    icon: 'TrendingUp',
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    title: 'Вершины Фишт и Оштен',
    description: 'Горный поход к снежным великанам Кавказа',
    icon: 'Mountain',
    gradient: 'from-indigo-600 to-blue-600'
  },
  {
    title: 'Гуамское ущелье',
    description: 'Прогулка по живописному каньону с узкоколейкой',
    icon: 'Trees',
    gradient: 'from-green-600 to-emerald-600'
  },
  {
    title: 'Чёртов Палец',
    description: 'Треккинг к легендарной скале с панорамными видами',
    icon: 'Hand',
    gradient: 'from-orange-600 to-red-600'
  },
  {
    title: 'Гранитный каньон',
    description: 'Захватывающий маршрут через гранитные скалы',
    icon: 'Square',
    gradient: 'from-slate-600 to-gray-600'
  },
  {
    title: 'Водопады Руфабго',
    description: 'Экскурсия к каскаду живописных водопадов',
    icon: 'Droplets',
    gradient: 'from-cyan-600 to-blue-600'
  },
  {
    title: 'Азишская пещера',
    description: 'Подземное царство сталактитов и сталагмитов',
    icon: 'Circle',
    gradient: 'from-amber-600 to-yellow-600'
  },
  {
    title: 'Замок древнего человека',
    description: 'Музей под открытым небом — жилище первобытных людей',
    icon: 'Castle',
    gradient: 'from-brown-600 to-orange-700'
  },
  {
    title: 'Экстрим-парк Мишоко',
    description: 'Адреналин на скалодромах и подвесных мостах',
    icon: 'Zap',
    gradient: 'from-red-600 to-orange-600'
  },
  {
    title: 'Хаджохская теснина',
    description: 'Узкое ущелье реки Белой с бирюзовой водой',
    icon: 'Waves',
    gradient: 'from-teal-600 to-cyan-600'
  },
  {
    title: 'Свято-Михайловский монастырь',
    description: 'Посещение древнего мужского монастыря в горах',
    icon: 'Church',
    gradient: 'from-purple-700 to-indigo-700'
  },
  {
    title: 'Канатная дорога',
    description: 'Панорамные виды на горы с высоты птичьего полёта',
    icon: 'Cable',
    gradient: 'from-sky-600 to-blue-600'
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
