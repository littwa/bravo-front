import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Store } from '@ngrx/store';
import { authLogOutManagerRequest } from 'src/app/core/auth/actions';
import { Observable, of } from 'rxjs';
import { getRole } from 'src/app/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  title: string;
  opened: boolean = true;

  role$: Observable<string>


  constructor(private store: Store, public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.role$ = this.store.select(getRole)

    this.breakpointObserver.observe(['(max-width: 920px)']).subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.opened = false;
        } else {
          this.opened = true;
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
