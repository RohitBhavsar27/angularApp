import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private httpclient: HttpClient) { }

    saveStudent(student: Student) {
        return this.httpclient.post("http://localhost:8000/apiapp/saveStudent/", student)
    }
}

export class Student{
    rno: number;
    name: string;
    marks: number;

    constructor(rno: number, name:string, marks:number){
        this.rno = rno
        this.name = name
        this.marks = marks
    }
}
