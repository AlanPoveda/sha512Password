const inputUser = document.getElementById("inputValue")
const response = document.getElementById("response")

function encrypt(){
    response.innerHTML = `Password created`
}

function copyText(){
    navigator.clipboard.writeText(SHA512(inputUser.value));
}