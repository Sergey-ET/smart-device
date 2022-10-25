const showMore = () => {
  const additionalTexts = document.querySelectorAll('.additional');
  const buttonMore = document.querySelector('.about__button');

  buttonMore.classList.remove('about__button--nojs');
  additionalTexts.forEach((additionalText) => {
    additionalText.classList.remove('additional--nojs');
  });

  buttonMore.addEventListener('click', () => {
    additionalTexts.forEach((additionalText) => {
      if (additionalText.classList.contains('is-hidden')) {
        additionalText.classList.remove('is-hidden');
        buttonMore.innerHTML = 'Свернуть';
      } else {
        additionalText.classList.add('is-hidden');
        buttonMore.innerHTML = 'Подробнее';
      }
    });
  });
};

export {showMore};
