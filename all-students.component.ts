import { Component, OnInit } from '@angular/core';
import { StudentDetailsService } from './../student-details.service';
import { Student } from './../student';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit {
  __studentDetailsService:StudentDetailsService;
     notes:number = 0; 

     constructor(sds:StudentDetailsService) { 
      this.__studentDetailsService = sds;
    }

  ngOnInit(): void {
  }
  getAllStudents():Student[]
  {
    return this.__studentDetailsService.getAllStudents();
  }

  addAttendance()
  {
    this.notes++;
    console.log(this.notes);
  }

  shareMethod(student:Student){
      console.log(student.name+" details are shared");
  }

}
