import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service'
import { User } from '../service/user'
import { Router } from '@angular/router'



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  user: User;

  constructor(private authService: AuthService, private router: Router) {
    this.user = new User();
  }

  ngOnInit(): void {
  }


  login() {
    console.log(this.user.email + this.user.password)
    this.authService.login(this.user.email, this.user.password).then(val => {

      //this.router.navigate(['']);
      window.location.reload();
      console.log("you logged in")
    }
    ).catch(error => console.log("erreur :" + error))
  }
}
