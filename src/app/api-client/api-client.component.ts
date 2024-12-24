import { Component } from '@angular/core';
import { ApiService, Student } from '../api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-api-client',
  imports: [CommonModule, FormsModule],
  templateUrl: './api-client.component.html',
  styleUrl: './api-client.component.css'
})
export class ApiClientComponent {
    student: Student = new Student(0, '', 0)

    constructor(private apiservice: ApiService){

    }
    saveStudent(){
        this.apiservice.saveStudent(this.student).subscribe()
    }
}
