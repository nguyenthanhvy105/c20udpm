import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../customer.service";
import {Customer} from "../customer";
import {Observable, tap} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];
  visibledView = false;
  //customers$?: Observable<Customer[]>;
  loaded = false;
  selectedCustomer?: Customer;

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute) {
  }

  /*
  ngOnInit() {
    this.route.queryParams
      .filter(params => params.order)
      .subscribe(params => {
        console.log(params); // { order: "popular" }

        this.order = params.order;

        console.log(this.order); // popular
      }
    );
  }
   */
  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
        const {keyword} = params;
        console.log(keyword); // { order: "popular" }

        this.customerService.getCustomers(keyword || 'a').subscribe((customers) => {
          this.customers = customers;
          this.loaded = true;
          /*
          setTimeout(()=>{

          }, 2000)

           */
        })

      }
    );


    //this.customers$ = this.customerService.getCustomers('a')
  }

  edit(cs: Customer) {
    //cs.name = "Tôi vừa thay đổi";
    this.visibledView = true;
    this.selectedCustomer = cs;
  }

}
