import { motion } from 'framer-motion';
import { profile } from '../data/profile';

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay },
  };
}

export default function About() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-950">
      <div className="container-max">
        {/* Section Header */}
        <motion.div {...fadeUp()} className="mb-12">
          <p className="text-sm font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-2">About</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">소개</h2>
        </motion.div>

        {/* Top: Photo + Bio */}
        <div className="flex flex-col sm:flex-row gap-8 items-start mb-12">
          {/* Profile Photo */}
          <motion.div
            {...fadeUp(0.1)}
            className="flex-shrink-0 mx-auto sm:mx-0"
          >
            <div className="relative w-40 h-40 sm:w-48 sm:h-48">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-300 to-brand-500 p-[3px]">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <img
                    src={profile.photo}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Name + location under photo */}
            <div className="text-center mt-4">
              <div className="font-bold text-gray-900 dark:text-white text-sm">{profile.name}</div>
              <div className="text-xs text-brand-600 dark:text-brand-400 font-medium">{profile.nameEn}</div>
              <div className="text-xs text-gray-400 mt-1">📍 {profile.location}</div>
            </div>
          </motion.div>

          {/* About Text + Highlights */}
          <div className="flex-1">
            <motion.p {...fadeUp(0.15)} className="text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg mb-6">
              {profile.about}
            </motion.p>
            <motion.div {...fadeUp(0.2)} className="space-y-2.5">
              {profile.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{h}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom: Career + Education */}
        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div {...fadeUp(0.25)}>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-xl">💼</span> 경력
            </h3>
            <div className="space-y-5">
              {profile.careers.map((c, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-brand-100 dark:border-brand-900">
                  <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-brand-500" />
                  <div className="text-xs text-brand-500 dark:text-brand-400 font-medium mb-0.5">{c.period}</div>
                  <div className="font-bold text-gray-900 dark:text-white text-sm">{c.company}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{c.team} · {c.role}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">{c.summary}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.3)}>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="text-xl">🎓</span> 학력
            </h3>
            <div className="space-y-5">
              {profile.education.map((e, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-brand-100 dark:border-brand-900">
                  <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-brand-500" />
                  <div className="text-xs text-brand-500 dark:text-brand-400 font-medium mb-0.5">{e.period}</div>
                  <div className="font-bold text-gray-900 dark:text-white text-sm">{e.school}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{e.major} · {e.degree}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">GPA {e.gpa}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
