import { Component, OnInit } from '@angular/core';
import {PokemonApiService} from '../service/pokemon-api-service';

@Component({
  selector: 'app-buscar-pokemon',
  templateUrl: './buscar-pokemon.component.html',
  styleUrls: ['./buscar-pokemon.component.scss']
})
export class BuscarPokemonComponent implements OnInit {
  pokemons: any;

  constructor(private pokemonApiService: PokemonApiService) { }

  ngOnInit(): void {}

  buscarPokemon(): void {
    this.pokemonApiService.searchAllPokemon().subscribe(resp => {
      this.pokemons = resp.results;
    });
  }
}
