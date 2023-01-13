import { Component, OnInit } from '@angular/core';
import { LoginUser } from 'src/app/add-new-product/login-user';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loginData = new LoginUser('','',false);

  constructor(private authService:UserAuthService) {

  }
  isUserLoged:boolean = false ;
  ngOnInit(): void {
    this.authService.getLogedStatus().subscribe(status=>{
      this.isUserLoged = status;
    });
  }

  submit(){
    console.log(this.loginData);
    this.authService.login('username','password');
  }

}
