const sequelize = require("../config/connection");
const {User, Blog} = require("../models/");
// const blogData = require('./blog-seeds.json');


const seed = async ()=> {
    await sequelize.sync({force:true});
    const users = await User.bulkCreate([
        {
            email:"joe@joe.joe",
            password:"password"
        },
        {
            email:"lindsay@joe.joe",
            password:"password1"
        },
        {
            email:"henry@joe.joe",
            password:"password1!"
        }
    ],{
        individualHooks:true
    })

    // const blogs = await Blog.bulkCreate(blogData, {
    //     individualHooks: true,
    //     returning: true,
    //   });

    console.log("seeded!")
    process.exit(0)
}

seed();