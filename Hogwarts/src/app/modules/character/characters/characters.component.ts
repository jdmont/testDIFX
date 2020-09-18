import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { Character } from 'src/app/models/character';
import { FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
    selector: 'app-characters',
    templateUrl: 'characters.component.html',
    styleUrls: ['characters.component.scss']
})
export class CharactersComponent {

    selected = new FormControl('', [
        Validators.required]);

    charactersList: Character[] = [];
    dataSource = null;

    displayedColumns: string[] = ['name', 'age', 'patronus', 'image'];


    @ViewChild(MatSort, {static: true}) sort: MatSort;

    constructor(private charactersService: CharacterService) {
    }
    
    
    onEditClick(house: string) {
        this.charactersService.getCharacters(house).subscribe(res => {
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
