const loginForm = document.querySelector("#loginForm");
loginForm.addEventListener("submit",e=>{

    const userObj = {
        email:document.querySelector("#email_login").value,
        password:document.querySelector("#password_login").value,
    }
    fetch("/api/users/login",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           window.location.replace('/home')        
        } else {
            alert("trumpet sound")
        }
    })
})

// const signupForm = document.querySelector("#signup");
// signupForm.addEventListener("submit",e=>{
//     e.preventDefault();
//     console.log('PREVENTED DEFAULT!')
//     const userObj = {
//         email:document.querySelector("#signupEmail").value,
//         name:document.querySelector("#signupName").value,
//         password:document.querySelector("#signupPassword").value,
//     }
//     fetch("/api/users/",{
//         method:"POST",
//         body:JSON.stringify(userObj),
//         headers:{
//             "Content-Type":"application/json"
//         }
//     }).then(res=>{
//         if(res.ok){
//            location.reload()
//         } else {
//             alert("trumpet sound")
//         }
//     })
// })