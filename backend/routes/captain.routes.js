const express=require('express');
const router=express.Router();
const {body}=require('express-validator');
const captainController=require('../controllers/captain.controller');


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

module.exports=router;