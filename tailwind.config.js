/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'float':        'float 6s ease-in-out infinite',
        'float-slow':   'float 9s ease-in-out infinite',
        'float-fast':   'float 4s ease-in-out infinite',
        'float-delay':  'float 6s ease-in-out 1.5s infinite',
        'float-delay2': 'float 7s ease-in-out 3s infinite',
        'pulse-glow':   'pulseGlow 3s ease-in-out infinite',
        'spin-slow':    'spin 20s linear infinite',
        'orbit':        'orbit 12s linear infinite',
        'orbit-rev':    'orbit 18s linear infinite reverse',
        'flicker':      'flicker 4s ease-in-out infinite',
        'slide-up':     'slideUp 0.8s ease forwards',
        'blob-morph':   'blobMorph 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotateX(0deg)' },
          '50%':      { transform: 'translateY(-22px) rotateX(3deg)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(124,58,237,0.4), 0 0 60px rgba(124,58,237,0.15)' },
          '50%':      { boxShadow: '0 0 40px rgba(124,58,237,0.8), 0 0 100px rgba(124,58,237,0.3)' },
        },
        orbit: {
          '0%':   { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' },
        },
        flicker: {
          '0%, 100%': { opacity: 1 },
          '50%':      { opacity: 0.6 },
        },
        slideUp: {
          from: { opacity: 0, transform: 'translateY(30px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        },
        blobMorph: {
          '0%, 100%': { borderRadius: '50% 50% 50% 50% / 40% 40% 60% 60%' },
          '25%':      { borderRadius: '60% 40% 55% 45% / 55% 45% 55% 45%' },
          '50%':      { borderRadius: '45% 55% 40% 60% / 50% 60% 40% 50%' },
          '75%':      { borderRadius: '55% 45% 60% 40% / 45% 55% 45% 55%' },
        },
      },
      perspective: {
        '500':  '500px',
        '800':  '800px',
        '1000': '1000px',
        '1200': '1200px',
      },
    },
  },
  plugins: [],
}
