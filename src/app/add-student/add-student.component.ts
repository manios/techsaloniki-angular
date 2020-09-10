import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-student',
    templateUrl: './add-student.component.html',
    styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

    errors: string = '';
    isLoading: boolean = false;
    student: Student;

    constructor(private studentService: StudentService, private router: Router) { }

    ngOnInit() {
    }

    /**
     * Creates a new student to the database
     * @param name student first name
     * @param surname student surname
     */
    addStudent(name: String, surname: String) {
        // TODO add implementation
    }
}