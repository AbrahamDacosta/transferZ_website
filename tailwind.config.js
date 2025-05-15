// tailwind.config.js
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          primary: '#061A40',      // bleu nuit
          accent: '#F97316',       // orange vif
          light: '#FAFAFA'         // blanc cassé
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif']
        }
      },
    },
    plugins: [],
  }
  