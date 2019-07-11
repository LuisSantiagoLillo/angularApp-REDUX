import { Component, OnInit } from '@angular/core';
import { AuthFbService } from '../../services/auth-fb.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    public authService: AuthFbService
  ) { }

  ngOnInit() {
  }

  onSubmit(data: any) {
    this.authService.createUser(data.name, data.email, data.password);
  }

}
