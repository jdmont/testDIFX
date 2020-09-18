import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { TeacherComponent } from './teacher/teacher.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TeacherService } from 'src/app/services/teacher.service';
@NgModule({
  declarations: [TeacherComponent],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    SharedModule
  ],
  providers: [TeacherService]
})
export class TeachersModule { }
