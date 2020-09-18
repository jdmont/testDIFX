import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as moment from 'moment';
import { Character } from 'src/app/models/character';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  charactersList: Character[] = [];

  dataSource = null;

  displayedColumns: string[] = ['name', 'age', 'patronus', 'image'];


  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.teacherService.getCharacters().subscribe(res => {
      this.charactersList = res;
      this.dataSource = new MatTableDataSource<Character>(this.charactersList);
      this.dataSource.sort = this.sort;
    }, error => {
      console.error(error);
    });
  }
  CalculateAge(dateOfBirth: Date): string {
    const date = moment(dateOfBirth).isValid();
    if (date) {
      return moment().diff(dateOfBirth, 'years').toString();
    } else {
      return 'unknown';
    }
  }
}
