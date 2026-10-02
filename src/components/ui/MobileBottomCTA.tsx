import { content } from '../../data/content';
import { Button } from './Button';
import { useModal } from '../../context/ModalContext';

export const MobileBottomCTA = () => {
  const { openModal } = useModal();
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/90 backdrop-blur-md border-t border-neutral-200 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
      <Button 
        className="w-full h-14 text-lg shadow-md"
        onClick={() => openModal('strategy')}
      >
        {content.nav.cta}
      </Button>
    </div>
  );
};
