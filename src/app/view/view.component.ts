import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @Input() title: string;
  hide = true;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.hide = false;
    }, 5000);
  }

}
