import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Character } from 'src/app/models/character';
import * as moment from 'moment';
import { StudentsService } from 'src/app/services/students.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  charactersList: Character[] = [];

  dataSource = null;

  displayedColumns: string[] = ['name', 'age', 'patronus', 'image'];


  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.studentsService.getCharacters().subscribe(res => {
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
