import { Component, OnInit } from '@angular/core';
import { AuthFbService } from 'src/app/services/auth-fb.service';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

  constructor(
    public _authService: AuthFbService
  ) { }

  ngOnInit() {
  }

  onSubmit(data: any) {
    console.log(data);
    this._authService.login(data.email, data.password);
  }

}
