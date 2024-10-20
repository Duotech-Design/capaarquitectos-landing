/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGray: "#303030",
        lightGray: "#B2B6BB",
        lightBeige: "#EDEADB",
        darkBlue: "#213444",
      },
      backgroundImage: {
        "member-cofundador":
          "url('https://pagedone.io/asset/uploads/1696238374.png')",
        "contactUs-bg": "url('src/assets/img/contact-us-bg.webp')",
        "home-bg": "url('src/assets/img/home-bg.webp')",
        "home-bg-crop": "url('src/assets/img/home-bg-crop.webp')",
        "custom-img":
          "url('https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp')",
        "philosophy-bg": "url('/src/assets/img/philosophy.jpg')",
      },
      fontFamily: {
        cocoUltralight: ["coco-ultralight", "sans-serif"],
        cocoGrdient: ["coco-gradient", "sans-serif"],
        cocoBorder: ["coco-border", "sans-serif"],
      },
    },
  },
  plugins: [],
};
