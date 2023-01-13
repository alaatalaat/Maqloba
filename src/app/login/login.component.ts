import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { LoginUser } from '../add-new-product/login-user';
import { UserAuthService } from '../services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData = new LoginUser('','',false);

  constructor(private authService:UserAuthService,public translate:TranslateService) {

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
