/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1280',
      '2xl': '1440px',
      'sm-only': { min: '480px', max: '767px' },
    },
    extend: {
      colors: {
        mgLight: {
          primary: '#E76E50',
          secondary: '#F4A462',
          accent: '#274754',
          neutral: '#1D1E25',
          'base-100': '#FDF0ED', //96
          // 'base-100': '#FCECE9',  //95
          info: '#277CA0',
          success: '#2A9D90',
          warning: '#E8C468',
          error: '#E71D34',
        },
        neutralDrkBB: 'hsl(204, 100%, 5%)',
        primaryDarker: 'hsl(12, 88%, 59%)',
      },
    },
  },
  plugins: [],
};
