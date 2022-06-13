module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/view/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'xs': '280px',
      'sm': '367px',
      'md': '480px',
      'md-2': '600px',
      'lg': '769px',
      'xl': '1025px',
    },
    extend: {
      colors:{
        'twitter-primary-light':'rgb(29, 155, 240)',
        'twitter-primary-dark':'rgb(47, 51, 54)',
        'twitter-primary-light-shade':'rgb(28, 148, 230)',
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
