import { addUserMessage } from "../firebase/firebaseApp.js";

let form = document.getElementById('contact-form');
let formSubmitButton = document.getElementById('submitButton');
let loadingButton = document.getElementById('loadingButton');
let resultDisplay = document.getElementById('resultDisplay');

const sendMessage = async () => {
    try {
        const formValues = new FormData(form);
        const data = Object.fromEntries(formValues.entries());
        //firestore add message function
        const response = await addUserMessage(data);
        return response;
    } catch (error) {
        console.log(error)
    }
}

form.addEventListener('submit', async (event) => {
    event.preventDefault()
    formSubmitButton.classList.add('d-none')
    loadingButton.classList.remove('d-none')
    // send user message to firestore
    const result = await sendMessage();

    setTimeout(() => {
        formSubmitButton.classList.remove('d-none');
        loadingButton.classList.add('d-none')
        if (result) {
            resultDisplay.innerText = " Your message has been sended! "
            resultDisplay.classList.add('text-success');
        } else {
            resultDisplay.innerText = " Message not send, Error Occured! "
            resultDisplay.classList.add('text-danger');
        }

    }, 500)

})
console.log(FormData.length)