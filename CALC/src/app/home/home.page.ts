import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  valor: number = 0;      //
  memoria: number = 0;    //declaraçao de variavel
  operacao: string = "";  //
  ponto: string = "";     //
  resultado: number = 0;   


  constructor() {}

  //-- função para tratar numeros

  clickBotao(parametro: string){
    this.valor = Number(""+this.valor+this.ponto+parametro);
    this.ponto=""
  }

  //-- função para +/- e , e C e backspace
  
  clickOutros(parametro: string){

    if (parametro == "+-") {            //
      this.valor = (this.valor * -1);   // se o parametro for +- pega o valor que vc digitou e multplica por -1 mudando o sinal
    }                                   //
    
    else if (parametro == ",") {                   //
                                                   //
      if (!(String(this.valor).indexOf(".")>0)) {  // se o parametro for , entao o valor diferente de string sera adicionado
        this.ponto=".";                            // um . que é o parametro que faz oq a virgula faz na programaçao
      }                                            // e tambem tranforma o . criado em um numero menor que 0 descendo uma classe gramatical
    }                                              //
    
    else if (parametro == "C"){   // 
      this.valor = 0;             //
      this.memoria = 0;           // se o parametro for C ela zerará tudo conseguentemente apagando os dados da telinha
      this.operacao = "";         //
      this.ponto = "";            //
    }

    else if (parametro == "--") {     //
        this.valor = this.valor  = 0; //se o parametro for -- zera o valor zerando a parte debaixo da conta
    }                                 //
  }
  
    //-- função para parametros de conta

  calcula(tipo:string) {

    if (this.operacao == "") {  //se  parametro for null o valor digitado sobe para a memoria ja prontro para receber o sinal
      this.memoria=this.valor;  //
    }

    else if (this.operacao == "+") {
      this.memoria = this.memoria + this.valor ;  // se  o parametro for + ele pega a memoria e faz a soma com o valor digitado
    }

    else if (this.operacao == "-") {
      this.memoria = this.memoria - this.valor; // se  o parametro for - ele pega a memoria e faz a subtraçao com o valor digitado
    }

    else if (this.operacao == "X") {
      this.memoria = this.memoria * this.valor; // se  o parametro for X ele pega a memoria e faz a multiplicaçao com o valor digitado
    }

    else if (this.operacao == "/") {  
      this.memoria = this.memoria / this.valor ;  // se  o parametro for / ele pega a memoria e faz a divisao com o valor digitado
    }

    else if (this.operacao == "X²") {
      this.memoria = this.memoria ** this.valor;   // se  o parametro for X2 ele pega a memoria e faz a potenciaçao com o valor digitado
      // if (this.operacao == "X²"){
      //   this.calcula+this.clickBotao+this.clickOutros === (this.tipo=="=")
      // } 
    }

    else if (this.operacao == "√") {
      this.memoria = Math.sqrt(this.memoria);  // se  o parametro for √ ele pega a memoria e faz a radiciaçao com o valor digitado
    }

    else if (this.operacao == "%") {
      this.memoria = this.memoria / 100;         // se  o parametro for % ele pega a memoria e faz a porcentagem com a memoria 
      this.memoria = this.memoria * this.valor;  // e depois multiplica pelo valor digitado

  }

    if (tipo=="=") {            //
      this.valor=this.memoria;  // se  o parametro for = ele pega o valor e da igual a memoria e zera a memoria e as operaçoes
      this.memoria=0;           //
      this.operacao="";         //
    } 
    
    else {
    this.operacao=tipo; //
    this.valor=0;
    }
  }
}