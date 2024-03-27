import { Injectable } from '@angular/core';
import { Wrestler } from '../models/wrestler.model';

@Injectable({
  providedIn: 'root'
})

// WrestlerService is mainly just used to reset the wrestlers health
export class WrestlerService {

  originalWrestlers: Wrestler[] = [];

  constructor() { }

  // Performs a deep copy. Not the most efficient method, but for this case I think it is fine
  setWrestlers(wrestlers: Wrestler[]) {
    wrestlers.forEach(wrestler => {
      this.originalWrestlers.push(JSON.parse(JSON.stringify(wrestler)));
    });
  }

  // Resets the wrestlers health. Takes in the wrestler that needs to be healed
  resetHealth(wrestler: Wrestler) {

    let matchedWrestler: Wrestler = wrestler;

    // Loops through the deep copy to find the wrestler with the same name 
    this.originalWrestlers.forEach(oWrestler => {
      if (wrestler.name == oWrestler.name) {
        matchedWrestler = oWrestler;
      }
    });

    // Adjusts health
    wrestler.health = matchedWrestler.health;
  }
}
