import { motion } from 'framer-motion';
import { profile } from '../data/profile';

export default function Contact() {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    alert('이메일이 복사되었습니다!');
  };

  return (
    <section id="contact" className="section-padding bg-brand-50 dark:bg-gray-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-sm font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-2">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">연락하기</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-10 text-base">
            협업 제안이나 커피챗 등 편하게 연락 주세요 ☕
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleCopyEmail}
              className="group flex items-center justify-center gap-3 px-6 py-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-brand-300 dark:hover:border-brand-600 shadow-sm hover:shadow-md transition-all"
            >
              <span className="text-2xl">✉️</span>
              <div className="text-left">
                <div className="text-xs text-gray-400 dark:text-gray-500">이메일</div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {profile.email}
                </div>
              </div>
              <span className="text-xs text-gray-400 ml-2 opacity-0 group-hover:opacity-100 transition-opacity">복사</span>
            </button>

            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center justify-center gap-3 px-6 py-4 bg-brand-600 text-white rounded-2xl hover:bg-brand-700 transition-colors shadow-lg shadow-brand-200 dark:shadow-brand-900/30"
            >
              <span className="text-2xl">📨</span>
              <div className="text-left">
                <div className="text-xs text-brand-200">바로 보내기</div>
                <div className="text-sm font-semibold">메일 앱 열기</div>
              </div>
            </a>

            <a
              href={`tel:${profile.phone}`}
              className="group flex items-center justify-center gap-3 px-6 py-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-brand-300 dark:hover:border-brand-600 shadow-sm hover:shadow-md transition-all"
            >
              <span className="text-2xl">📱</span>
              <div className="text-left">
                <div className="text-xs text-gray-400 dark:text-gray-500">전화</div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                  {profile.phone}
                </div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
