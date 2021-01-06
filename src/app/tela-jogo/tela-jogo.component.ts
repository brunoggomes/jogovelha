/** Este projeto foi adaptado para o Angular a
    a partir do projeto de jogo da velha em Javascript/jquery dos
    professores Jamilton Damasceno e Jorge Santana
    no "Curso completo de desenvolvimento em Javascript"
    da plataforma Udemy.
*/
import { Component, OnInit, Input } from '@angular/core';
import { Jogador } from '../modelo/jogador';
import { JogoVelhaService } from '../modelo/jogo-velha.service';

@Component({
  selector: 'app-tela-jogo',
  templateUrl: './tela-jogo.component.html',
  styleUrls: ['./tela-jogo.component.css']
})
export class TelaJogoComponent implements OnInit {
  @Input() j1: Jogador;
  @Input() j2: Jogador;
  existeVencedor: boolean;
  mensagemVencedor: string;

  constructor(private jogo: JogoVelhaService) {
    this.j1 = new Jogador();
    this.j2 = new Jogador();
    this.existeVencedor = false;
    this.mensagemVencedor = '';
  }

  ngOnInit() {
    this.jogo.iniciar(this.j1, this.j2);
  }

  jogar(evt) {
    this.jogo.jogar(evt);
    this.existeVencedor = this.jogo.existeVencedor;
    this.mensagemVencedor = this.jogo.mensagemVencedor;
  }

  atualizarMarca(lin: string, col: number) {
    return this.jogo.atualizarMarca(lin, col);
  }

}
