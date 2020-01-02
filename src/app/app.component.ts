import { Component, OnInit } from '@angular/core';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Personal-Site-II';

  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  ngOnInit() {
      this.myStyle = {
          'position': 'absolute',
          'width': '100%',
          'height': '100%',
          'z-index': -1,
          'top': 0,
          'left': 0,
          'right': 0,
          'bottom': 0,
          'background-color': '#4d4c4a'
      };

  this.myParams = {
          particles: {
              number: {
                  value: 50,
              },
              color: {
                  value: '#ffffff'
              },
              shape: {
                  type: 'triangle',
              },
              line_linked: {
                enable: false,
              },
      }
  };
  }

}
