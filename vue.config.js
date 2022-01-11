// const publicPath = process.env.NODE_ENV === 'production' ? '/vue-cv/' : '/'
// module.exports = {
//  publicPath: publicPath,
// }

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/Cv_Adeline/'
      : '/'
  }