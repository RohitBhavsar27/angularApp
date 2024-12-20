import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MathsService } from '../maths.service';

@Component({
    //Javascript-object
    selector: 'app-addition',
    imports: [FormsModule],
    templateUrl: './addition.component.html', //thus html file will provide values for no1, no2 parameters, so that add() function will perform addition
    styleUrl: './addition.component.css',
})
export class AdditionComponent {
    no1: number = 10;
    no2: number = 20;
    ans: number = 0;

    imgsrc = "assets/img1.jpg"

    add() {
        console.log("no1="+this.no1+"no2="+this.no2)
        this.ans = this.no1 + this.no2;
    }
    subtract() {
        console.log("no1="+this.no1+"no2="+this.no2)
        this.ans = this.no1 - this.no2;
    }

    constructor(private colorService: MathsService){ 

    }

    changeColor(){
        this.colorService.changeColor('blue')
    }
}
