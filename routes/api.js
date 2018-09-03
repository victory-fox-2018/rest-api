const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.post('/signup', (req, res) => {
  userController.signUp(req, res)
});
router.post('/signin', (req, res) => {
  userController.signIn(req, res)
})

module.exports = router;