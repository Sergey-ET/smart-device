const scrollToElement = () => {
  const majorButton = document.querySelector('.major__button');
  const scrollElement = document.querySelector('#feedback');

  majorButton.addEventListener('click', (evt) => {
    evt.preventDefault();

    scrollElement.scrollIntoView({
      behavior: 'smooth',
    });
  });
};

export {scrollToElement};
