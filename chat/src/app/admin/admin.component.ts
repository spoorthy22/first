import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { User } from  '../user';
import { Groups } from '../groups';
import { Message } from '../message';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted  =  false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

login(){
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.authService.login(this.loginForm.value);
    this.router.navigateByUrl('/users');
    this.router.navigateByUrl('/groups');
    this.router.navigateByUrl('/message');
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
