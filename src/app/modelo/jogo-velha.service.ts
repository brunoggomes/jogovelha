/** Este projeto foi adaptado para o Angular a
    a partir do projeto de jogo da velha em Javascript/jquery dos
    professores Jamilton Damasceno e Jorge Santana
    no "Curso completo de desenvolvimento em Javascript"
    da plataforma Udemy.
*/
import { Injectable } from '@angular/core';
import { Jogador } from './jogador';

@Injectable()
export class JogoVelhaService {
  tabuleiro: number[];
  rodada: number;
  existeVencedor: boolean;
  mensagemVencedor: string;
  jog1: Jogador;
  jog2: Jogador;

  constructor() {
    this.jog1 = new Jogador();
    this.jog2 = new Jogador();
    this.tabuleiro = new Array(3);
  }

  iniciar(j1: Jogador, j2: Jogador) {
    this.jog1 = j1;
    this.jog2 = j2;

    this.tabuleiro['a'] = new Array();
    this.tabuleiro['a'][1] = 0;
    this.tabuleiro['a'][2] = 0;
    this.tabuleiro['a'][3] = 0;

    this.tabuleiro['b'] = new Array();
    this.tabuleiro['b'][1] = 0;
    this.tabuleiro['b'][2] = 0;
    this.tabuleiro['b'][3] = 0;

    this.tabuleiro['c'] = new Array();
    this.tabuleiro['c'][1] = 0;
    this.tabuleiro['c'][2] = 0;
    this.tabuleiro['c'][3] = 0;

    this.rodada = 1; //primeira rodada;
    this.existeVencedor = false;
    this.mensagemVencedor = '';

    //console.log(this.jog1);
    //console.log(this.jog2);
  }

  jogar(event: MouseEvent) {
    //console.log(event);
    let id = event.srcElement['id'];
    //console.log(id);
    let ponto = 0;

    if (!this.rodadaPar(this.rodada) && this.sem_jogada(id)) {
      ponto = -1;
    } else if (this.rodadaPar(this.rodada) && this.sem_jogada(id)) {
      ponto = 1;
    }
    console.log(ponto);
    if (ponto != 0) {
      //obter a posição jogada e atualiza a pontuação
      let pos = id.split('-');
      this.tabuleiro[pos[0]][pos[1]] = ponto;
      this.verificar_vencedor (this.tabuleiro);
      this.rodada++;
    }
  }

  private rodadaPar(rodada) {
    return rodada % 2 == 0;
  }

  //quadrado do tabuleiro sem marcação (sem jogada)
  private sem_jogada(id) {
    var pos = id.split('-');
    return this.tabuleiro[pos[0]][pos[1]] == 0;
  }

  atualizarMarca(lin: string, col: number) {
    if (this.tabuleiro[lin][col] == -1) {
      return 'imagem_xis';
    } else if (this.tabuleiro[lin][col] == 1) {
      return 'imagem_bola';
    }
  }

  verificar_vencedor(tab: number[]) {
    /* combinação horizontal */
    let pontos: number = 0;
    for (let i = 1; i <= tab.length; i++) {
      pontos += tab['a'][i];
    }

    this.registrar_vencedor(pontos);

    pontos = 0;
    for (let i = 1; i <= tab.length; i++) {
      pontos += tab['b'][i];
    }
    this.registrar_vencedor(pontos);

    pontos = 0;
    for (let i = 1; i <= tab.length; i++) {
      pontos += tab['c'][i];
    }
    this.registrar_vencedor(pontos);

    /* combinação vertical */
    for (let i = 1; i <= tab.length; i++) {
      pontos = 0;
      pontos = tab['a'][i] + tab['b'][i] + tab['c'][i];
      this.registrar_vencedor(pontos);
    }

    /* combinação diagonal */
    pontos = 0;
    pontos = tab['a'][1] + tab['b'][2] + tab['c'][3];
    this.registrar_vencedor(pontos);
    pontos = 0;
    pontos = tab['a'][3] + tab['b'][2] + tab['c'][1];
    this.registrar_vencedor(pontos);
  }

  registrar_vencedor(pontos: number) {
    if (pontos == -3) {
      this.existeVencedor = true;
      this.mensagemVencedor = this.jog1.nome + ' venceu!';
    } else if (pontos == 3) {
      this.existeVencedor = true;
      this.mensagemVencedor = this.jog2.nome + ' venceu!';
    }
  }
}
