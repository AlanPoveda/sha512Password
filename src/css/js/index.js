const inputUser = document.getElementById("inputValue")
const response = document.getElementById("response")

function encrypt(){
    response.innerHTML = `<h1>${SHA512(inputUser.value)}</h1>`
}
