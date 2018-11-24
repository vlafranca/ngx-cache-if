import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngxCacheIf';
  hideCache = false;
  hideIf = false;

  toggleCachedContent() {
    this.hideCache = !this.hideCache;
  }

  toggleIfContent() {
    this.hideIf = !this.hideIf;
  }
}
