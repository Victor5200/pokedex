import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PokemonDetalheComponent} from './pokemon-detalhe/pokemon-detalhe.component';
import {BuscarPokemonComponent} from './buscar-pokemon/buscar-pokemon.component';

const routes: Routes = [
  { path: 'detalhar-pokemon/:nome', component: PokemonDetalheComponent },
  { path: 'buscar-pokemon', component: BuscarPokemonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
