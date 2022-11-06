const express = require('express');
const router = express.Router();
const {User, Blog, Comment} = require('../models');

// GETs all blogs and their comments
router.get("/",(req,res)=>{
    Blog.findAll({
        // include:[Comment]
    }).then(blogData=>{
        res.json(blogData)
    }).catch(err=>{
        res.status(500).json({msg:"an error occurred",err})
    })
})

// POST a specific blog and the comments
router.post("/", (req, res) => {
    if(!req.session.userInfo){
        return res.status(403).json({msg:"Login first please."})
    }
    Blog.create({
        title:req.body.title,
        body:req.body.body
    }).then(blogData =>{
        res.json(blogData)
    }).catch(err => {
        res.status(500).json({msg:"An error occured",err})
    })
})


module.exports=router;
