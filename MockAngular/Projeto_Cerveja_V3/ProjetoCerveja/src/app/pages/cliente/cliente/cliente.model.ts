export class ClienteModel{
    
    public nome: string;
    public fone: number;
    public endereco: string;
  
    constructor(nome: string, fone:number, endereco: string){
        this.nome = nome;
        this.fone = fone;
        this.endereco = endereco;

    }
}