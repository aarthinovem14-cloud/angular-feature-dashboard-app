import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
 
 
  loginObj: any = {
    username: '',
    password: ''
  };
  router = inject(Router)

  Onlogin(){
    if(this.loginObj.username === 'admin' && this.loginObj.password === '2025'){
      this.router.navigateByUrl('/layout')

    }else{
      alert('wrong credentials')
    }
  }

}
  

      