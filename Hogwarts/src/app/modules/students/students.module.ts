import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentComponent } from './student/student.component';
import { StudentsService } from 'src/app/services/students.service';
import { CreateStudentComponent } from './create-student/create-student.component'

import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [StudentComponent, CreateStudentComponent],
  imports: [
    SharedModule,
    CommonModule,
    StudentsRoutingModule,
    MatDatepickerModule
  ],
  providers: [StudentsService]
})
export class StudentsModule { }
