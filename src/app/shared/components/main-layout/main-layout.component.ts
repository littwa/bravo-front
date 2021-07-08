import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { getRole } from 'src/app/core';
import { authLogOutManagerRequest } from 'src/app/core/auth/actions';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  role$: Observable<string>

  constructor(private store: Store) { }


  ngOnInit(): void {
    this.role$ = this.store.select(getRole);
    // this.role$ = of("customer")
  }

  handleClick() {
    this.store.dispatch(authLogOutManagerRequest())
  }

}




