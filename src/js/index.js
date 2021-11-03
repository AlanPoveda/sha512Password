const inputUser = document.getElementById("inputValue")
const response = document.getElementById("response")

function encrypt(){
    response.innerHTML = `Password created`
    setTimeout(()=>{
        response.innerHTML = ``
    },6000)
}

function copyText(){
    navigator.clipboard.writeText(SHA512(inputUser.value));
}