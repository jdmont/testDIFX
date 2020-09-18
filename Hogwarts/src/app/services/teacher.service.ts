import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Character } from '../models/character';

@Injectable({
    providedIn: 'root'
})
export class TeacherService {
    constructor(private http: HttpClient) { }
    getCharacters(): Observable<Character[]> {
        const urlService = `${environment.URL_SERVICE}/staff`;
        return this.http.get<Character[]>(urlService);
    }

}