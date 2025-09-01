import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { Content } from '../../models/content.interface';

@Component({
  selector: 'app-content-row',
  templateUrl: './content-row.component.html',
  styleUrls: ['./content-row.component.scss']
})
export class ContentRowComponent implements AfterViewInit {
  @Input() title!: string;
  @Input() contents: Content[] = [];
  @Input() cardSize: 'small' | 'medium' | 'large' = 'medium';
  @Output() cardClicked = new EventEmitter<Content>();
  @Output() playClicked = new EventEmitter<Content>();
  @Output() addToListClicked = new EventEmitter<Content>();
  @ViewChild('slider') slider!: ElementRef;

  showArrows = false;
  canScrollLeft = false;
  canScrollRight = true;
  isHovered = false;

  ngAfterViewInit() {
    this.checkScrollability();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScrollability();
  }

  onCardClick(content: Content) {
    this.cardClicked.emit(content);
  }

  onPlayClick(content: Content) {
    this.playClicked.emit(content);
  }

  onAddToListClick(content: Content) {
    this.addToListClicked.emit(content);
  }

  onRowHover() {
    this.isHovered = true;
    this.checkScrollability();
  }

  onRowLeave() {
    this.isHovered = false;
  }

  scrollLeft() {
    const scrollAmount = this.getScrollAmount();
    this.slider.nativeElement.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
    
    setTimeout(() => this.checkScrollability(), 300);
  }

  scrollRight() {
    const scrollAmount = this.getScrollAmount();
    this.slider.nativeElement.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
    
    setTimeout(() => this.checkScrollability(), 300);
  }

  onScroll() {
    this.checkScrollability();
  }

  private checkScrollability() {
    if (!this.slider) return;
    
    const element = this.slider.nativeElement;
    const { scrollLeft, scrollWidth, clientWidth } = element;
    
    this.canScrollLeft = scrollLeft > 0;
    this.canScrollRight = scrollLeft < (scrollWidth - clientWidth - 10); // 10px buffer
    this.showArrows = this.contents.length > 0 && scrollWidth > clientWidth;
  }

  private getScrollAmount(): number {
    if (!this.slider) return 0;
    
    const containerWidth = this.slider.nativeElement.clientWidth;
    const cardWidth = this.getCardWidth();
    const gap = 8; // 8px gap between cards
    const visibleCards = Math.floor(containerWidth / (cardWidth + gap));
    const scrollCards = Math.max(1, visibleCards - 1); // Scroll by visible cards minus 1 for overlap
    
    return scrollCards * (cardWidth + gap);
  }

  private getCardWidth(): number {
    switch (this.cardSize) {
      case 'small': return window.innerWidth <= 768 ? 140 : 180;
      case 'large': return window.innerWidth <= 768 ? 200 : 280;
      default: return window.innerWidth <= 768 ? 160 : 220;
    }
  }


trackByContent(index: number, content: Content): number {
  return content.id;
}

getScrollProgress(): number {
  if (!this.slider) return 0;
  
  const element = this.slider.nativeElement;
  const { scrollLeft, scrollWidth, clientWidth } = element;
  
  if (scrollWidth <= clientWidth) return 100;
  
  return (scrollLeft / (scrollWidth - clientWidth)) * 100;
}
}