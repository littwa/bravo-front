import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  @Input() applyFilter
  @Input() placeholder

  constructor() { }

  ngOnInit(): void {
  }

}
