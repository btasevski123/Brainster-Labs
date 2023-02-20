const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const company = document.getElementById('company');
const phone = document.getElementById('phone');



form.addEventListener('submit', e => {
    
     validateInputs();
    
     let allBoxes = document.querySelectorAll("#form .box");
 
    allBoxes.forEach(b => {
      
        if (b.classList.contains("error")) {
            e.preventDefault()
        
        }
    });


    
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const companyValue = company.value.trim();
    const phoneValue = phone.value.trim();
    
   
    

    
    

    if(usernameValue === '') {
        setError(username, '*Ова поле е задолжително');
    } else {
        setSuccess(username);
    }

    if(companyValue === '') {
        setError(company, '*Ова поле е задолжително');
    } else {
        setSuccess(company);
    }

    if(emailValue === '') {
        setError(email, '*Внеси емаил адреса');
    } else if (!isValidEmail(emailValue)) {
        setError(email, '*Внеси валидна емаил адреса');
    } else {
        setSuccess(email);
    }

    if(phoneValue === '') {
        setError(phone, '*Ова поле е задолжително');
    } else {
        setSuccess(phone);
    }

   
    }