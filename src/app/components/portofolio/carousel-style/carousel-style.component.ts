import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";

@Component({
  standalone: true,
  selector: "app-carousel-style",
  templateUrl: "./carousel-style.component.html",
  imports: [
    NgOptimizedImage, CommonModule
  ],
  styleUrls: ["./carousel-style.component.css"]
})
export class CarouselStyleComponent implements OnInit, OnChanges, OnDestroy {
  images: { src: string, alt: string, width: number, height: number }[] = [
    { src: '/assets/img/caroussel/myCV1.jpg', alt: 'myCV1', width: 400, height: 225 },
    { src: '/assets/img/caroussel/myCV2.jpg', alt: 'myCV2', width: 400, height: 225 },
    { src: '/assets/img/caroussel/myCV3.jpg', alt: 'myCV3', width: 400, height: 225 },
  ];
  slideIndex: number = 0;
  autoSlideInterval: any;
  @Input() projetId: number;

  constructor() { }

  ngOnChanges() {
    if(this.projetId) {
      switch (this.projetId.toString()) {
        case '1':
          this.images = [
            { src: '/assets/img/caroussel/myCV1.jpg', alt: 'myCV1', width: 400, height: 225 },
            { src: '/assets/img/caroussel/myCV2.jpg', alt: 'myCV2', width: 400, height: 225 },
            { src: '/assets/img/caroussel/myCV3.jpg', alt: 'myCV3', width: 400, height: 225 },
          ]
          break;
        case '2':
          this.images = [
            { src: '/assets/img/caroussel/reservation.jpg', alt: 'reservation', width: 400, height: 225 },
            { src: '/assets/img/caroussel/reservation2.jpeg', alt: 'reservation2', width: 400, height: 225 }
          ]
          break;
        case '3':
          this.images = [
            { src: '/assets/img/caroussel/e-commerce.jpeg', alt: 'e-commerce 1', width: 400, height: 225 },
            { src: '/assets/img/caroussel/e-commerce2.jpeg', alt: 'e-commerce 2', width: 400, height: 225 },
            { src: '/assets/img/caroussel/e-commerce3.jpeg', alt: 'e-commerce 3', width: 400, height: 225 }
          ]
          break;
        default:
          console.log(`Sorry, we are out of`);
      }
    }
  }

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  showSlides() {
    const slides = document.querySelectorAll(".carousel-item");
    slides.forEach(slide => slide.classList.add("hidden"));
    if (this.slideIndex >= slides.length) this.slideIndex = 0;
    if (this.slideIndex < 0) this.slideIndex = slides.length - 1;
    slides[this.slideIndex].classList.remove("hidden");
  }

  nextSlide() {
    this.slideIndex++;
    this.showSlides();
  }

  prevSlide() {
    this.slideIndex--;
    this.showSlides();
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.slideIndex++;
      this.showSlides();
    }, 2000);
  }

  stopAutoSlide() {
    clearInterval(this.autoSlideInterval);
  }
}

