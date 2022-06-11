module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/view/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'sm': '300px',
      'md': '480px',
      'lg': '769px',
      'xl': '1025px',
    },
    extend: {
      colors:{
        'twitter-primary':'rgb(29, 155, 240)',
        'twitter-primary-dark':'rgb(47, 51, 54)',
        'twitter-secondary':'rgb(29, 155, 240)',
        'twitter-secondary-dark':'rgb(83, 100, 113)',
        'twitter-light-gray':'rgb(231, 233, 234)',
      },
      animation:{
      },
      keyframes:{
      },
    }
  },
  plugins: [],
}
