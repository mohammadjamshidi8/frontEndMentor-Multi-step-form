/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        marineBlue: '#02295a',
        purplishBlue: '#473dff',
        pastelBlue: '#adbeff',
        lightBlue: '#bfe2fd',
        strawberry: '#ed3548',
        coolGray: '#9699ab',
        lightGray: '#d6d9e6',
        magnolia: '#f0f6ff',
        alabaster: '#fafbff',
      },
      fontFamily: {
        ubuntu: ['Ubuntu'],
      },
      backgroundImage: {
        'desktop': "url('./assets/images/bg-sidebar-desktop.svg')",
        'mobile': "url('./assets/images/bg-sidebar-mobile.svg')",
      }
    },
  },
  plugins: [],
}