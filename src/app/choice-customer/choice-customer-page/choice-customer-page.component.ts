import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-choice-customer-page',
  templateUrl: './choice-customer-page.component.html',
  styleUrls: ['./choice-customer-page.component.scss']
})
export class ChoiceCustomerPageComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.data.subscribe(d => console.log(d))
    // this.route.params.subscribe(d => console.log(d))
    this.route.queryParams.subscribe(d => console.log(d))
    // this.route.url.subscribe(d => console.log(d))
    // console.log(this.route.data)
    // console.log(this.route.root)
  }

  handleClick() {
    console.log(1);
  }

}
