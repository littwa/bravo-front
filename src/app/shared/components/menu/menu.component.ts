import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Store } from '@ngrx/store';
import { authLogOutManagerRequest } from 'src/app/core/auth/actions';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  title: string;
  opened: boolean = true;

  constructor(private store: Store, public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(max-width: 920px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.opened = false;
          console.log('Viewport is 960px or less!');
        } else {
          this.opened = true;
          console.log('Viewport is Big!');
        }
      });

  }

  onActivate(e) {
    this.title = e.name;
  }

  handleClick() {
    this.store.dispatch(authLogOutManagerRequest())
  }
}
