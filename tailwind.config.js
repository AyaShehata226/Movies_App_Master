 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js}" ,
    "./**/*.{html,js}", 
  ],
  theme: {
    extend: {
      colors:{
        'main-color': '#ff2c1f',
        'text-color': '#020307',
        'bg-color': '#fff',
      },
      screens:{
        'custom-lg':'1080px',
        'custom-xmd':'991px',
        'custom-md':'774px',
        'custom-xsm':'472px',
        'custom-sm':'370px',
        'custom-xxs':'300px',
      }
    },
  },
  plugins: [],
}