import { profile } from '../data/profile';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-400 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <div className="text-white font-bold text-sm">{profile.name} · {profile.nameEn}</div>
          <div className="text-xs mt-0.5">{profile.title} · {profile.location}</div>
          <div className="text-xs mt-0.5">© {new Date().getFullYear()} All rights reserved.</div>
        </div>
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
        >
          맨 위로 ↑
        </button>
      </div>
    </footer>
  );
}
