import { Injectable } from '@angular/core';
import { Wrestler } from '../models/wrestler.model';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(
    private logService: LogService
  ) { }


  // Holds a match between the two wrestlers. Returns the winning wrestler
  startMatch(wrestler1: Wrestler, wrestler2: Wrestler): Wrestler{

    let round = 1;
      
    // Loop until a wrestler wins
    while(true) { 

      console.log(`Round ${round}:`);
      this.logService.newLog(`<h3>Round ${round}:</h3>`);

      // Wrestler1 performs move on Wrestler2
      wrestler2 = this.performMove(wrestler1, wrestler2);
      if (wrestler2.health <= 0) {
        console.log(`${wrestler2.name}'s health is below 0. ${wrestler1.name} wins!`);
        this.logService.newLog(`<h4>${wrestler2.name}'s health is below 0. ${wrestler1.name} wins!</h4>`);
        return wrestler1;
      }
      
      // Wrestler2 performs move on Wrestler1
      wrestler1 = this.performMove(wrestler2, wrestler1);
      if (wrestler1.health <= 0) {
        console.log(`${wrestler1.name}'s health is below 0. ${wrestler2.name} wins!`);
        this.logService.newLog(`<h4>${wrestler1.name}'s health is below 0. ${wrestler2.name} wins!</h4>`);
        return wrestler2;
      }

      round++; // Increases round
    }
  }


  // Performs a random move from offense onto defense. Returns defense after move is performed
  performMove(offense: Wrestler, defense: Wrestler): Wrestler {

    // Picks a random move from offense's movepool to use
    const moveIndex = this.randomNumber(offense.moves.length);
    const move = offense.moves[moveIndex];

    
    
    // Accounts for finisher's 50% chance of failing
    if (move.type == 'finisher' && defense.health > 45) { // If finisher move and health is over 45
      if (this.randomNumber(2) == 0) { // 50% chance of failing
        console.log(`${offense.name} performs ${move.name} on ${defense.name}. It failed!`);
        this.logService.newLog(`${offense.name} performs ${move.name} on ${defense.name}. It failed!`);
        return defense; 
      }
    }

    defense.health -= move.damage; // Adjusts health
    if (defense.health < 0) {
      defense.health = 0; // Since we don't to display a wrestler having negative health at the end
    }
    console.log(`${offense.name} performs ${move.name} on ${defense.name}. ${defense.name}'s health: ${defense.health}`);
    this.logService.newLog(`${offense.name} performs ${move.name} on ${defense.name}. ${defense.name}'s health: ${defense.health}`);

    return defense;
  }

  // Just returns a random number between 0 and max (exclusive)
  randomNumber(max: number): number {
    return Math.floor(Math.random() * max);
  }
}

