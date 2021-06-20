module.exports = {
  plugins:
    process.env.NODE_ENV === "production"
      ? {
          tailwindcss: {},
          autoprefixer: {},
          cssnano: {},
        }
      : {
          tailwindcss: {},
        },
};

// Command to build css files
// export NODE_ENV=production && postcss styles/globals.css -o tailwind.css
