let input = document.getElementsByTagName("input");
let submitForm = document.getElementById("submit");
let errorMsg = document.getElementsByClassName("error");
let Lable = document.getElementsByTagName("label");

// console.log(submitForm);
// console.log(input);
console.log(errorMsg);
console.log(Lable);

function submit(event){
    for (let i= 0; i <input.length; i++){
        if (input[i].value == ""){
            // console.log("form is prevented");
            errorMsg[i].innerHTML = "* " + Lable[i].innerText + " is requird"; 
            event.preventDefault();
        }
        else{
            errorMsg[i].innerHTML = "";
        }
    }
}


submitForm.addEventListener("click", submit);
