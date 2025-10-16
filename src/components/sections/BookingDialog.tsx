import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface FormData {
  name: string;
  phone: string;
  email: string;
  tourType: string;
  people: string;
  date: string;
  message: string;
}

interface BookingDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  formData: FormData;
  onInputChange: (field: string, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const BookingDialog = ({ isOpen, onOpenChange, formData, onInputChange, onSubmit }: BookingDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-900 text-white border-slate-700">
        <DialogHeader>
          <DialogTitle className="text-2xl">Забронировать тур</DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Имя *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => onInputChange('name', e.target.value)}
                placeholder="Иван Иванов"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Телефон *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => onInputChange('phone', e.target.value)}
                placeholder="+7 (900) 123-45-67"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => onInputChange('email', e.target.value)}
              placeholder="example@mail.com"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="tourType">Тип тура *</Label>
              <Select value={formData.tourType} onValueChange={(value) => onInputChange('tourType', value)}>
                <SelectTrigger id="tourType">
                  <SelectValue placeholder="Выберите тур" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rafting">Рафтинг</SelectItem>
                  <SelectItem value="balloon">Воздушный шар</SelectItem>
                  <SelectItem value="horse">Конные прогулки</SelectItem>
                  <SelectItem value="rafting-family">Сплав</SelectItem>
                  <SelectItem value="trekking">Треккинг</SelectItem>
                  <SelectItem value="excursion">Экскурсии</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="people">Количество человек</Label>
              <Input
                id="people"
                type="number"
                min="1"
                value={formData.people}
                onChange={(e) => onInputChange('people', e.target.value)}
                placeholder="2"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="date">Желаемая дата</Label>
            <Input
              id="date"
              type="date"
              value={formData.date}
              onChange={(e) => onInputChange('date', e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Комментарий</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => onInputChange('message', e.target.value)}
              placeholder="Расскажите о ваших пожеланиях..."
              rows={4}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="submit" className="flex-1 bg-gradient-to-r from-primary to-secondary">
              <Icon name="Send" className="mr-2" size={18} />
              Отправить заявку
            </Button>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Отмена
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;