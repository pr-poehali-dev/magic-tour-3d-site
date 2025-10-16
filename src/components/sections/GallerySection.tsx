import { Dialog, DialogContent } from '@/components/ui/dialog';

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

interface GallerySectionProps {
  selectedImage: string | null;
  onImageSelect: (image: string | null) => void;
}

const GallerySection = ({ selectedImage, onImageSelect }: GallerySectionProps) => {
  return (
    <section id="gallery" className="py-20 px-4 bg-gradient-to-b from-transparent to-background/20">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white drop-shadow-lg">Галерея</h2>
        <p className="text-center text-white/90 text-lg mb-12 drop-shadow-lg">
          Взгляните на красоту Адыгеи
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => onImageSelect(img)}
            >
              <img
                src={img}
                alt={`Галерея ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => onImageSelect(null)}>
        <DialogContent className="max-w-4xl bg-slate-900 border-slate-700">
          <img src={selectedImage || ''} alt="Увеличенное фото" className="w-full rounded-lg" />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;