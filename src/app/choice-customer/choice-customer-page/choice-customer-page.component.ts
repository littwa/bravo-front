import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { getCustomers } from 'src/app/core';
import { authSignInCustomerSuccess, authUpdateCustomerRequest } from 'src/app/core/auth/actions';
import { customersGetAllRequest } from 'src/app/core/customers/actions';
import { TOKEN_LOCAL_STORAGE_KEY_ACCESS, TOKEN_LOCAL_STORAGE_KEY_REFRESH } from 'src/app/shared/constants';

@Component({
  selector: 'app-choice-customer-page',
  templateUrl: './choice-customer-page.component.html',
  styleUrls: ['./choice-customer-page.component.scss']
})
export class ChoiceCustomerPageComponent implements OnInit, OnDestroy {

  selectedCustomer: string = "";
  allCustomers: object[];
  userId: string = ""

  private unsub$ = new Subject<void>();


  public isNew: boolean = false;

  constructor(public activatedRoute: ActivatedRoute, public store: Store, public router: Router) { } // , public router: Router

  ngOnInit(): void {
    this.store.dispatch(customersGetAllRequest())

    this.store.select(getCustomers).pipe(takeUntil(this.unsub$)).subscribe(customers => {
      this.allCustomers = customers
    })
    // this.activatedRoute.data.subscribe(d => console.log(d))
    // this.route.params.subscribe(d => console.log(d))
    this.activatedRoute.queryParams.subscribe(data => {
      console.log(data);
      this.userId = data.userId
      this.isNew = data.isNew === "true" ? true : false;
      this.store.dispatch(authSignInCustomerSuccess({ payload: { tokens: { accessToken: data.accessToken, refreshToken: data.refreshToken } } }))
      localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY_ACCESS, data.accessToken);
      localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY_REFRESH, data.refreshToken);
      if (!this.isNew) this.router.navigate(['/'])

    })

    // this.route.url.subscribe(d => console.log(d))
    // console.log(this.activatedRoute.data)
    // console.log(this.activatedRoute.root)
    // he is such a clever person
  }

  handleClick(e) {
    // console.log(11, e);

    console.log(22, this.selectedCustomer);
    const dto = { payload: { body: { customer: this.selectedCustomer }, id: this.userId } };
    this.store.dispatch(authUpdateCustomerRequest(dto));

  }

  ngOnDestroy(): void {
    this.unsub$.next(null)
    this.unsub$.complete()
  }

}
