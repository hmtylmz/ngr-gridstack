import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'gridstack-angular';

  options = {
    cellHeight: 5,
    column: 50,
    alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  };

  items = [
    {
      id: 'abc',
      x: 0,
      y: 0,
      width: 5,
      height: 5,
      maxWidth: 10,
      maxHeight: 10,
      minWidth: 3,
      minHeight: 3
    },
    {
      id: 'bcd',
      x: 10,
      y: 10,
      width: 15,
      height: 10,
      maxWidth: 10,
      maxHeight: 10,
      minWidth: 3,
      minHeight: 3
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
        height: 5,
        maxWidth: 10,
        maxHeight: 10,
        minWidth: 3,
        minHeight: 3
      });
      setTimeout(() => {
        // this.items[0].x = 20;
        this.items.push({
          id: 'efcw',
          x: 3,
          y: 10,
          width: 5,
          height: 5,
          maxWidth: 10,
          maxHeight: 10,
          minWidth: 3,
          minHeight: 3
        });
      }, 3000);
    }, 1000);
  }
}
