import { motion } from 'motion/react';

const companies = [
  { name: 'HealthPrime', logo: 'HP' },
  { name: 'Arktis Engenharia', logo: 'AE' },
];

export function StaticCompanyLogos() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center gap-6 sm:gap-8 flex-wrap px-4">
        {companies.map((company, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-red-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition-all" />
            <div className="relative glass-premium px-4 py-3 rounded-lg border border-gray-800 group-hover:border-primary/30 transition-all">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-[#8B1538] to-[#A31D45] rounded-md flex items-center justify-center">
                  <span className="text-white text-xs">{company.logo}</span>
                </div>
                <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                  {company.name}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
