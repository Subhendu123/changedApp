import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'display-component',
  templateUrl: './display-component.component.html',
  styleUrls: ['./display-component.component.css']
})
export class DisplayComponentComponent implements OnInit {

	@Input() displayName : String;
  @Input() displayAge : number;
   @Input() displayDob : Date;

  constructor() { }

  ngOnInit() {
  }

}
