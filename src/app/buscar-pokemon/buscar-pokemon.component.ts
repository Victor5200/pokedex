import { Component, OnInit } from '@angular/core';
import {PokemonApiService} from '../service/pokemon-api-service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-buscar-pokemon',
  templateUrl: './buscar-pokemon.component.html',
  styleUrls: ['./buscar-pokemon.component.scss']
})
export class BuscarPokemonComponent implements OnInit {
  pokemons: any;
  formulario: FormGroup;

  constructor(private pokemonApiService: PokemonApiService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: []
    });
  }

  buscarPokemon(): void {
    const formularioObjeto = this.formulario.value;
    this.pokemonApiService.searchPokemonByName(formularioObjeto.nome).subscribe(resp => {
      this.pokemons = resp;
    });
  }
}
