/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        'accent': '#21918c',
        'secondary': '#64748b',
        'dark': '#27272a',
        'terc': '#d9d9d9',
      },
      fontFamily: {
        title: "var(--font-title)",
        body: "var(--font-body)",
      },
    },
  },
  plugins: [],
}

