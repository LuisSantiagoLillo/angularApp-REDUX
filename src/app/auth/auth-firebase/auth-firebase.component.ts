import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthFbService } from '../../services/auth-fb.service';

@Component({
  selector: 'app-auth-firebase',
  templateUrl: './auth-firebase.component.html',
  styleUrls: ['./auth-firebase.component.css']
})
export class AuthFirebaseComponent implements OnInit {

  htmlPersonalIA = `
  <div class="text-left mt-4 mb-4 pl-2 pr-2">
    <p><span class="font-weight-bold">Personal IA</span> begins been a portfolio project to show how works the <span class="font-weight-bold">Pattern REDUX</span> into a huge Web App with Angular.</p>
    <p>But once the patter has been designed to the app, and the first <span class="font-weight-bold">Reducers</span> and <span class="font-weight-bold">Actions</span> has been deployed, work with a "store data" is very simple and repetitive. </p>
    <p>For the next modules only is needed repeat the same process because... <mark class="text-info">well REDUX is a desing patter.</mark>  </p>
    <p>Anyway! I decided use the "store data" to make a Web App where you can define your own style, and because the data is located and accesible from a specific place, all components can visualice this changes and addap into itself.  </p>
    <p>Yeah I kown, that's the scope of REDUX! </p>
    <p>But look, in this app, you can change styles everywhere you want, create some notes and view in other components... All this information is travelling bettween components so easly and this fact open lot of possibilities.</p>
  </div>
  `;

  constructor(
    public _authFirebase: AuthFbService
  ) { }

  ngOnInit() {
  }

  showWhatIsPersonalIA() {
    Swal.fire({
      title: '<strong>cool name, but... what is exactly <u class="font-weight-bold">PersonalIA</u>?</strong>',
      animation: false,
      customClass: {
        popup: 'animated bounceInDown'
      },
      html: this.htmlPersonalIA,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
    });
  }

  async showCookies() {
    const {value: accept} = await Swal.fire({
      title: 'Terms and conditions',
      animation: false,
      customClass: {
        popup: 'animated bounceInUp'
      },
      input: 'checkbox',
      inputPlaceholder:
        'I agree with the terms and conditions',
      confirmButtonText:
        'Continue <i class="fa fa-arrow-right></i>',
      inputValidator: (result) => {
        return !result && 'You need to agree with T&C';
      }
    });
    if (accept) {
      Swal.fire('You agreed with T&C :)');
    }
  }



}
