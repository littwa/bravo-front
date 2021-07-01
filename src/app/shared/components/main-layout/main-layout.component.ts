import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { authLogOutManagerRequest } from 'src/app/core/auth/actions';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void { }

  handleClick() {
    this.store.dispatch(authLogOutManagerRequest())
  }

}




