import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store';
import { SetUserAction, UnsetUserAction, User } from '../store/actions/auth.actions';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthFbService {

  constructor(
    private afAuth: AngularFireAuth,
    private store: Store<State>
  ) {}

  loading: boolean = false;

  createUser(name: string, email: string, password: string) {
    this.loading = true;
    setTimeout(() => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(resp => {
          const user: User = {
            name: name,
            email: resp.user.email,
            uid: resp.user.uid
          };
          this.storeUser(user);
          this.store.dispatch(new SetUserAction(user));
          this.loading = false;
        })
        .catch(err => {
          this.loading = false;
          Swal.fire('Register error', err.message, 'error');
        });
    }, 4000);

  }

   login(email: string, password: string) {
    this.loading = true;
     setTimeout(() => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(resp => {
          console.log(resp);
          const user: User = {
            name: resp.user.displayName,
            email: resp.user.email,
            uid: resp.user.uid
          };
          this.storeUser(user);
          this.store.dispatch(new SetUserAction(user));
          this.loading = false;
        })
        .catch(err => {
          this.loading = false;
          Swal.fire('Login error', err.message, 'error');
        });
    }, 4000);
  }

  logout() {
    this.afAuth.auth.signOut();
    localStorage.removeItem('userIA');
    this.store.dispatch(new UnsetUserAction());
  }

  storeUser(user: User) {
    localStorage.setItem('userIA',  JSON.stringify(user));
  }


  isAuth() {
    this.afAuth.authState
        .pipe(
          map( fbUser => {
            console.log(fbUser);
            if ( fbUser == null ) {
              return false;
            }
            return true;
          })
        );
  }
}