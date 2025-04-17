let successBtn = document.querySelector(`#success-btn`);
let errorBtn = document.querySelector(`#error-btn`);
let invalidBtn = document.querySelector('#invalid-btn');
let outputBox = document.querySelector(`.output`);
let displayBox = document.querySelector(`.display`);

successBtn.addEventListener(`click`,()=>{
    let toast=document.createElement("div");
    toast.classList.add("success-toast");
    toast.innerHTML="Successfully Done";
    displayBox.appendChild(toast);
    setTimeout(() => {
        displayBox.removeChild(toast);
    }, 5000);
})
errorBtn.addEventListener(`click`,()=>{
    let toast=document.createElement("div");
    toast.classList.add("error-toast");
    toast.innerHTML="Some Error,Try Later";
    displayBox.appendChild(toast);
    setTimeout(() => {
        displayBox.removeChild(toast);
    }, 5000);
})
invalidBtn.addEventListener(`click`,()=>{
    let toast=document.createElement("div");
    toast.classList.add("invalid-toast");
    toast.innerHTML="Invalid Input !";
    displayBox.appendChild(toast);
    setTimeout(() => {
        displayBox.removeChild(toast);
    }, 5000);
})