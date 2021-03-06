import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscarPokemonComponent } from './buscar-pokemon/buscar-pokemon.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { PokemonDetalheComponent } from './pokemon-detalhe/pokemon-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscarPokemonComponent,
    PokemonDetalheComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
