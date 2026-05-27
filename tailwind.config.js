/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#fdf5f4',
          100: '#f9e8e5',
          200: '#f0ccc8',
          300: '#e5a8a2',
          400: '#d47e76',
          500: '#bf5f58',
          600: '#a04848',  // 메인 포인트 컬러
          700: '#854040',
          800: '#6c3434',
          900: '#5a2c2c',
        }
      },
    },
  },
  plugins: [],
}

