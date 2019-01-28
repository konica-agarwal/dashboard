import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact-sales',
  templateUrl: './contact-sales.component.html',
  styleUrls: ['./contact-sales.component.css']
})
export class ContactSalesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
model : any ={};
    onSubmit(form:NgForm) { 
   alert('SUCCESS !! ' );
   form.reset();
  }


  }
  onInputEntry(event, nextInput) {
  let input = event.target;
  let length = input.value.length;
  let maxLength = input.attributes.maxlength.value;

  if (length >= maxLength) {
    nextInput.focus();
  }
}

}
