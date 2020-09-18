import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { Character } from 'src/app/models/character';
import { FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Houses } from 'src/app/enum/houses-enum';

@Component({
    selector: 'app-characters',
    templateUrl: 'characters.component.html',
    styleUrls: ['characters.component.scss']
})
export class CharactersComponent {
    /**
     * Show the houses enum
     */
    enumKeys = [];

    /**
     * Form control for the selected house
     */
    selected = new FormControl('', [
        Validators.required]);
    /**
     * List of characters to show
     */
    charactersList: Character[] = [];
    /**
     * datasource to show and table order
     */
    dataSource = null;
    /**
     * Columns to display in table
     */
    displayedColumns: string[] = ['name', 'age', 'patronus', 'image'];


    @ViewChild(MatSort, { static: true }) sort: MatSort;

    constructor(private charactersService: CharacterService) {
        this.enumKeys = Object.keys(Houses);
        console.log(this.enumKeys);
    }
    /**
     * Get the characters of the selected house
     * @param house Selected house
     */
    onEditClick(house: string) {
        this.charactersService.getCharacters(house).subscribe(res => {
            this.charactersList = res;
            this.dataSource = new MatTableDataSource<Character>(this.charactersList);
            this.dataSource.sort = this.sort;
        }, error => {
            console.error(error);
        });
    }
    /**
     * Calculates the age of the character
     * @param dateOfBirth Characters' birth date
     */
    CalculateAge(dateOfBirth: Date): string {
        const date = moment(dateOfBirth).isValid();
        if (date) {
            return moment().diff(dateOfBirth, 'years').toString();
        } else {
            return 'unknown';
        }
    }
}
