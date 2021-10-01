import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PokemonApiService {
  uploadUrl = `${environment.url}`;

  constructor(protected http: HttpClient) {}

  searchPokemonByName(nome: string): Observable<any> {
    return this.http.get<any>(`${this.uploadUrl}pokemon/${nome}` );
  }

  searchAllPokemon(): Observable<any> {
    return this.http.get<any>(`${this.uploadUrl}pokemon?limit=1118&offset=200` );
  }
}
