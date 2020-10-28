import { Student } from './student/student';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class StudentService{

    students: Student[] = [{ id: 1, name: 'student 1', age: 18 },
    { id: 2, name: 'student 2', age: 20 }];
    

    getStudents(): Student[]{
        return this.students;
    }

    getStudent(id: number): Student{
        return this.students[id - 1 ];
    }
}