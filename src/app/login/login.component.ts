import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    message:any = ""
    constructor(private router:Router, private route: ActivatedRoute){

    }

    username:string = ""
    password:string = ""

    validate(){
        if(this.username == 'admin' && this.password == "admin@123"){
            this.router.navigate(['welcome'],{queryParams:{'message': 'welcome ' + this.username}})
        } else {
            this.router.navigate(['login'],{queryParams:{'message': 'incorrect credentials'}})
        }
    }
} 
