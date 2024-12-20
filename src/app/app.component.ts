import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdditionComponent } from './addition/addition.component';
import { ArrayexComponent } from './arrayex/arrayex.component';
import { MathsService } from './maths.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    // imports: [AdditionComponent, ArrayexComponent],
    imports: [FormsModule, AdditionComponent, ArrayexComponent, CommonModule, RouterOutlet],
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

    currentComponent: string = 'addition'; 
    toggleComponent() { 
        this.currentComponent = this.currentComponent === 'addition' ? 'arrayex' : 'addition'; 
    }
}

