import { StudentService } from './../student.service';
import { Student } from './../student/student';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.sass']
})
export class StudentListComponent implements OnInit {

  students: Student[];
  selected: string;
  constructor(studentService: StudentService) {
    this.students = studentService.getStudents();
  }

  ngOnInit(): void {
  }

}
