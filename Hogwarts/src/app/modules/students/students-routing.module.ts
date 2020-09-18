import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentComponent } from './student/student.component';


const routes: Routes = [
  {
    path: '',
    component: StudentComponent
  },
  {
    path: 'create',
    component: CreateStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
