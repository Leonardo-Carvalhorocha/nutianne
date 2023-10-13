export default class slide {
  constructor (imgs, slide) {
    this.imgs = document.querySelectorAll(imgs);
    this.slide = document.querySelector(slide);
    this.count = 0;
  }

  styleTransform(index) {
    const imgArray = [...this.imgs];
    imgArray.map((img) => {
      img.style.transform = `translateX(${this.slidePosition(index)}px)`;
    })
  }

  slidePosition(index) {
    const slideArray = Array.from(this.slide.children).map((element) => {
      const position = -element.offsetLeft;
      return {
        element, 
        position,
      }
    })
    return slideArray[index].position;
  }

  temporizadorSlide(i) {
    setInterval(() => {
      this.count++;
      if (this.count < 4) {
        this.styleTransform(this.count);
      } else {
        this.count = -1;
      }
    }, 10000)
  }

  init() {
    this.temporizadorSlide();
    return this;
  }
};
