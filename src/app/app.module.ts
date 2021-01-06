import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TelaInicioComponent } from './tela-inicio/tela-inicio.component';
import { TelaJogoComponent } from './tela-jogo/tela-jogo.component';
import { JogoVelhaService } from './modelo/jogo-velha.service';


@NgModule({
  declarations: [
    AppComponent,
    TelaInicioComponent,
    TelaJogoComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [JogoVelhaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
