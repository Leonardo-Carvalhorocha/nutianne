export default function initSlide() {
  const imgs = document.querySelectorAll('.slide img');
  const slide = document.querySelector('.slide');
  let i = 0;

  function styleTransform(index) {
    imgs.forEach((img) => {
      img.style.transform = `translateX(${slidePosition(index)}px)`
    });
  }

  function slidePosition(index) {
    const slideArray = [...slide.children].map((element) => {
      const position = -element.offsetLeft;
      return {
        element, 
        position,
      }
    })
    return slideArray[index].position;
  }

  setInterval(() => {
    i++;
    if (i < 4) {
      styleTransform(i);
    } else {
      i = -1;
    }
  }, 5000);
};
