import { Component, OnInit } from '@angular/core';
import { AuthFbService } from 'src/app/services/auth-fb.service';

@Component({
  selector: 'app-access-without-register',
  templateUrl: './access-without-register.component.html',
  styleUrls: ['./access-without-register.component.css']
})
export class AccessWithoutRegisterComponent implements OnInit {

  constructor(
    public _authService: AuthFbService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this._authService.login('test@test1.com', 'test12345');
  }

}
