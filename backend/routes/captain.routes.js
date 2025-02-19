const express=require('express');
const router=express.Router();
const {body}=require('express-validator');
const captainController=require('../controllers/captain.controller');
const authMiddleware=require('../middlewares/auth.middlewares');


router.post('/register',[
   body('email').isEmail().withMessage('Invalid email format'),
    body('fullname.firstname')
        .isString()
        .isLength({min:3})
        .withMessage('First name must be at least 3 characters long'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),
    body('vechicle.color').isLength({min:3}).withMessage('Color must be at least 3 characters long'),
    body('vechicle.plate').isLength({min:4}).withMessage('Plate must be at least 4 characters long'),
    body('vechicle.capacity').isLength({min:1}).withMessage('Capacity must be at least 1 characters long'),
    body('vechicle.vechicleType').isIn(['car','motorcycle','auto']).withMessage('Invalid Vechicle type '),


],
  captainController.registerCaptain
);
router.post('/login',[
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),
],captainController.loginCaptain);

router.get('/profile',authMiddleware.authCaptain,captainController.getCaptainProfile);
router.get('/logout',authMiddleware.authCaptain,captainController.logoutCaptain);

module.exports=router;