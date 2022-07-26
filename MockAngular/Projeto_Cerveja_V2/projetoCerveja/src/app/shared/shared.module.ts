import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotaoComponent } from './botao/botao.component';
import { ItemComponent } from './item/item.component';
import { UploadImagemComponent } from './upload-imagem/upload-imagem.component';
import { InputPublicComponent } from './public/input-public/input-public.component';



@NgModule({
  declarations: [
    BotaoComponent,
    ItemComponent,
    UploadImagemComponent,
    InputPublicComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    BotaoComponent,
    ItemComponent,
    UploadImagemComponent,
    InputPublicComponent
    
  ]
})
export class SharedModule { }
