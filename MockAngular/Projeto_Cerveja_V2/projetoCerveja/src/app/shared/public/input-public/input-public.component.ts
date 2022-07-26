import { AbstractControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-public',
  templateUrl: './input-public.component.html',
  styleUrls: ['./input-public.component.scss']
})
export class InputPublicComponent implements OnInit {

  @Input() public referenciaFormulario?: AbstractControl;
  @Input() public imagem?: string;
  @Input() public tipo?: string;
  @Input() public placeholder?: string;
  
  constructor() { }

  ngOnInit(): void {
  }

  public aoModificarCampo(event: any): void{
    this.referenciaFormulario?.setValue(event);
    this.referenciaFormulario?.markAsDirty();
    console.log(event);
  }

  public obterMensagemErro(): string{
    if (!this.referenciaFormulario?.errors){
      return '';
    }

    if (this.referenciaFormulario?.errors['required']){
      return 'Campo Obrigatorio';
    }

    return 'Problemas no Preenchimento';

  }
}
