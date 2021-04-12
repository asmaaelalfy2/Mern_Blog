const express = require('express');

const router = express.Router();

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');
const config = require('config');


const auth=require('../middleware/auth');

const User = require('../models/User');

const { check, validationResult } = require('express-validator');

//@routes POST /api/users
//@desc Register user
//@access public

router.post(
  '/',

  [
    check('firstname', 'Please add firstname').not().isEmpty(),
    check('lastname', 'Please add lastname').not().isEmpty(),
    check('email', 'Please add a valid email').isEmail(),
    check('password', 'password should be more than 6 chars').isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, firstname, lastname, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: 'user already exists' });
      }
      user = new User({ firstname, lastname, email, password });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      user.save();

      
      const payload = {
        user: {
          id: user.id
        }
      };
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );

    } catch (err) {
      console.error(err.message);
      res.status(500).send('server error');
    }
  }
);

//@routes Get /api/users
//@desc  get all users
//@access private

router.get('/',async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.json({ message: err });
    }
});

//@routes   get/api/users/:userId
//@desc get specific user
//@access private

router.get('/:userId', async(req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        res.json(user);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
