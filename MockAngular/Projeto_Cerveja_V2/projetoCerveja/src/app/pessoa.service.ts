import { PessoaModel } from './pessoa.model';

export class PessoaService{

    // public class Pessoa{
        // private int numero;
        // private string nome;

        // getters and setters
    // }
    pessoas: PessoaModel[] = [
        new PessoaModel('Kaua', 129876759)
    ];

    getPessoas(){
        return this.pessoas.slice();
    }
}
