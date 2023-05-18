module.exports = {
    purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
          backgroundColor: (theme) => ({
            dark: '#1f2937',
          }),
        },
      },
    variants: {
      extend: {},
    },
    plugins: [],
  };
  