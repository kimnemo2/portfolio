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
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-sm font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-2">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">연락하기</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-10 text-base">
            협업 제안이나 커피챗 등 편하게 연락 주세요 ☕
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 이메일 카드 */}
            <button
              onClick={handleCopyEmail}
              /* justify-center를 justify-start로 변경하고 수평 패딩을 px-6으로 확대 */
              className="group flex items-center justify-start gap-4 px-6 py-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-brand-300 dark:hover:border-brand-600 shadow-sm hover:shadow-md transition-all w-full"
            >
              <span className="text-2xl flex-shrink-0 select-none align-middle">✉️</span>
              {/* 텍스트 영역이 남은 공간을 차지하도록 flex-1 부여 */}
              <div className="text-left min-w-0 flex-1 flex flex-col justify-center">
                <div className="text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap leading-tight">이메일</div>
                <div className="text-xs sm:text-sm md:text-xs lg:text-sm font-semibold text-gray-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors truncate leading-tight mt-0.5">
                  {profile.email}
                </div>
              </div>
              {/* '복사' 라벨을 우측 끝으로 밀기 위해 ml-auto 사용 */}
              <span className="text-xs text-gray-400 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity ml-auto pl-2">복사</span>
            </button>

            {/* 바로 보내기 카드 */}
            <a
              href={`mailto:${profile.email}`}
              /* 동일하게 justify-start gap-4 px-6 적용 */
              className="group flex items-center justify-start gap-4 px-6 py-4 bg-brand-600 text-white rounded-2xl hover:bg-brand-700 transition-colors shadow-lg shadow-brand-200 dark:shadow-brand-900/30 w-full"
            >
              <span className="text-2xl flex-shrink-0 select-none align-middle">📨</span>
              <div className="text-left whitespace-nowrap flex flex-col justify-center">
                <div className="text-xs text-brand-200 leading-tight">바로 보내기</div>
                <div className="text-sm font-semibold leading-tight mt-0.5">메일 앱 열기</div>
              </div>
            </a>

            {/* 전화 카드 */}
            <a
              href={`tel:${profile.phone}`}
              /* 동일하게 justify-start gap-4 px-6 적용 */
              className="group flex items-center justify-start gap-4 px-6 py-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-brand-300 dark:hover:border-brand-600 shadow-sm hover:shadow-md transition-all w-full"
            >
              <span className="text-2xl flex-shrink-0 select-none align-middle">📱</span>
              <div className="text-left whitespace-nowrap flex flex-col justify-center">
                <div className="text-xs text-gray-400 dark:text-gray-500 leading-tight">전화</div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors leading-tight mt-0.5">
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