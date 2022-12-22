const pwInput = document.querySelector('#password');
const userInput = document.querySelector('#username');
const signInButton = document.querySelector('#signInButton');

function onSigninPressed(e){
    e.preventDefault();
    const pw = pwInput.value;
    const username = userInput.value;

    if (!pw || !username){
        return;
    }

    fetch("/api/users/login", {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username:username,
            password:pw
        })
    }).then(response=>{
        if (response.ok){
            document.location.replace('/dashboard');
            return null;
        }
        return response.json();
    }).then(data=>{
        if (data){
            alert(data.message);
        }

    });
}

signInButton.addEventListener("click", onSigninPressed);