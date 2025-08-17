import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
isSearchVisible = false;
  
  toggleSearch() {
    this.isSearchVisible = !this.isSearchVisible;
  }
}
