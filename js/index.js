document.getElementById('btn-submit').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    if(email === "anikmollik122321@gmail.com" && password === "coc122321"){
        console.log("valid user")

    }else{
        console.log("not a valid user")
    }

})