/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sans: ['Open Sans', 'sans-serif'],
      },

      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.container': {
          '@apply max-w-[77.5rem] mx-auto px-10 md:px-10 lg:px-8 xl:max-w-[100rem]':
            {},
        },

        '.h2': {
          '@apply text-2xl font-poppins font-medium text-gray-800': {},
        },
        '.activity-card': {
          '@apply text-xl md:text-2xl lg:text-3xl text-white absolute bottom-3 md:bottom-6 lg:bottom-8 left-2 md:left-6 lg:left-8 bg-slate-900 bg-opacity-30 py-2 px-4 rounded-xl font-poppins':
            {},
        },
        '.btn-white': {
          '@apply font-poppins font-medium uppercase text-base md:text-base lg:text-xl px-6 py-3 border-2 rounded-xl bg-white text-white bg-opacity-15 hover:bg-opacity-30 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110':
            {},
        },
        '.textfield': {
          '@apply bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500':
            {},
        },
      });
    }),
  ],
};
