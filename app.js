const inputs = document.querySelectorAll(".input");

function focusFunC(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunC(){
    let parent = this.parentNode;
    if (this.value == ""){
        parent.classList.remove("focus");
    }
}

inputs.forEach(input => {
    input.addEventListener("focus", focusFunC);
    input.addEventListener("blur", blurFunC)
});