import { User } from '../display-component/user.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list-info',
  templateUrl: './user-list-info.component.html',
  styleUrls: ['./user-list-info.component.css']
})
export class UserListInfoComponent implements OnInit {

  @Input() allUserDetails : User[];
  constructor() { }

  ngOnInit() {
  }
//git changes
}
