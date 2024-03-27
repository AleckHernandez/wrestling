import { Component, EventEmitter, Output } from '@angular/core';
import { Wrestler } from '../../models/wrestler.model';

@Component({
  selector: 'app-create-wrestler',
  templateUrl: './create-wrestler.component.html',
  styleUrls: ['./create-wrestler.component.css']
})
export class CreateWrestlerComponent {

  // This is like witchcraft to me
  @Output() wrestlerCreated = new EventEmitter<Wrestler>();

  wrestler: Wrestler = {
    name: '',
    health: 100,
    moves: [ { name: '', damage: 10, type: 'signature' } ]
  };


  onSubmit() {
    // The witchcraft
    this.wrestlerCreated.emit(this.wrestler);

    // Resets the wrestlers stats
    this.wrestler = {name: '', health: 100, moves: [ { name: '', damage: 10, type: 'signature' } ] };
  }

  // Adds a move to the wrestlers move array
  addMove() {
    this.wrestler.moves.push( {
      name: '', damage: 10, type: 'signature'
    });
  }

  // Removes move at that index
  removeMove(i: number) {
    this.wrestler.moves.splice(i, 1);
  }

}
