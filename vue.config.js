module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/hexagon-coffee-factory/' // hexagon-coffee-factory為 repo 名稱
    : '/'
}