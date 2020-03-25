import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
//import { moveIn } from '../router.animations';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  private error;
  constructor(public afAuth: AngularFireAuth, private router: Router) {}

  ngOnInit() {
  }

  
  loginWithFacebook() {
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider()).catch((error) => console.log(error));
    this.goToDashboard();
  }

  loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).catch((error) => console.log(error));
    this.goToDashboard();
  }

  loginWithEmailAndPassword(formData) {
    if (formData.valid) {
      this.afAuth.auth.signInWithEmailAndPassword(formData.value.email, formData.value.password)
      .catch((error) => {
        this.error = error;
      });
    }
    this.goToDashboard();
  }
  
  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

}