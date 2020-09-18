import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

 /**
     * Filter form group
     */
    form: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      name:['',Validators.required],
      patronus:['']
    });

  }

  ngOnInit(): void {
  }

}
