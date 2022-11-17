const pwd = document.getElementById('pwd');

const pwdc = document.getElementById('pwdc');

const form = document.getElementById('form');

pwdc.addEventListener('input', (e)=>{
    console.log(pwd.value)
    if(pwdc.value != pwd.value){
        pwdc.setCustomValidity("The passwords don't match");
        pwdc.reportValidity();
    }else{
        pwdc.setCustomValidity("")
    }
})

console.log(pwd.value)