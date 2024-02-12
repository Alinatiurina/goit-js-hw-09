const form = document.querySelector(".feedback-form");
const StorageKey = "feedback-form-state";

function readFormData(form){
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    return {
        email,
        message
    }
}

form.addEventListener('input', (event) => {
    const data = readFormData(event.currentTarget);
    const jsonData = JSON.stringify(data);
    localStorage.setItem(StorageKey, jsonData);
})

const newData = localStorage.getItem(StorageKey);

if (newData){
    const data = JSON.parse(newData);
    form.email.value = data.email;
    form.message.value = data.message;
}

form.addEventListener('submit', (event) => {
    const submitData = localStorage.getItem(StorageKey);
    const data = JSON.parse(submitData);
    
    if (data.email === "" || data.message === "") {
        alert ('All form fields must be filled in')
    }
     else {
         
    console.log(data);

    event.preventDefault();
    form.reset();
    localStorage.removeItem(StorageKey);
     }
 
})