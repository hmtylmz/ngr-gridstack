import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'gridstack-angular';

  options = {
    column: 50,
    alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  };

  items = [
    {
      x: 0,
      y: 0,
      width: 5,
      height: 5
    },
    {
      x: 10,
      y: 10,
      width: 15,
      height: 10
    }
  ];

  ngAfterViewInit() {
    // let a = $('.grid-stack').gridstack();
    // console.log(a);
    setTimeout(() => {
      this.items.push({
        x: 3,
        y: 10,
        width: 5,
        height: 5
      });
    }, 1000);
  }
}
