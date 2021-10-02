import { Component, OnInit } from '@angular/core';
import {PokemonApiService} from '../service/pokemon-api-service';

@Component({
  selector: 'app-pokemon-detalhe',
  templateUrl: './pokemon-detalhe.component.html',
  styleUrls: ['./pokemon-detalhe.component.scss']
})
export class PokemonDetalheComponent implements OnInit {
  pokemon: any;

  constructor(private pokemonApiService: PokemonApiService) { }

  ngOnInit(): void {
    this.pokemonApiService.searchPokemonByName('bulbasaur').subscribe(retorno => {
      this.pokemon = retorno;
    });
  }

}
