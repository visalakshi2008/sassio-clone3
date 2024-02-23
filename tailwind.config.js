/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'wave1': "url('/src/assests/wave2.png')",
        'wave2': "url('/src/assests/wave3.png')",
        'wave3': "url('/src/assests/wave4.png')",
        'wave4': "url('/src/assests/wave5.png')",
        'wavee': "url('/src/assests/wavee.png')",
        'secondbg-bg': "url('/src/assests/Section.png')",
        'color': "linear-gradient(90deg, rgba(193,45,209,1) 0%, rgba(109,140,248,1) 100%)",
        'sec3background': "url('/src/assests/secbg.png')",
        'numbersbg': "url('/src/assests/numbersbg.png')",
        'datesecbg': "url('/src/assests/datesecbg.png')",
        'downloadbg': "url('/src/assests/dowloadbg.png')",
        "zoombg":"url('/src/assests/zoombag.jpg')",
        "footerbg":"url('/src/assests/footersection.png')"
        
      },
      colors: {
        'regal-blue': '#243c5a',
        'color': 'linear-gradient(90deg, rgba(193,45,209,1) 0%, rgba(109,140,248,1) 100%)',
      },
    },
  },
  plugins: [
    // function ({ addUtilities }) {
    //   const newUtilities = {
    //     ".scrollbar-thin": {
    //       scrollbarWidth: "thin",
    //       "&::-webkit-scrollbar": {
    //         width: "8px",
    //       },
    //       "&::-webkit-scrollbar-track": {
    //         background: "red",
    //       },
    //       "&::-webkit-scrollbar-thumb": {
    //         backgroundColor: "red",
    //         borderRadius: "20px",
    //         border: "1px solid white",
    //       },
    //     },
    //   };

    //   addUtilities(newUtilities, ['responsive', 'hover']);
    // },
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};
