//setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
  app.use(
    '/api',
    createProxyMiddleware( 
      {
      target: 'http://3.39.153.128:8080',
      pathRewrite: {
        '^/api':''
      },
      changeOrigin: true,
    })
  )
};