const refs = {
    feedbackForm: document.querySelector('.feedback-form'),
    textArea: document.querySelector('textarea'),
    input: document.querySelector('input')
}

let buffer = {};
function onInputType(e) {
    buffer[e.target.name] = e.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(buffer));

}
buffer = localStorage.getItem("feedback-form-state");
if (buffer) {
    buffer = JSON.parse(buffer);
    refs.input.value = buffer.email;
    refs.textArea.value = buffer.message;
}


refs.feedbackForm.addEventListener('input', onInputType);


