import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Content } from 'src/app/models/content.interface';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-content-row',
  templateUrl: './content-row.component.html',
  styleUrls: ['./content-row.component.scss']
})
export class ContentRowComponent {
  @Input() title!: string;
  @Input() contents: Content[] = [];
  @Output() cardClicked = new EventEmitter<Content>();
  @ViewChild('slider') slider!: ElementRef;

  showArrows = false;

  onCardClick(content: Content) {
    this.cardClicked.emit(content);
  }

  scrollLeft() {
    this.slider.nativeElement.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  }

  scrollRight() {
    this.slider.nativeElement.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  }
}

