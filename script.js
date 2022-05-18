const input = document.querySelector('.int');
const btn = document.querySelector(".btn");
const display = document.querySelector(".display");


btn.addEventListener("click", () => {
    const a = input.value
    const spl = a.split("").reverse("").join("")
    if(spl === a ){
        display.innerHTML = `Yayyy, ${a} is a Palindrome. Good Job`

    }else{
        display.innerHTML = `Sorry, ${a}  is not a Palindrome. Try Again`
    }
})