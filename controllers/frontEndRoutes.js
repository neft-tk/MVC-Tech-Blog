const express = require('express');
const router = express.Router();
const {User,Blog} = require('../models');

router.get("/", async (req,res)=>{
        try {
          const dbBlogData = await Blog.findAll({});
      
          const blogs = dbBlogData.map((blog) =>
            blog.get({ plain: true })
          );
      
          res.render('home', {
            blogs,
          });
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
});

router.get("/home", (req,res) => {
  if(!req.session.userInfo){
    return res.redirect("/login")
}
  Blog.findAll().then(blogData => {
    res.render("home", blogData)    
  }).catch((err) => {
    res.status(500).json({msg:"an error occured", err})
})
})

router.get("/login", (req,res) => {
  res.render("login")
})


router.get("/profile",(req,res)=>{
    if(!req.session.userInfo){
        return res.redirect("/login")
    }
    User.findByPk(req.session.userInfo.id,{
        include:[Blog]
    }).then(userData=>{
        const plainData = userData.get({plain:true})
        console.log(plainData)
       res.render("profile",plainData);
    }).catch(err=>{
        res.status(500).json({msg:"error occurred",err})
    })
})

module.exports = router;