const proxy = [
  {
    context: '/core',
    target: 'http://localhost:6001/core',
    pathRewrite: {'^/core' : ''},
    changeOrigin: true
  }
];

module.exports = proxy;
