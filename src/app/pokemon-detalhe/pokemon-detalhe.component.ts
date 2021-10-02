import {Component, OnInit} from '@angular/core';
import {PokemonApiService} from '../service/pokemon-api-service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-pokemon-detalhe',
    templateUrl: './pokemon-detalhe.component.html',
    styleUrls: ['./pokemon-detalhe.component.scss']
})
export class PokemonDetalheComponent implements OnInit {
    pokemon: any;

    constructor(private pokemonApiService: PokemonApiService, private router: Router, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(param => {
            this.pokemonApiService.searchPokemonByName(param.nome).subscribe(retorno => {
                this.pokemon = retorno;
            });
        });
    }

    pad(num, size): string {
        let s = num + '';
        while (s.length < size) {
            s = '0' + s;
        }
        return s;
    }
}
