import { motion } from 'framer-motion';
import { content } from '../../data/content';
import { Check, X } from 'lucide-react';

export const ComparisonTable = () => {
  return (
    <section className="py-24 px-6 bg-cream border-t border-neutral-200">
      <div className="w-full max-w-[1440px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black font-serif text-forest-green mb-4">
            {content.comparisonTable.title}
          </h2>
        </motion.div>

        <div className="overflow-x-auto pb-8 -mx-6 px-6 md:mx-0 md:px-0">
          <table className="w-full min-w-[800px] bg-white rounded-3xl overflow-hidden shadow-xl border border-neutral-100 border-collapse">
            <thead>
              <tr className="bg-neutral-900 text-white">
                {content.comparisonTable.headers.map((header, idx) => (
                  <th key={idx} className={`p-6 text-left font-bold ${idx === 4 ? 'bg-forest-green' : ''}`}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {content.comparisonTable.rows.map((row, rowIdx) => (
                <tr key={rowIdx} className="border-b border-neutral-100 last:border-0 hover:bg-neutral-50 transition-colors">
                  <td className="p-6 font-bold text-neutral-800">{row.feature}</td>
                  {row.cols.map((col, colIdx) => (
                    <td key={colIdx} className={`p-6 text-neutral-600 ${colIdx === 3 ? 'bg-forest-green/5 font-bold text-forest-green' : ''}`}>
                      <div className="flex items-center gap-2">
                        {col === 'Yes' || col === 'Comprehensive' || col === '100% Guaranteed' || col === 'Extremely High' ? (
                          <Check className="w-5 h-5 text-forest-green flex-shrink-0" />
                        ) : col === 'No' || col === 'None' || col === 'Low' || col === 'Rarely' ? (
                          <X className="w-5 h-5 text-red-500/50 flex-shrink-0" />
                        ) : null}
                        <span>{col}</span>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
