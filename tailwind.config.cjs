/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        colors: {
          customGreen: 'rgb(8, 146, 100)',
        },
      },
    },
    plugins: [],
  }