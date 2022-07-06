import throttle from 'lodash.throttle';
const formFedEl = document.querySelector('.feedback-form');

let onDataForm = {};

const onElForm = () => {
  const savedMessage = localStorage.getItem('feedback-form-state');
  onDataForm = JSON.parse(savedMessage) ?? {};
  const formDataKeys = Object.keys(onDataForm);

  if (savedMessage) {
    formDataKeys.map(key => {
      formFedEl.elements[key].value = onDataForm[key];
    });
  }
};

const onInputForm = event => {
  onDataForm[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(onDataForm));
};

const onSubmitForm = event => {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  console.log(onDataForm);
  
  event.target.reset();
};

onElForm();
formFedEl.addEventListener('input', throttle(onInputForm, 500));
formFedEl.addEventListener('submit', onSubmitForm);
