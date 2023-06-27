import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  valor: number = 0;
  memoria: number = 0;
  operacao: string = "";
  ponto: string = "";
  iscomma = false;


  constructor() {}

  //-- função para tratar numeros

  clickBotao(parametro: string){
    this.valor = Number(""+this.valor+this.ponto+parametro);
    this.ponto=""
  }

  //-- função para +/- e ,
  
  clickOutros(parametro: string){

    if (parametro == "+-") {
      this.valor = (this.valor * -1);
    } 
    
    else if (parametro == ",") {

      if (!(String(this.valor).indexOf(".")>0)) {
        this.ponto=".";
      }
    } 
    
    else if (parametro == "C"){
      this.valor = 0;
      this.memoria = 0;
      this.operacao = "";
      this.ponto = "";
    }

    else if (parametro == "--") {
        this.valor = this.valor = 0;
    }

    else if (parametro == "%") {
        this.memoria = Number(this.valor=0) / 100;
        this.memoria = this.memoria;

  }

  }
  

  calcula(tipo:string) {

    if (this.operacao == "") {
      this.memoria=this.valor;
    }

    else if (this.operacao == "+") {
      this.memoria = this.memoria + this.valor;
    }

    else if (this.operacao == "-") {
      this.memoria = this.memoria - this.valor;
    }

    else if (this.operacao == "X") {
      this.memoria = this.memoria * this.valor;
    }

    else if (this.operacao == "/") {
      this.memoria = this.memoria / this.valor ;     
    }

    else if (this.operacao == "X²") {
      this.memoria = this.memoria ** this.valor;     
      // if (this.operacao == "X²"){
      //   this.calcula+this.clickBotao+this.clickOutros === (this.tipo=="=")
      // } 
    }

    else if (this.operacao == "√") {
      this.memoria = Math.sqrt(this.memoria);     
    }

    if (tipo=="=") {
      this.valor=this.memoria;
      this.memoria=0;
      this.operacao="";
    } 
    
    else {
    this.operacao=tipo;
    this.valor=0;
    }
  }
}