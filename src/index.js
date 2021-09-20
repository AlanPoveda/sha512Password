const inputUser = document.getElementById("inputValue")
const response = document.getElementById("response")

function encrypt(){
    response.innerHTML = `${SHA512(inputUser.value)}`
}
