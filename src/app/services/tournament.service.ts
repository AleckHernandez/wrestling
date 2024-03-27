import { Injectable } from '@angular/core';
import { MatchService } from './match.service';
import { LogService } from './log.service';
import { Wrestler } from '../models/wrestler.model';
import { WRESTLERS } from '../mocks/mock-wrestlers';
import { WrestlerService } from './wrestler.service';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor(
    private matchService: MatchService,
    private logService: LogService,
    private wrestlerService: WrestlerService
  ) { }

  // Array of wrestler objects
  realWrestlers: Wrestler[] = [];

  useMockWrestlers: boolean = false;

  matchCount = 1;

  mockWrestlers() {
    this.useMockWrestlers = !this.useMockWrestlers;
  }

  // Runs the tournament and prints out the winner
  tournament(){

    let competitors = this.realWrestlers;

    if (this.useMockWrestlers) {
      competitors = WRESTLERS;
    }
    this.wrestlerService.setWrestlers(competitors);

    do {
      // sets competitors equal to all the winners from the current level
      competitors = this.tournamentLevel(competitors);
    }
    while (competitors.length > 1);
    
    console.log(`${competitors[0].name} wins the tournament!`);
    this.logService.newLog(`<h1>${competitors[0].name} wins the tournament!</h1>`);
    this.logService.newMatchGroup();
  }

  // Runs through a single level of the tournament. Return an array of all the winners from this level.
  tournamentLevel(competitors: Wrestler[]): Wrestler[] {
    let winners = []; // Array of winning wrestlers

    let matchUp = []; // Current wrestler match up

    for (let i = 0; i < competitors.length; i++) {
      matchUp.push(competitors[i]);

      // Once match up has enough competitors, run the match!
      if (matchUp.length == 2) { 
        console.log(`Match ${this.matchCount}: ${matchUp[0].name} vs. ${matchUp[1].name}`);
        this.logService.newLog(`<h2>Match ${this.matchCount}: ${matchUp[0].name} vs. ${matchUp[1].name}</h2>`);
        winners.push(this.matchService.startMatch(matchUp[0], matchUp[1]));
        this.matchCount++;

        matchUp = [];
        this.logService.newMatchGroup();
      }

      // If its the last index in competitors and there's not a full match up, advance the existing wrestler
      if (i == competitors.length - 1 && matchUp.length == 1) {
        console.log(`Match ${this.matchCount}: ${matchUp[0].name} advances by bye.`);
        this.logService.newLog(`<h2>Match ${this.matchCount}: ${matchUp[0].name} advances by bye.</h2>`);
        winners.push(matchUp[0]);
        this.matchCount++;

        matchUp = [];
        this.logService.newMatchGroup();
      }
    }

    // Resets the health of each winner so they can proceed to the next level
    winners.forEach(winner => {
      this.wrestlerService.resetHealth(winner);
    });
    return winners;
  }
}
