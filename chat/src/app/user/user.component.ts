import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

import { User } from '../user';
import { UserService } from '../user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;
  users: User[];
  selectedUser: User;

  constructor(private userService: UserService) { }

  //constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  	this.getUsers();
  }

  getUsers(): void {
  	this.userService.getUsers()
  	.subscribe(users => this.users = users);
  }

  add(userid: number, name: string, email: string, password: string, groupname: string): void {
  	name = name.trim();
  	email = email.trim();
  	password = password.trim();
  	groupname = groupname.trim();
  	if(!name && ! email && !password && !groupname) { return; }
  	this.userService.addUser({ userid,name,email,password,groupname } as User)
  	.subscribe(user => {
  		this.users.push(user);
  	});
  }

  delete(user: User ): void{
  	this.users = this.users.filter(u => u !== user);
  	this.userService.deleteUser(user).subscribe;
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }
  

}
