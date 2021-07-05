module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
                @import '@/styles/breakpoints.scss';
                @import '@/styles/colors.scss';
          `,
      },
    },
  },
}
