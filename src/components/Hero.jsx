import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';

function CountUp({ target, unit, duration = 1500 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const startedRef = useRef(false);

  // Extract numeric value
  const numStr = target.replace(/[^0-9.]/g, '');
  const numVal = parseFloat(numStr) || 0;
  const prefix = target.match(/^[^0-9]*/)?.[0] || '';
  const suffix = target.replace(prefix, '').replace(numStr, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          let start = 0;
          const step = numVal / (duration / 16);
          const timer = setInterval(() => {
            start += step;
            if (start >= numVal) {
              setCount(numVal);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [numVal, duration]);

  const display = numVal === 0 ? target : (
    prefix + (Number.isInteger(numVal) ? Math.floor(count).toLocaleString() : count.toFixed(1)) + suffix
  );

  return <span ref={ref}>{numVal === 0 ? target : display}</span>;
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center pt-16 pb-12 px-4 bg-gradient-to-b from-indigo-50/50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          {profile.subtitle}
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight"
        >
          {profile.name}
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4"
        >
          {profile.title}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          {profile.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 dark:shadow-indigo-900/30"
          >
            프로젝트 보기
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700 shadow-sm"
          >
            연락하기
          </a>
        </motion.div>

        {/* Hero Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {profile.heroMetrics.map((metric, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800/50 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-700 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-bold text-indigo-600 dark:text-indigo-400 leading-none mb-1">
                <CountUp target={metric.value} />
                <span className="text-base font-semibold ml-0.5">{metric.unit}</span>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-tight">
                {metric.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-16 flex flex-col items-center text-gray-400 dark:text-gray-600"
      >
        <span className="text-xs mb-2">스크롤</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600 animate-pulse" />
      </motion.div>
    </section>
  );
}
