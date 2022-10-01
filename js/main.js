const firstName = document.querySelector(".section-container__form-first-name");
const lastName = document.querySelector(".section-container__form-last-name");
const email = document.querySelector(".section-container__form-email");
const password = document.querySelector(".section-container__form-password");

const firstNameError = document.querySelector("#firstNameError");
const lastNameError = document.querySelector("#lastNameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");

const button = document.getElementById("button")

button.addEventListener('click' , (e)=>{
    e.preventDefault();
    validateEmpty(firstName.value,  firstName, firstNameError, 'First Name cannot be empty');
    validateEmpty(lastName.value,  lastName, lastNameError, 'Last Name cannot be empty');
    validateEmail(email.value, email, emailError);
    validateEmpty(password.value,  password, passwordError, 'Password cannot be empty');
});

const validateEmail = (valueInput, divInput, divError) =>{
    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if(regExp.test(valueInput) == true){
        hidenError(divInput, divError)
    }else{
        showError(divInput, divError, 'looks like this is not an email')
    }
}

function validateEmpty(valueInput, divInput, divError, nameInput){
    console.log(valueInput);
    if(valueInput == 0){
        showError(divInput, divError, nameInput);
    }else{
        hidenError(divInput, divError);
    }
}

const showError = (divInput, divError, error) =>{
    divInput.style.border = '1px solid red';
    divError.innerHTML=
    `
    <img class="section-container__form-img" src="./images/icon-error.svg" alt="ico-error">
    <p class="section-container__form-first-name-validation">${error} </p>
    `;
}
const hidenError = (divInput, divError) =>{
    divInput.style.border = '1px solid hsl(246, 25%, 77%)';
    divError.innerHTML = '';

}