const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://phone-store-fullstack.onrender.com/api',
      changeOrigin: true,
    })
  );
};