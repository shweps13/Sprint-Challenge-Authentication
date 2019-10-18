const Auth = require('./auth-model.js');
const db = require('../database/dbConfig.js');

it('should set testing environment', () => {
    // console.log(process.env.DB_ENV);
    expect(process.env.DB_ENV).toBe("testing");
});