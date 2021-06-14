import { Student } from './student';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentDetailsService {

  constructor() { }

  imagePath : string = 'assets/Studentimages/';

  getAllStudents() : Student[]{
    let student1 : Student = {
      name : 'Vineesha',
      rollNumber : '17wh1a0441',
      email:'vineesha@gmail.com',
      mobileNumber:'8849354300',
      profilePic: this.imagePath+'Girl.jpg',
      joiningDate : new Date("2020-01-23")
    } 
    let student2 : Student = {
      name : 'Preethu',
      rollNumber : '17wh1a0442',
      email:'preethu@gmail.com',
      mobileNumber:'8849453468',
      profilePic: this.imagePath+'Boy.png',
      joiningDate : new Date("2020-04-24")
    } 
    return [student1,student2];
  }
}
