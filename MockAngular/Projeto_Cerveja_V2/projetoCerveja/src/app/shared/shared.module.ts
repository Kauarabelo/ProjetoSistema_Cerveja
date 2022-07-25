import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotaoComponent } from './botao/botao.component';
import { ItemComponent } from './item/item.component';
import { UploadImagemComponent } from './upload-imagem/upload-imagem.component';



@NgModule({
  declarations: [
    BotaoComponent,
    ItemComponent,
    UploadImagemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BotaoComponent,
    ItemComponent,
    UploadImagemComponent
  ]
})
export class SharedModule { }
