import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss']
})
export class ModalContainerComponent implements OnInit {

  @Input() title: string = "Title-1"
  @Input() btnText: string = "AnyBtn"
  @Output() btn = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void { }


}
