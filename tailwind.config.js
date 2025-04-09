/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "menu-close": "url('../public/close-menu.svg')",
        "menu-open": "url('../public/open-menu.svg')",
        javascript: "url('../public/front/javascript.png')",
        html: "url('../public/front/html.png')",
        css: "url('../public/front/css.png')",
        react: "url('../public/front/react.png')",
        reactnative: "url('../public/front/reactnative.png')",
        redux: "url('../public/front/redux.png')",
        next: "url('../public/front/next.png')",
        tailwind: "url('../public/front/tailwind.png')",
        reactquery: "url('../public/front/reactquery.svg')",
        node: "url('../public/back/node.webp')",
        express: "url('../public/back/express.webp')",
        postgresql: "url('../public/back/postgresql.webp')",
        sequelize: "url('../public/back/sequelize.webp')",
        sql: "url('../public/back/sql.webp')",
        firebase: "url('../public/back/firebase.webp')",
        github: "url('../public/herramientas/github.webp')",
        proyecto1: "url('../public/proyecto1.webp')",
        pokemon: "url('../public/pokemon.jpg')",
      },
      backgroundColor: {
        metalicGrey: "#222831"
      },
      fontFamily:{
        mainHeader: "",
      }
    },
  },
  plugins: [],
};
