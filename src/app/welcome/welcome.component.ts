import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
    message:any = ""
    constructor(private route: ActivatedRoute){
        this.route.queryParamMap.subscribe(queryparameters => this.message = queryparameters.get("message"))
    }
}
