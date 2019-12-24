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
      id: 'abc',
      x: 0,
      y: 0,
      width: 5,
      height: 5
    },
    {
      id: 'bcd',
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
        id: 'efc',
        x: 3,
        y: 10,
        width: 5,
        height: 5
      });
      setTimeout(() => {
        // this.items[0].x = 20;
        this.items.push({
          id: 'efcw',
          x: 3,
          y: 10,
          width: 5,
          height: 5
        });
      }, 3000);
    }, 1000);
  }
}
