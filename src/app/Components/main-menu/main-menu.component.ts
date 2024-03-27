import { Component } from '@angular/core';
import { Wrestler } from '../../models/wrestler.model';
import { TournamentService } from '../../services/tournament.service';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent {

  createMenu: boolean = false;
  wrestlerMenu: boolean = false;

  results: boolean = false;

  constructor(
    private tournamentService: TournamentService,
    private logService: LogService
  ) {}

  // Starts the tournament :)
  startNewTournament() {
    this.tournamentService.tournament();
    this.results = true;
  }

  // Adds a wrestler to the tournaments wrestler array
  addWrestler(wrestler: Wrestler) {
    this.tournamentService.realWrestlers.push(wrestler);
  }

  // Removes a wrestler from the Tournament
  removeWrestler(i: number) {
    this.tournamentService.realWrestlers.splice(i, 1);
  }

  // Turns the create wrestler menu on/off
  toggleCreateMenu() {
    this.createMenu = !this.createMenu;
  }

  // Turns the view wrestler menu on/off
  toggleWrestlerMenu() {
    this.wrestlerMenu = !this.wrestlerMenu;
  }

  // Run the tournament using only the wrestlers from WRESTLERS
  useMockWrestlers() {
    this.tournamentService.mockWrestlers();
    this.startNewTournament();
  }

  // Since there is no backend, simply just refresh the page to reset the app
  reset() {
    location.reload();
  }

  // Returns an array of the wrestler objects
  getTourneyWrestlers(): Wrestler[] {
    return this.tournamentService.realWrestlers;
  }

  // Returns an array of match groups. each match group is an array of strings containing the logs for that match
  getMatchGroups(): string[][] {
    return this.logService.getMatchGroups();
  }

}
