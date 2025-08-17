import { Component, OnInit } from '@angular/core';
import { Content } from './models/content.interface';
import { ContentService } from './services/content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  testContent: Content[] = [];

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.getTrendingContent().subscribe(
      content => this.testContent = content
    );
  }

  onCardClick(content: Content): void {
    alert(`Clicked on: ${content.title}`);
  }
}