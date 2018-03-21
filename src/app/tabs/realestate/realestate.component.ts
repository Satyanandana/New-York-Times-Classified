import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-realestate',
  templateUrl: './realestate.component.html',
  styleUrls: ['./realestate.component.css']
})
export class RealestateComponent implements OnInit {

  public links: Array<string> = ['Go to Real Estate Section',
    'Search for properties',
    'Download the Real Estate App',
    'Commercial real Estate',
    'Video Showcase : Real Estate',
    'Post an add'];

  public listings: Array<string> = ['Go to Real Estate Section',
    'NoMads newest condos',
    '2BRs starting $2.5 M',
    '2BRs starting $3.5 M'];

  constructor() {
  }

  ngOnInit() {
  }

}
