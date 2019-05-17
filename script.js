const sentBtn = document.querySelector("#sentBtn");
const inputMsg = document.querySelector("#messageIn");
const messageOut = document.querySelector("#messageOut");

sentBtn.addEventListener("click", passingMsg);

function passingMsg() {
    let msg = inputMsg.value;
    if(msg == "") {
        alert("Field can not be empty");
    } else{
        messageOut.innerHTML = msg;
        inputMsg.value = "";
    } 
    
}