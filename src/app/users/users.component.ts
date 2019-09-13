import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public user_data;
  

  constructor(private uservice: UserService){}

  ngOnInit(){
    this.uservice.getUsers()
       .subscribe(data => this.user_data = data)
  }

}
