import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersComponent } from './characters/characters.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
// Services
import { CharacterService } from 'src/app/services/character.service';

@NgModule({
  declarations: [CharactersComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule

  ],
  providers: [
    CharacterService
  ],
  exports: [
    CharactersComponent]
})
export class CharacterModule { }
