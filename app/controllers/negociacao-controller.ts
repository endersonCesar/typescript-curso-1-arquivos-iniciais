export class NegociacaoController{
    private inputData;
    private inputQuantidade;
    private inputValor;

    constructor(){
        this.inputData = document.querySelector("#data")
        this.inputQuantidade = document.querySelector("#quantidade")
        this.inputValor = document.querySelector("#documento");
    }

    adicionar(){
        console.log(this.inputData)
        console.log(this.inputQuantidade)
        console.log(this.inputValor)
    }
}