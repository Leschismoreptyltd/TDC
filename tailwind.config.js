const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      
      "mobile": {"max": "639px"},
      "tablet": {"min":"640px", "max":"1023px"},
      "desktop": {"min": "1080px", "max":"1399px"},
      "highRes": {"min":"1400px"},
    },
    extend: {
      fontFamily: {
        bebasNeue: ["Bebas Neue", "sans-serif"],
        danfo: ["Danfo", "sans-serif"],
        alfaSlabOne: ["Alfa Slab One", "sans-serif"]
        // Add more custom font families as needed
      }
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.15em',
    }
  },
  plugins: [],
});

