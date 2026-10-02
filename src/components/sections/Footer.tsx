import { content } from '../../data/content';

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-400 py-12 px-6 border-t border-neutral-800 pb-28 md:pb-12">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm">
          <img src="/logo.png" alt="The Flex Logo" className="h-10 w-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" />
        </a>
        
        <nav className="flex gap-6">
          {content.footer.links.map((link, idx) => (
            <a 
              key={idx} 
              href="#" 
              className="text-sm hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm p-1"
            >
              {link}
            </a>
          ))}
        </nav>
        
        <div className="text-sm">
          {content.footer.text}
        </div>
      </div>
    </footer>
  );
};
