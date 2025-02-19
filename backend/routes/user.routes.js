const express = require('express');
const { body } = require('express-validator');
const userController = require('../controllers/user.controller'); 
const authMiddleware = require('../middlewares/auth.middlewares');
const router = express.Router();

router.post(
  '/register',
  [
    body('email').isEmail().withMessage('Invalid email format'),
    body('fullname.firstname')
      .isString()
      .isLength({ min: 3 })
      .withMessage('First name must be at least 3 characters long'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long'),
  ],
  userController.registerUser
);
router.post('/login',[
  body('email').isEmail().withMessage('Invalid email format'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
],userController.loginUser);

router.get('/profile',authMiddleware.authUser,userController.getUserProfile);


module.exports = router;
