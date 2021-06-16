module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
                @import '@/styles/breakpoints.scss';
                @import '@/styles/colors.scss';
          `,
      },
    },
  },
}
