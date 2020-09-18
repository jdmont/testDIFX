import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersComponent } from './characters/characters.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { CharacterRoutingModule } from './character-routing.module';

// Services
import { CharacterService } from 'src/app/services/character.service';

@NgModule({
  declarations: [CharactersComponent],
  imports: [
    CommonModule,
    SharedModule, 
    CharacterRoutingModule
  ],
  providers: [
    CharacterService
  ],
  exports: [
    CharactersComponent]
})
export class CharacterModule { }
