import { Component, OnInit } from '@angular/core';
import { AuthFbService } from '../../services/auth-fb.service';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.css']
})
export class LogoutButtonComponent implements OnInit {

  constructor(
    private _authFb: AuthFbService
  ) { }

  ngOnInit() {
  }

  logout() {
    this._authFb.logout();
  }

}
