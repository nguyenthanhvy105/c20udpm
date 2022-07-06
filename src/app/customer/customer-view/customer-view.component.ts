import {Component, Input, OnInit} from '@angular/core';
import {Customer} from "../customer";

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {

  @Input() customer?: Customer;

  constructor() { }

  ngOnInit(): void {
  }
}
