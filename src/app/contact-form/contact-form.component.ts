import { Component, OnInit } from '@angular/core';
import {NgForm, Validators} from '@angular/forms';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactForm = new FormGroup({
    contactName: new FormControl('', [
        Validators.required,
    ]),
    contactEmail: new FormControl('', [
        Validators.required,
        Validators.email,
    ]),
    contactMessage: new FormControl('', [
        Validators.required
    ])
  });

  constructor() { }

  ngOnInit() {
  }

  get contactName() { return this.contactForm.get('contactName'); }
  get contactEmail() { return this.contactForm.get( 'contactEmail' ); }
  get contactMessage() { return this.contactForm.get( 'contactMessage'); }

  onSubmit() {
    alert(this.contactForm.value);
  }

}
