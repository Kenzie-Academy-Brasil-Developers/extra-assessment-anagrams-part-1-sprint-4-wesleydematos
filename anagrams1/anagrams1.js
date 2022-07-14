const button = document.getElementById("findButton");

//capturando evento de click no botão
    button.addEventListener("click", function () {
        let typedText = document.getElementById("input").value;
        getAnagramsOf(typedText);
});

//encontrar todas as palavras que fazem parte do anagrama
function getAnagramsOf(input){

}


//funcao pra organizar as letras alfabeticamente
function alphabetize(string) {
    return string.toLowerCase().split("").sort().join("").trim();
}