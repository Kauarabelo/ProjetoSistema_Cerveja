import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PessoaModel } from './pessoa.model';
import { PessoaService } from './pessoa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projetoCerveja';
  pessoas: PessoaModel[] = [];

  public form: FormGroup;
  constructor(private fb: FormBuilder, private pessoa: PessoaService){
    this.pessoas = this.pessoa.getPessoas();
    this.form = this.fb.group({
      imagem: [null],
      nome: ['', Validators.required],
      senha: ['',Validators.required]
    });
  }

  public aoTrocarImagem(){
    console.log('Imagem Alterada')
  }

  public obterReferencia(nomeCampo: string): AbstractControl{
    console.log(nomeCampo);
    return this.form.controls[nomeCampo];
  }

  public submit(): void{
    console.log(this.form.value);
  }
}
