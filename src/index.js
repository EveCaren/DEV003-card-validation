import validator from './validator.js';

// console.log(validator);


//Elementos del DOM
const name = document.getElementById("cardHolderName");
const emailUser = document.getElementById("email");
const numberCard = document.getElementById("cardNumber");
const ccCvv = document.getElementById("cardCvv");
const btnCheck = document.getElementById("pay");

const errorNumber = document.querySelector(".form__inputNumber--error")
const errorCvv = document.querySelector(".form__input-cvv--error")

const view1 = document.getElementById("main-container");
const errorMsg = document.getElementById("sorry");
const validMsg= document.getElementById("validCard");

//Input número de tarjeta
numberCard.addEventListener("input", event => {
  const cardValue = event.target.value;
  // Mostrar error al ingresar letras
  const regExp = /[A-z]/g;
  if (regExp.test(numberCard.value)) {
    showError(numberCard, errorNumber, "Error de formato. Solo números.");
    // errorNumber.innerHTML ="Error de formato. Solo números";
    errorNumber.style.color = "red";
  }
  else{
    // No reconoce espacios
    numberCard.value = cardValue.replace(/\s/g, "");
    showError(numberCard, errorNumber, "", false);
  }
});
//

// CVV: Error de datos ingresados en el input
ccCvv.addEventListener("input", function (){
  const regExp = /[A-z]/g;
  if (regExp.test(ccCvv.value)) {
    showError(ccCvv, errorCvv, "Error. Solo números.");
    errorCvv.style.color = "red";
  }
  else{
    showError(ccCvv, errorCvv, "", false);
  }
});

// Función para los bordes INPUTS si es que cumple o no la condición
function showError(divInput, divError, msgError, show = true){
  if(show) {
    divError.innerHTML = msgError;
    divInput.style.borderColor = "red";
  }
  else{
    divError.innerHTML = msgError;
    divInput.style.borderColor = "black";
  }
}

btnCheck.addEventListener("click", (e) => {
  e.preventDefault();
  const mascara = validator.maskify(numberCard.value);
  if (validator.isValid(numberCard.value)) {
    // alert("Tu tarjeta " + mascara + " es válida.");
    view1.style.display = "none";
    validMsg.style.display= "block";

    document.getElementById("printName").innerHTML = "Nombre : " + name.value;
    document.getElementById("printNumber").innerHTML = "Número de tarjeta : " + mascara;
    document.getElementById("printEmail").innerHTML = "Correo : " + emailUser.value;
  } 
  else {
    // alert("Hubo un error, por favor revisar datos ingresados")
    view1.style.display = "none";
    errorMsg.style.display = "block";
  }
});

// evento del boton volver
const back = document.getElementById("buttonReturn");
back.addEventListener("click", function() {
  location.reload();
});

// evento del botón volver a inicio
const comeHome = document.getElementById("buttonBack");
comeHome.addEventListener("click", function() {
  location.reload();
})
