import React from 'react';
import { CheckCircle2, Target, User } from 'lucide-react';

export const CourseDetails: React.FC = () => {
  return (
    <section className="py-10 pb-32">
      <div className="max-w-5xl mx-auto px-4 md:px-0">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <p className="text-brand-accent font-mono text-xs md:text-lg mb-12 tracking-widest uppercase">
            На базе сообщества мы запускаем
          </p>
          <div className="inline-block relative max-w-full px-2">
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-black px-2 py-0.5 md:px-3 md:py-1 text-[10px] md:text-sm font-bold font-sans rounded-full whitespace-nowrap z-10">
              5 месячный курс
            </span>
            <h3 className="text-2xl sm:text-5xl md:text-7xl font-display font-black text-white leading-tight mt-4 md:mt-2 break-words">
              СРЕДНЯЯ ШКОЛА <br />
              <span className="text-brand-neon">СОБЛАЗНЕНИЯ</span>
            </h3>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">
          
          <FeatureCard 
            icon={<CheckCircle2 className="w-10 h-10 text-brand-neon" />}
            title="Простота"
            description="Базовые навыки соблазнения, простым языком. Формат для повторения шагов 1-2-3."
            delay={0}
          />

          <FeatureCard 
            icon={<Target className="w-10 h-10 text-brand-accent" />}
            title="Результат"
            description="Соблазнение девушек своего уровня (максимум +0.5 балла) предсказуемо за 10 часов без осечек."
            delay={200}
          />

          <FeatureCard 
            icon={<User className="w-10 h-10 text-blue-400" />}
            title="Реальность"
            description="Обучение адаптировано для обычных парней. Не нужно рассказывать про яхты и большие бизнесы."
            delay={400}
          />

        </div>

        {/* CTA Button */}
        <div className="mt-20 flex justify-center">
            <button className="group relative px-8 py-4 md:px-10 md:py-5 bg-brand-neon text-brand-dark font-display font-bold text-lg md:text-xl uppercase tracking-wider hover:bg-white transition-colors duration-300 rounded-sm w-full md:w-auto">
                <span className="relative z-10">Записаться на курс</span>
                <div className="absolute inset-0 h-full w-full bg-brand-accent transform translate-x-2 translate-y-2 -z-10 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
            </button>
        </div>

      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="bg-brand-card/50 backdrop-blur-md border border-white/5 p-6 md:p-8 rounded-2xl hover:border-white/20 transition-all duration-300 hover:-translate-y-2 group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="bg-white/5 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h4 className="text-xl md:text-2xl font-display font-bold text-white mb-4 group-hover:text-brand-neon transition-colors">
        {title}
      </h4>
      <p className="text-gray-300 text-base md:text-lg leading-relaxed font-sans">
        {description}
      </p>
    </div>
  );
};