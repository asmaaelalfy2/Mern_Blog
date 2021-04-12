const express = require('express');

const router = express.Router();

//@routes GET /api/users
//@desc logged in user
//@access private

router.get('/', (req, res) => {
  res.send('get log in user');
});

//@routes POSR /api/users
//@desc Auth users and get the token
//@access public

router.post('/', (req, res) => {
    res.send('login user');
  });
  


module.exports = router;
