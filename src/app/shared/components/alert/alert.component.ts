import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// import {AlertService} from '../../services/alert.service';
import { Subscription } from 'rxjs';
import { getNotify } from 'src/app/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {

  delay = 3000

  public text: string = ""
  public type: string

  aSub: Subscription
  // private alertService: AlertService
  constructor(public store: Store, public cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.aSub = this.store.select(getNotify).subscribe(
      alert => {
        this.text = alert.message
        this.type = alert.type

        const timeout = setTimeout(() => {
          clearTimeout(timeout)
          this.text = ''
        }, this.delay)

      }
    )

    this.cdr.detectChanges();

  }

  ngOnDestroy(): void {
    if (this.aSub) {
      this.aSub.unsubscribe()
    }
  }

}


// error
// add
// del
// edit
