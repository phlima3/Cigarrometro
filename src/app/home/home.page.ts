import { Component } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  quantidadeCigarro: number = null;
  quantidadeAnoFumando: number = null;
  tempoVidaPerdido: number = 0;
  rotuloTempo: string = "Dia(s)";

  constructor() {}

  calcularTempoVidaPerdido() {
    const totalDiasPorAno = 360;
    const minutoPerdidoPorCigarro = 10;
    const totalMinutosPorDia = 1440;
    let totalDiasFumando = this.quantidadeAnoFumando * totalDiasPorAno;
    let totalCigarroFumado = totalDiasFumando * this.quantidadeCigarro;
    this.tempoVidaPerdido = totalCigarroFumado * minutoPerdidoPorCigarro;
    this.tempoVidaPerdido = this.tempoVidaPerdido / totalMinutosPorDia;
    this.rotuloTempo = "Dia(s)";

      if(this.tempoVidaPerdido >=30){
        this.tempoVidaPerdido = this.tempoVidaPerdido/30;
        this.rotuloTempo = "Mes(es)";
      }
  }
}
