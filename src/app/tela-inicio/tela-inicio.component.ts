/** Este projeto foi adaptado para o Angular a
    a partir do projeto de jogo da velha em Javascript/jquery dos
    professores Jamilton Damasceno e Jorge Santana
    no "Curso completo de desenvolvimento em Javascript"
    da plataforma Udemy.
*/
import { Component, OnInit } from '@angular/core';
import { Jogador } from '../modelo/jogador';
import { JogoVelhaService } from '../modelo/jogo-velha.service';


@Component({
  selector: 'app-tela-inicio',
  templateUrl: './tela-inicio.component.html',
  styleUrls: ['./tela-inicio.component.css']
})
export class TelaInicioComponent implements OnInit {
  imgPath: string;
  mostrarInicio: boolean;

  imgIniciar: string;
  jogador1: Jogador;
  jogador2: Jogador;

  constructor(private jogo: JogoVelhaService) {
    this.mostrarInicio = true;
    //Caminho para a pasta de imagens
    this.imgPath='../../assets/img/';
    //caminho para a imagem iniciar
    this.imgIniciar = this.imgPath + 'iniciar.png';

    //Inicialização do jogador 1
    this.jogador1 = new Jogador();
    this.jogador1.imagem = this.imgPath + 'jogador_1.png';

    //Inicialização do jogador 2
    this.jogador2 = new Jogador();
    this.jogador2.imagem = this.imgPath + 'jogador_2.png';
  }

  ngOnInit() {
  }

  iniciarJogo() {
    //aparecer tela jogo
    this.mostrarInicio = false;

    //Iniciar o jogo no serviço
  }

}
