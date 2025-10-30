import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';

const attractions = [
  {
    id: 1,
    title: 'Замок древнего человека',
    image: 'https://cdn.poehali.dev/files/a87eb3ce-33db-4268-b520-7a9e44646cc0.jpeg',
    description: 'Древние скульптуры у дороги в горах Адыгеи'
  },
  {
    id: 2,
    title: 'Канатная дорога',
    image: 'https://cdn.poehali.dev/files/cd6a1b39-5dc0-4f3c-bbef-d9c39568f99b.jpg',
    description: 'Захватывающий вид на горы и долины с высоты птичьего полета'
  },
  {
    id: 3,
    title: 'Майкоп',
    image: 'https://cdn.poehali.dev/files/4f35013c-2932-46a2-8f16-3273cb7fa309.jpg',
    description: 'Великолепная мечеть столицы Республики Адыгея'
  },
  {
    id: 4,
    title: 'Мишоко',
    image: 'https://cdn.poehali.dev/files/69bcf169-d83c-4873-b9ea-b27176606353.jpeg',
    description: 'Экстремальные качели над горным ущельем'
  },
  {
    id: 5,
    title: 'Гора Тхач',
    image: 'https://cdn.poehali.dev/files/9982d367-ad9b-42ee-bd4c-fc0cd4d295f2.jpg',
    description: 'Величественная гора с белыми рододендронами'
  },
  {
    id: 6,
    title: 'Хаджохская теснина',
    image: 'https://cdn.poehali.dev/files/0f11e7fa-95ef-4f4f-8ca7-396ede2862e9.jpeg',
    description: 'Узкое живописное ущелье реки Белой'
  },
  {
    id: 7,
    title: 'Гуамское ущелье',
    image: 'https://cdn.poehali.dev/files/72e636f0-a3b6-4779-9314-e9909f3ebce5.jpeg',
    description: 'Узкоколейная железная дорога вдоль горной реки'
  },
  {
    id: 8,
    title: 'Свято-Михайловский монастырь',
    image: 'https://cdn.poehali.dev/files/d6acd23f-d7cf-4bab-b77e-93e93df9a158.jpg',
    description: 'Древний монастырь в живописных горах'
  },
  {
    id: 9,
    title: 'Чертов палец',
    image: 'https://cdn.poehali.dev/files/51803bc2-5239-43cf-b5be-1622db404944.jpg',
    description: 'Уникальная скала необычной формы на закате'
  },
  {
    id: 10,
    title: 'Гранитный каньон',
    image: 'https://cdn.poehali.dev/files/938808a5-10e0-4d47-8547-923304bd4068.jpeg',
    description: 'Захватывающий каньон с бирюзовой водой'
  },
  {
    id: 11,
    title: 'Гора Тхач',
    image: 'https://cdn.poehali.dev/files/6857d269-136b-4389-b4dd-6f4bad6aa183.jpg',
    description: 'Символ Адыгеи с альпийскими лугами'
  },
  {
    id: 12,
    title: 'Свято-Михайловский монастырь',
    image: 'https://cdn.poehali.dev/files/0cde9967-e20f-412b-942c-2cf876671085.jpg',
    description: 'Белоснежный храм с зелеными куполами'
  }
];

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <header className="py-12 px-4 text-center bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Icon name="Mountain" size={48} className="text-green-600" />
            <h1 className="text-5xl font-bold text-gray-800">Сокровища Адыгеи</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Откройте для себя удивительную красоту горной республики. Каждый уголок Адыгеи — это история, которую хочется пережить.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction) => (
            <Card 
              key={attraction.id} 
              className="group overflow-hidden cursor-pointer transition-all hover:shadow-2xl hover:-translate-y-2"
              onClick={() => setSelectedImage(attraction.image)}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={attraction.image}
                  alt={attraction.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{attraction.title}</h3>
                  <p className="text-sm text-gray-200">{attraction.description}</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <Icon name="MapPin" size={20} className="text-green-600" />
                  <h3 className="text-lg font-semibold text-gray-800">{attraction.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <footer className="py-12 px-4 bg-white/80 backdrop-blur-sm mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Heart" size={24} className="text-red-500" />
            <p className="text-gray-700 text-lg">Адыгея ждет вас!</p>
          </div>
          <p className="text-gray-500">Республика Адыгея — жемчужина Кавказа</p>
        </div>
      </footer>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <Icon name="X" size={36} />
          </button>
          <img
            src={selectedImage}
            alt="Полноразмерное изображение"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};

export default Index;
