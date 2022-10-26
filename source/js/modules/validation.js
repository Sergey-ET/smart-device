const validatePhone = () => {
  const input = document.body.querySelector('#phone');

  input.addEventListener('keypress', (evt) => {
    if (evt.keyCode < 47 || evt.keyCode > 57) {
      evt.preventDefault();
    }
  });

  input.addEventListener('focus', () => {
    if (input.value.length === 0) {
      input.value = '+7(';
      input.selectionStart = input.value.length;
    }
  });

  input.addEventListener('click', (evt) => {
    if (input.selectionStart < 10) {
      input.selectionStart = input.value.length;
    }
    if (evt.key === 'Backspace' && input.value.length <= 10) {
      evt.preventDefault();
    }
  });

  input.addEventListener('keydown', () => {
    if (input.value.length === 6) {
      input.value += ')';
    }
  });

  input.addEventListener('blur', () => {
    if (input.value <= '+7(' || input.value.length <= 6) {
      input.value = '';
    }
  });

  input.addEventListener('keydown', (evt) => {
    if (evt.key === 'Backspace' && input.value.length <= 3) {
      evt.preventDefault();
    }
  });
};

export {validatePhone};
