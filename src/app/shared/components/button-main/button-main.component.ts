import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-button-main',
  templateUrl: './button-main.component.html',
  styleUrls: ['./button-main.component.scss']
})
export class ButtonMainComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  @Input() nameBtn: string = "nameBtn"
  @Input() modalComponent
  // @Output() onClickConfirm = new EventEmitter<any>()
  @ViewChild("testModal") testModal


  ngOnInit(): void { }

  openModal(): void {

    const dialogRef = this.dialog.open(this.modalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result) {
        // this.onClickConfirm.emit()
        // this.$strm.next()
      }
    });

  }

}
