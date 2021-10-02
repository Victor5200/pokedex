import {Component, OnInit} from '@angular/core';
import {PokemonApiService} from '../service/pokemon-api-service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

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
              private formBuilder: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: []
    });

    this.buscarPokemon();
  }

  async buscarPokemon(): Promise<void> {
    const resp = await this.pokemonApiService.searchAllPokemon().toPromise();
    const lista = [] as Pokemon[];
    const resultado = resp.results;

    for (const rest of resultado) {
      const pokeName = await this.pokemonApiService.searchPokemonByName(rest.name).toPromise();
      lista.push({
        nome: pokeName.name,
        urlImg: pokeName.sprites.other['official-artwork'].front_default,
        ordem: pokeName.order,
        tipos: pokeName.types
      });
    }

    this.pokemons = lista;
  }

  pad(num, size): string {
    let s = num + '';

    while (s.length < size) {
      s = '0' + s;
    }

    return s;
  }

  detalhes(nome: string): void {
    this.router.navigate([ 'detalhar-pokemon', nome]);
  }

  async buscarPokemonPorNome(): Promise<void> {
    this.pokemons = [];

    const formulario = this.formulario.value;

    if (formulario.nome) {
      const pokeName = await this.pokemonApiService.searchPokemonByName(formulario.nome.toLowerCase()).toPromise();

      this.pokemons.push({
        nome: pokeName.name,
        urlImg: pokeName.sprites.other['official-artwork'].front_default,
        ordem: pokeName.order,
        tipos: pokeName.types
      });
    } else {
      await this.buscarPokemon();
    }
  }
}
