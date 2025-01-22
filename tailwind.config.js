/** @type {import('tailwindcss').Config} */
    module.exports = {
      darkMode: ["class"],
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        container: {
          center: true,
          padding: "2rem",
          screens: {
            "2xl": "1400px",
          },
        },
        extend: {
          colors: {
            primary: {
              DEFAULT: "#6366f1",
              foreground: "#ffffff",
            },
            secondary: {
              DEFAULT: "#f4f4f5",
              foreground: "#18181b",
            },
          },
        },
      },
      plugins: [require("tailwindcss-animate")],
    }
