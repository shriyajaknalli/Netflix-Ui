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
  @Input() cardSize: 'small' | 'medium' | 'large' = 'medium';
  @Output() cardClicked = new EventEmitter<Content>();
  @Output() playClicked = new EventEmitter<Content>();
  @Output() addToListClicked = new EventEmitter<Content>();
  @ViewChild('slider') slider!: ElementRef;

  showArrows = false;

  onCardClick(content: Content) {
    this.cardClicked.emit(content);
  }

   onPlayClick(content: Content) {
    this.playClicked.emit(content);
  }

  onAddToListClick(content: Content) {
    this.addToListClicked.emit(content);
  }

  scrollLeft() {
   const scrollAmount = this.getScrollAmount();
    this.slider.nativeElement.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  }

  scrollRight() {
      const scrollAmount = this.getScrollAmount();
    this.slider.nativeElement.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
   private getScrollAmount(): number {
    switch (this.cardSize) {
      case 'small': return 400;
      case 'large': return 600;
      default: return 500;
    }
  }
}

