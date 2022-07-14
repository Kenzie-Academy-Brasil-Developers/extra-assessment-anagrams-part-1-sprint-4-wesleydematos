let body = document.querySelector('body')
let h1 = document.createElement('h1')
h1.innerHTML = "Anagramas"
body.appendChild(h1)
let div = document.createElement("div")
let inputHtml = document.createElement("input")
inputHtml.type = "text"
inputHtml.id = "input"
let button = document.createElement("button")
button.id = "findButton"
button.innerText = "Encontrar Anagramas"
div.append(inputHtml, button)
let p = document.createElement("p")
body.append(div, p)

button.addEventListener("click", function () {
        let typedText = document.getElementById("input").value;
        getAnagramsOf(typedText)
});

function getAnagramsOf(input){ 
    let inputAlterado = alphabetize(input)
    let arrayStrings = []

    for(let j = 0; j < palavras.length; j++){
    let palavraAlterada = alphabetize(palavras[j])
    if(inputAlterado == palavraAlterada){
        arrayStrings.push(palavras[j])
    }
    }
    for(let i = 0; i < arrayStrings.length; i++){
        p.innerText = `${arrayStrings.join(" ")}`
    }
    
}



function alphabetize(string) {
    return string.toLowerCase().split("").sort().join("").trim(); 
}

