const fs = require('fs');
const path = require('path');

const components = [
  { name: 'StickyNav', dir: 'sections' },
  { name: 'Hero', dir: 'sections' },
  { name: 'PathSplit', dir: 'sections' },
  { name: 'FoundersProof', dir: 'sections' },
  { name: 'LaunchOffer', dir: 'sections' },
  { name: 'WebinarAgenda', dir: 'sections' },
  { name: 'ScaleProgramme', dir: 'sections' },
  { name: 'ComparisonTable', dir: 'sections' },
  { name: 'Testimonials', dir: 'sections' },
  { name: 'Pricing', dir: 'sections' },
  { name: 'FAQ', dir: 'sections' },
  { name: 'ChecklistCapture', dir: 'sections' },
  { name: 'FinalCTA', dir: 'sections' },
  { name: 'MobileBottomCTA', dir: 'ui' },
];

components.forEach(c => {
  const fileContent = `import { motion } from 'framer-motion';
import { content } from '../../data/content';

export const ${c.name} = () => {
  return (
    <section id="${c.name.toLowerCase()}" className="py-20 px-6 container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold font-serif text-forest-green mb-8">
        ${c.name} Section
      </h2>
      <p>Content goes here</p>
    </section>
  );
};
`;
  const filePath = path.join(__dirname, 'src', 'components', c.dir, `${c.name}.tsx`);
  fs.writeFileSync(filePath, fileContent);
});

console.log('Components generated.');
