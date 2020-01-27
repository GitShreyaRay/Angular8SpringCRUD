import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    this.title = 'Rayan';
  }
  @ViewChild('ngcarousel', { static: true }) ngCarousel: NgbCarousel;
  title: string;

  ngOnInit() { }

  // Move to specific slide
  navigateToSlide(item) {
    this.ngCarousel.select(item);
    console.log(item)
  }

  // Move to previous slide
  getToPrev() {
    this.ngCarousel.prev();
    this.restartCarousel();
  }

  // Move to next slide
  goToNext() {
    this.ngCarousel.next();
    this.restartCarousel();
  }

  // Pause slide
  stopCarousel() {
    this.ngCarousel.pause();
  }

  // Restart carousel
  restartCarousel() {
    this.ngCarousel.cycle();
  }

}
