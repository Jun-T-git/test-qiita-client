module.exports = {
  plugins: [
    'postcss-import',
    'tailwindcss',
    process.env.NODE_ENV === 'production'
      ? [
          '@fullhuman/postcss-purgecss',
          {
            content: [
              'src/pages/**/*.{js,jsx,ts,tsx}',
              'src/components/**/*.{js,jsx,ts,tsx}',
            ],
            defaultExtractor: (content) =>
              content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
            whitelistPatterns: [/slick*[^<>"'`\s:]*\w/],
            whitelistPatternsChildren: [/slick*[^<>"'`\s:]*\w/],
          },
        ]
      : undefined,
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
          grid: true,
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    ],
  ],
};
