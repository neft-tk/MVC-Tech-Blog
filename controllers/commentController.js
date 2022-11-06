const express = require('express');
const router = express.Router();
const {User, Blog, Comment} = require('../models');

// GETs all comments and their blogs
router.get("/",(req,res)=>{
    Comment.findAll({
        // include:[Comment]
    }).then(commentData=>{
        res.json(commentData)
    }).catch(err=>{
        res.status(500).json({msg:"an error occurred",err})
    })
})

// POST a specific comment
router.post("/", (req, res) => {
    if(!req.session.userInfo){
        return res.status(403).json({msg:"Login first please."})
    }
    Comment.create({
        title:req.body.title,
        body:req.body.body,
        UserId:req.session.userInfo.id
    }).then(commentData =>{
        res.json(commentData)
    }).catch(err => {
        res.status(500).json({msg:"An error occured",err})
    })
})


module.exports=router;
