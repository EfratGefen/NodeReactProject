const express=require('express');
const router=express.Router();
const Users=require('../models/user');
const {addUser,getAllUsers}=require('../controllers/user');
router.post('/',addUser);
router.get('/',getAllUsers);
module.exports=router;