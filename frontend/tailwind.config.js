module.exports = {
  important: true,
  // Active dark mode on class basis
  darkMode: "class",
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'ysosb': "url('./images/y-so-serious.png')",
        'ysosw': "url('./images/y-so-serious-white.png')",
      })
    }
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      backgroundImage: ["dark"],
      borderColor: ["checked"],
      inset: ["checked"],
      zIndex: ["hover", "active"],
      translate: ['checked']
    },
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
  },
};
