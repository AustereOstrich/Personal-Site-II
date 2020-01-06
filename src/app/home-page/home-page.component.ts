import { Component, OnInit } from '@angular/core';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  myStyle: object = {};
  myParams: object = {};
  width = 100;
  height = 100;

  ngOnInit() {
      this.myStyle = {
          position: 'absolute',
          width: '100%',
          height: '100%',
          'z-index': -1,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          'background-color': '#4d4c4a',
          margin: 0
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
