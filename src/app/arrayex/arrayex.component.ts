import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MathsService } from '../maths.service';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-arrayex',
  imports: [FormsModule, CommonModule],
  templateUrl: './arrayex.component.html',
  styleUrl: './arrayex.component.css'
})
export class ArrayexComponent {
    employee1:Employee = new Employee(1, 'JBK', 10000)
    employee2:Employee = new Employee(2, 'TKA', 20000)
    employee3:Employee = new Employee(3, 'PBG', 30000)
    employee4:Employee = new Employee(4, 'BGT', 40000)

    employees:Employee[] = [
        this.employee1,
        this.employee2,
        this.employee3,
        this.employee4
    ]

    getColor(salary:number){
        if(salary > 20000)
            return "green"
        else
            return "red" 
    }

    bodyColor:string = ""
    constructor(private colorService: ColorService){ 
        this.bodyColor = this.colorService.colorForAll;
    }

}

class Employee{
    eid:number;
    name:string;
    salary:number;

    constructor(eid:number,name:string,salary:number){
        this.eid = eid
        this.name = name
        this.salary = salary
    }
}
