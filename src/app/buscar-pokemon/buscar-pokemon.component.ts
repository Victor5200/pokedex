import { Component, OnInit } from '@angular/core';
import {PokemonApiService} from '../service/pokemon-api-service';
import {FormBuilder, FormGroup} from '@angular/forms';

export class Pokemon  {
  nome: string;
  urlImg: string;
  ordem: number;
  tipos: any;
}


@Component({
  selector: 'app-buscar-pokemon',
  templateUrl: './buscar-pokemon.component.html',
  styleUrls: ['./buscar-pokemon.component.scss']
})
export class BuscarPokemonComponent implements OnInit {
  pokemons: Pokemon[] = [];
  formulario: FormGroup;

  constructor(private pokemonApiService: PokemonApiService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buscarPokemon();
  }

  async buscarPokemon(): Promise<void> {
    const resp = await this.pokemonApiService.searchAllPokemon().toPromise();
    const resultado = resp.results;

    for (const rest of resultado) {
      const pokeName = await this.pokemonApiService.searchPokemonByName(rest.name).toPromise();
      this.pokemons.push({
        nome: pokeName.name,
        urlImg: pokeName.sprites.other['official-artwork'].front_default,
        ordem: pokeName.order,
        tipos: pokeName.types
      });
    }
  }

  pad(num, size): string {
    let s = num + '';
    while (s.length < size) {
      s = '0' + s;
    }
    return s;
  }
}
