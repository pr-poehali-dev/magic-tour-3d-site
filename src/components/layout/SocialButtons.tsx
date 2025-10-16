import Icon from '@/components/ui/icon';

const SocialButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/79884755504"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 group"
        aria-label="Написать в WhatsApp"
      >
        <Icon name="MessageCircle" size={28} className="group-hover:scale-110 transition-transform" />
      </a>
      <a
        href="https://t.me/79884755504"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#0088cc] hover:bg-[#006ba1] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 group"
        aria-label="Написать в Telegram"
      >
        <Icon name="Send" size={26} className="group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
};

export default SocialButtons;
