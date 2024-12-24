import { Component } from '@angular/core';
import { AdditionComponent } from './addition/addition.component';
import { ArrayexComponent } from './arrayex/arrayex.component';
import { MathsService } from './maths.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';import { RouterLink, RouterOutlet } from '@angular/router';
``

@Component({
    selector: 'app-root',
    // imports: [AdditionComponent, ArrayexComponent],
    imports: [FormsModule,CommonModule, RouterOutlet, RouterLink],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'angularapp';
    no:number=0
    answer:number = 0

    constructor(private obj:MathsService){

    }

    calculateCube(){
        this.answer = this.obj.calculateCube(this.no)
    }
}

