const errorHandler = require('../middlewares/errorHandler');
const api = require('../routes/api');
module.exports = app => {
  app.use('/api', api)
  app.use(errorHandler)
}