let sendButton = document.getElementById("sendButton");
let nameInput = document.getElementById("nameInput");
let emailInput = document.getElementById("emailInput");

sendButton.addEventListener('click', ()=>{
    if (nameInput.value != "" && emailInput.value != ""){
        alert("Your message was sent correctly.")
        nameInput.innerHTML="";
        emailInput.innerHTML="";
    }else{
        alert("Your message couldn't have been sent because of some errors.")
    }
})