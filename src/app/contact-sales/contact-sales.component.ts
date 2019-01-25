import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-sales',
  templateUrl: './contact-sales.component.html',
  styleUrls: ['./contact-sales.component.css']
})
export class ContactSalesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

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
