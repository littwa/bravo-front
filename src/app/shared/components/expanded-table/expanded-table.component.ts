import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expanded-table',
  templateUrl: './expanded-table.component.html',
  styleUrls: ['./expanded-table.component.scss']
})
export class ExpandedTableComponent implements OnInit {

  @Input() row

  constructor() { }

  ngOnInit(): void {
  }

}
