'use strict';

const secret = "hoogity911boogity";
const jwt = require('jsonwebtoken');

function createToken(user) {
  let scope = "user ";
  // Check if the user object passed in
  // has admin set to true, and if so, set
  // scopes to admin
  let permissions = ["user"];
  // Sign the JWT
  return jwt.sign(
    {
      sub: user._id,
      name: user.name,
      scope: scope
    },
    secret,
    {
      algorithm: 'HS256',
      expiresIn: '1h'
    }
  );
}

module.exports = createToken;