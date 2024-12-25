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
    message: any = ""
    student: Student = new Student(0, '', 0)

    constructor(private apiservice: ApiService) {

    }
    saveStudent() {
        this.apiservice.saveStudent(this.student).subscribe()
    }
    getStudent() {
        this.apiservice.getStudent(this.student.rno).subscribe(
            {
                next: studentobject => this.student = studentobject,
                error: error => {
                    if (error.status == 500)
                        this.message = "Record Not Found with rollno " + this.student.rno
                    else if (error.status == 404)
                        this.message = "Invalid URL"
                },
                complete: () => console.log('done')
            }
        )
    }
}
