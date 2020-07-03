const app = require('../../src/app');

describe('\'credits\' service', () => {
  it('registered the service', () => {
    const service = app.service('credits');
    expect(service).toBeTruthy();
  });
});
