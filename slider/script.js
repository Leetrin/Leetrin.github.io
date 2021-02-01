class Slider {
  constructor(container, slides) {
    this.container = document.querySelector(container);
    this.slides = slides;
    this.activeSlide = 0;

    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
    this.rerender = this.rerender.bind(this);
    this.setSlide = this.setSlide.bind(this);
    this.destroy = this.destroy.bind(this);
  }

  init() {
    const dots = document.createElement("div");
    dots.classList.add("dots");

    this.slides.forEach((element, index) => {
      const slide = document.createElement("div");
      slide.classList.add("slide");

      if (index === this.activeSlide) {
        slide.classList.add("active");
      }

      const image = document.createElement("img");
      image.classList.add("slide-image");
      image.setAttribute("src", element.imgUrl);
      slide.append(image);

      const heading = document.createElement("h1");
      heading.classList.add("slide-heading");
      heading.innerText = element.heading;
      slide.append(heading);

      const description = document.createElement("p");
      description.classList.add("slide-description");
      description.innerText = element.description;
      slide.append(description);

      this.container.append(slide);

      const dot = document.createElement("button");
      dot.classList.add("dot");
      dot.addEventListener('click', this.setSlide);

      if (index === this.activeSlide) {
        dot.classList.add("active");
      }

      dot.setAttribute("data-index", index);
      dot.innerText = index + 1;
      dots.append(dot);
    });

    const prevButton = document.createElement("button");
    prevButton.classList.add("prev-btn");
    prevButton.setAttribute('disabled', true);
    prevButton.innerText = "Prev";
    this.container.append(prevButton);
    prevButton.addEventListener('click', this.prev);

    const nextButton = document.createElement("button");
    nextButton.classList.add("next-btn");
    nextButton.innerText = "Next";
    this.container.append(nextButton);
    nextButton.addEventListener('click', this.next);

    this.container.append(dots);

    const destroyBtn = document.createElement('button');
    destroyBtn.classList.add("destroy-btn");
    destroyBtn.innerText = "DESTROY !!!";
    document.body.append(destroyBtn);
    destroyBtn.addEventListener('click', this.destroy);
  }

  rerender() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');

    if (this.activeSlide === 0) {
      prevButton.setAttribute('disabled', true);
    } else {
      prevButton.removeAttribute('disabled', false);
    }

    if (this.activeSlide === this.slides.length - 1) {
      nextButton.setAttribute('disabled', true);
    } else {
      nextButton.removeAttribute('disabled', false);
    }

    slides.forEach((element, index) => {
      if (index === this.activeSlide) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });

    dots.forEach((element, index) => {
      if (index === this.activeSlide) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });
  }

  next() {
    if (this.activeSlide + 1 <= this.slides.length - 1) ++this.activeSlide;
    this.rerender();
  }

  prev() {
    if (this.activeSlide - 1 >= 0) --this.activeSlide;
    this.rerender();
  }

  setSlide(index) {
    this.activeSlide = + index.target.attributes[1].value;
    this.rerender();
  }

  destroy() {
    this.container.innerHTML = "";
  }
}

const images = [
  {
    heading: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgUrl:
      "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg",
  },
  {
    heading: "Suspendisse ornare felis",
    description:
      "Suspendisse ornare felis ut ligula bibendum, at convallis elit varius.",
    imgUrl:
      "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg",
  },
  {
    heading: "Donec id interdum",
    description: "Donec id interdum lacus, ut tempor sapien.",
    imgUrl:
      "https://cdn.pixabay.com/photo/2016/01/19/17/41/friends-1149841_960_720.jpg",
  },
];

const slider = new Slider(".slider", images);
slider.init();
