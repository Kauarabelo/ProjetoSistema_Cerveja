import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppMaterialModule } from './app-material/app-material.module';
import { BotaoComponent } from './botao/botao.component';
import { ItemComponent } from './item/item.component';
import { InputPublicComponent } from './public/input-public/input-public.component';
import { UploadImagemComponent } from './upload-imagem/upload-imagem.component';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';



@NgModule({
  declarations: [
    BotaoComponent,
    ItemComponent,
    UploadImagemComponent,
    InputPublicComponent,
    ErrorDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppMaterialModule
  ],
  exports: [
    BotaoComponent,
    ItemComponent,
    UploadImagemComponent,
    InputPublicComponent,
    ErrorDialogComponent

  ]
})
export class SharedModule { }
