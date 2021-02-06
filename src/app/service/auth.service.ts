import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    user: any;

    constructor(private firebaseAuth: AngularFireAuth) {
        this.user = firebaseAuth.authState;
    }


    signup(email: string, password: string) {
        this.firebaseAuth.createUserWithEmailAndPassword(email, password).then(val => {
            console.log('user created ' + val);

        }).catch(err => {
            console.log('error : ' + err);
        });
    }

    login(email: string, password: string) {
        const credential = firebase.default.auth.EmailAuthProvider.credential(email, password);
        return this.firebaseAuth.signInWithEmailAndPassword(email, password);
    }

    logout() {
        this.firebaseAuth.signOut();
    }
}
