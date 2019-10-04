import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from './student';
import { Observable } from 'rxjs';
import { ActionStatus } from './action-status';


const API_URL: string = 'http://localhost:8081/students';
const GET_ALL_STUDENTS_URL: string = API_URL + '/all';
const ADD_STUDENTS_URL: string = API_URL + '/';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
};

@Injectable({
    providedIn: 'root'
})
export class StudentService {

    private headers;

    constructor(private http: HttpClient) {
        this.init();
    }

    async init() {

    }

    getAllStudents(): Observable<Student[]> {
        return this.http.get<Student[]>(GET_ALL_STUDENTS_URL);
    }

}