import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    build: {
      postcss: {
        postcssOptions: {
          plugins: {
            tailwindcss: {},
            autoprefixer: {},
          },
        },
      },
    },
  
    css: [
      "~/assets/css/tailwind.css"
    ],

    app: {
      head: {
        meta: [
          // <meta name="viewport" content="width=device-width, initial-scale=1">
          
        ],
        script: [
        
          { src: '/js/vendor/jquary.min.js' ,body: true },
   { src: '/js/main.js' ,body: true },
        ],
        
        link: [
          { rel: 'stylesheet', href: '/css/tailwind.css' },
          { rel: 'stylesheet', href: '/css/custom.css' },
        
              ],
       
        noscript: [
          // <noscript>JavaScript is required</noscript>
          { children: 'JavaScript is required' }
        ]
      }
    },
  
    
  })