const input = document.querySelector('.int');
const btn = document.querySelector(".btn");
const display = document.querySelector(".display");


btn.addEventListener("click", () => {
    const inputWord = input.value
    const inputText = inputWord.split("").reverse("").join("")
    if(inputText === inputWord ){
        display.innerHTML = `Yayyy, ${inputWord} is a Palindrome. Good Job`

    }else{
        display.innerHTML = `Sorry, ${inputWord}  is not a Palindrome. Try Again`
    }
})