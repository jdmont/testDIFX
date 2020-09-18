import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getCharacters(house: string): Observable<Character[]> {
    const urlService = `${environment.URL_SERVICE}/house/${house}`;
    return this.http.get<Character[]>(urlService);
  }

}
