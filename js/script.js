// Loader
window.addEventListener('load', function(){
    this.document.querySelector('.preloader').classList.add('opacity-0');
    setTimeout(function(){
        document.querySelector('.preloader').style.display='none';
    },1000);
});
// Fim Loader

// Cartão

const form = document.querySelector("#credit-card");

const cardNumber = document.querySelector("#card-number");
const cardHolder = document.querySelector("#name-text");
const cardExpiration = document.querySelector("#valid-thru-text");
const cardCVC = document.querySelector("#cvc-text");

const cardNumberText = document.querySelector(".number-v1");
const cardHolderText = document.querySelector(".name-v1");
const cardExpirationText = document.querySelector(".expiration-v1");
const cardCVCText = document.querySelector(".cvc-v1");

cardNumber.addEventListener("keyup", (e) => {
    if(!e.target.value) {
        cardNumberText.innerText = "1234 5678 9101 1121";
    } else {
        const valuesOfInput = e.target.value.replaceAll(" ","");
        if (e.target.value.length > 14) {
            e.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
            cardNumberText.innerHTML = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
        } else if (e.target.value.length > 9) {
            e.target.value = valuesOfInput.valuesOfInput.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
            cardNumberText.innerHTML = valuesOfInput.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
        } else if (e.target.value.length > 4) {
            e.target.value = valuesOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2");
            cardNumberText.innerHTML = valuesOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2");
        } else {
            cardNumberText.innerHTML = valuesOfInput;
        }
    }
});

cardHolder.addEventListener("keyup", (e) => {
    if (!e.target.value) {
        cardHolderText.innerHTML = "Lorem Ipsum";
    } else {
        cardHolderText.innerHTML = e.target.value.toUpperCase();
    }
});

cardExpiration.addEventListener("keyup", (e) => {
    if (!e.target.value) {
        cardExpirationText.innerHTML = "01/11"
    } else {
        const valuesOfInput = e.target.value.replace("/", "");

        if(e.target.value.length > 2){
            e.target.value = valuesOfInput.replace(/^(\d{2})(\d{0,2})/, "$1/$2");
            cardExpirationText.innerHTML = valuesOfInput.replace(/^(\d{2})(\d{0,2})/, "$1/$2");
        } else {
            cardExpirationText.innerHTML = valuesOfInput;
        }
    }
});

cardCVC.addEventListener("keyup", (e) => {
    if (!e.target.value) {
        cardCVCText.innerHTML = "123";
    } else{
        cardCVCText.innerHTML = e.target.value;
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Credit Card Added!");
});

// Fim Cartão