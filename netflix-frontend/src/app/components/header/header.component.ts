import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isSearchVisible = false; // Controls search visibility
  isMobileNavVisible = false; // Controls mobile navigation visibility
  isScrolled = false; // Tracks scroll state for sticky behavior

  // Toggles the search bar visibility
  toggleSearch() {
    this.isSearchVisible = !this.isSearchVisible;
  }

  // Toggles the mobile navigation visibility
  toggleMobileNav() {
    this.isMobileNavVisible = !this.isMobileNavVisible;
  }

  // Detects scroll position to apply sticky behavior
  @HostListener('window:scroll', [])
  onScroll() {
    this.isScrolled = window.scrollY > 50; // Add scrolled class if scroll position > 50px
  }
}