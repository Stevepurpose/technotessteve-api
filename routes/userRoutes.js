const express=require('express')

const router=express.Router()

const userControls=require('../controllers/userControllers')



router.route('/')
       .get(userControls.getAllUsers)
       .post(userControls.createNewUser)
       .patch(userControls.updateUser)
       .delete(userControls.deleteUser)




module.exports=router