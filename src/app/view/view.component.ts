import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @Input() title: string;
  time = 5;
  constructor() { }

  ngOnInit() {
    const handler = setInterval(() => {
      this.time--;
      if (this.time <= 0) {
        clearInterval(handler);
      }
    }, 1000);
  }

}
