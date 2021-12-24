module.exports = {
  mode: 'jit',
  prefix: '',
  purge: {
    corePlugins: {
      preflight: false,
    },
    enabled: true,
    content: ['./src/**/*.{html,ts}'],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
