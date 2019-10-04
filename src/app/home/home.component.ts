import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

    students: Student[];
    errorMessage: string;
    isLoading: boolean = true;

    constructor(private studentService: StudentService) { }

    ngOnInit() {

        this.getStudents();
    }

    /**
     * Loads all the students and displays them into a table
     */
    getStudents() {

        this.studentService.getAllStudents()
            .subscribe(
                students => {
                    this.students = students;
                    this.isLoading = false;
                },
                error => {
                    this.errorMessage = <any>error;
                    this.isLoading = false;
                }
            )
    }

}
