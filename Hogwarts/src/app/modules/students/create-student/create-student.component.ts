import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  /**
   * Data form group
   */
  form: FormGroup;

  /**
   * List of new students
   */
  newStudents: Character[] = [];
  /**
   * Datasource to show and table order
   */
  dataSource = null;
  /**
   * Columns to display in table
   */
  displayedColumns: string[] = ['name', 'age', 'patronus', 'image'];

  public imagePath: any;
  imgURL: any;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      patronus: [''],
      birthDate: ['', Validators.required]
    });

  }

  ngOnInit(): void {
  }

  /**
   * Previews the loaded image
   * @param files file selected
   */
  preview(files: string | any[]) {
    if (files.length === 0) {
      return;
    }
    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
  }
  /**
   * Loads the given data in the table
   */
  save() {
    this.form.markAsPristine();
    this.form.markAsUntouched();
    if (this.form.valid) {

      const newCharacter: Character = {
        name: this.form.get('name').value,
        patronus: this.form.get('patronus').value,
        dateOfBirth: this.form.get('birthDate').value,
        image: this.imgURL
      };
      this.newStudents.push(newCharacter);
      this.dataSource = new MatTableDataSource<Character>(this.newStudents);
      this.dataSource.sort = this.sort;
      this.form.reset();
      this.imgURL = '';
    }
  }

}
