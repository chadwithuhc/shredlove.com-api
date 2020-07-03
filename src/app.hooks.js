// Application hooks that run for every service

function disabledProdRequests(context) {
  if (!context.app.get('allowUpdates')) {
    throw new Error('Access Denied')
  }
}

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [ disabledProdRequests ],
    update: [ disabledProdRequests ],
    patch: [ disabledProdRequests ],
    remove: [ disabledProdRequests ]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
