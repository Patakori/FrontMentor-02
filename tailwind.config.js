module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor:{
        "bOrange": "hsl(31, 77%, 52%)",
        "dCyan" : "hsl(184, 100%, 22%)",
        "vDarkCyan" : "hsl(179, 100%, 13%)",
        "vLightGray" : "hsl(0, 0%, 95%)",
      },
      fontFamily:{
        "LexendDeca": ["Lexend Deca", "sans-serif"],
        "BigShouldersDisplay" : ["Big Shoulders Display", "sans-serif"]
      },
      fontSize:{
        "15px": "15px",
        "25px": "23px",
      },
      screens: {
       'desk': '1440px',
     },
     height: {
      "500px": "500px",
     },
     textColor:{
      "vLightGray": "hsl(0, 0%, 95%)",
      "tWhite": "hsla(0, 0%, 100%, 0.75)",
      "bOrange": "hsl(31, 77%, 52%)",
      "dCyan" : "hsl(184, 100%, 22%)",
      "vDarkCyan" : "hsl(179, 100%, 13%)",
     },
     borderRadius: {
       "30px": "30px",
       "50px": "50px",
     },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
