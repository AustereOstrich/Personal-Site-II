import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactName = '';
  contactEmail = '';
  contactMessage = '';

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    alert('Form submitted!');
  }

}
