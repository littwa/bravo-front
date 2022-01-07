import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-develop-page',
  templateUrl: './develop-page.component.html',
  styleUrls: ['./develop-page.component.scss']
})
export class DevelopPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const h = {'qw-qw': 'qw'};
    console.log(1000055, h, h['qw-qw']);
  }

}
