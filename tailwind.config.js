/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation: {
        'rotate': 'rotating 50s linear infinite',
      },
      keyframes: {
        rotating: {
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}

