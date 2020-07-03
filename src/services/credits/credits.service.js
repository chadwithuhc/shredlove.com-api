// Initializes the `credits` service on path `/credits`
const { Credits } = require('./credits.class');
const createModel = require('../../models/credits.model');
const hooks = require('./credits.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/credits', new Credits(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('credits');

  service.hooks(hooks);
};
