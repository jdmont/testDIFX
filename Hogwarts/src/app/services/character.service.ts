import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Character } from '../models/character';
import { takeUntil } from 'rxjs/operators';
import { resourceUsage } from 'process';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  destroy$ = new Subject<boolean>();
  private characterList: Array<Character> = [];
  constructor(private http: HttpClient) { }

  // getCharacters(house: string): Observable<Character[]> {
  //   const urlService = `${environment.URL_SERVICE}/house/${house}`;
  //   return this.http.get<Character[]>(urlService).pipe(
  //   map((characters: Character[]) => {

  //     characters.map(({name, yearOfBirth, patronus, image}) => {
  //     this.characterList.push({name,yearOfBirth,  patronus,image});
  //   })
  // })

  //   );
  // }
  getCharacters(house: string): Observable<Character[]> {
    const urlService = `${environment.URL_SERVICE}/house/${house}`;
    return this.http.get<Character[]>(urlService);
  }

}
