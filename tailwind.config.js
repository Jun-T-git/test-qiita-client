module.exports = {
  theme: {
    screens: {
      xs: '425px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    aspectRatio: {
      none: 0,
      square: [1, 1],
      '1/2': [1, 2],
      '16/9': [16, 9],
      '4/3': [4, 3],
      '21/9': [21, 9],
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss-aspect-ratio'),
    require('tailwindcss-grid')({
      grids: [2, 3, 4, 5, 6, 8, 9, 10, 12],
      gaps: {
        0: '0',
        4: '1rem',
        8: '2rem',
        '4-x': '1rem',
        '4-y': '1rem',
      },
      autoMinWidths: {},
      variants: ['responsive'],
    }),
  ],
};
