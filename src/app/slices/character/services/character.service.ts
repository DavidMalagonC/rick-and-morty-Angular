import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character } from '../models/character.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private apiUrl = `${environment.apiUrl}/characters`;

  constructor(private http: HttpClient) {}

  getCharacters(
    page: number = 1,
    name?: string,
    status?: 'Alive' | 'Dead' | 'unknown',
    species?: string,
    type?: string,
    gender?: 'Female' | 'Male' | 'Genderless' | 'unknown'
  ): Observable<{ characters: Character[]; pagination: { count: number; pages: number; next: number | null } }> {
    let params = new HttpParams().set('page', page);

    if (name) params = params.set('name', name);
    if (status) params = params.set('status', status);
    if (species) params = params.set('species', species);
    if (type) params = params.set('type', type);
    if (gender) params = params.set('gender', gender);

    return this.http.get<any>(this.apiUrl, { params }).pipe(
      map(response => {
        const characters = response.characters || [];
        const pagination = {
          count: response.pagination?.count || 0,
          pages: response.pagination?.pages || 0,
          next: response.pagination?.next || null,
        };
        return { characters, pagination };
      })
    );
  }

  getCharacter(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.apiUrl}/${id}`);
  }

  createCharacter(character: Character): Observable<Character> {
    return this.http.post<Character>(this.apiUrl, character);
  }

  updateCharacter(id: number, character: Partial<Character>): Observable<Character> {
    return this.http.put<Character>(`${this.apiUrl}/${id}`, character);
  }

  deleteCharacter(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}