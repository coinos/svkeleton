const twConf = {
  mode: 'jit',
  purge: [
    "./src/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    screens: {
      'mn' : '0px', 
      'xs' : '560px', 
      'sm' : '970px',
      'md' : '1008px',
      'lg' : '1240px'
    }, 
    extend: {
      letterSpacing: {
        '0.72p' : '0.72px',
        '1.5p' : '1.5px'
      },
      fontSize: {
        '1r': '1rem;',
        '1.35r' : '1.35rem',
        '1.4r' : '1.4rem'
      },      
      colors: {
        dullgray: "#333",
        dullblue: "#171a1f",
        darkgray: "#111316",
        puter : "#1d2227", 
        sky: "#00c3ff",
      }, 
      scale : {
        '20': '.20',
        '70': '.70',
        '80': '.80'
      },
      borderWidth : {
        '3': '3px',
      }
    } 
  },
  plugins: [],
}

module.exports = twConf