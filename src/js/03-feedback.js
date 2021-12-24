import throttle from 'lodash.throttle';
const refs = {
    feedbackForm: document.querySelector('.feedback-form'),
    textArea: document.querySelector('textarea'),
    input: document.querySelector('input')
}


let buffer = localStorage.getItem("feedback-form-state");
if (buffer) {
    buffer = JSON.parse(buffer);
    if (buffer.email) { refs.input.value = buffer.email; }
    if (buffer.message) { refs.textArea.value = buffer.message; }
} else { buffer = {}; }


function onInputType(e) {
    buffer[e.target.name] = e.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(buffer));

}

function onfeedbackFormSubmit(e) {
    e.preventDefault();
    console.log(buffer);
    e.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
    buffer = {};
}

refs.feedbackForm.addEventListener('submit', onfeedbackFormSubmit);
refs.textArea.addEventListener('input', throttle(onInputType, 500));
refs.input.addEventListener('input', throttle(onInputType, 500));



