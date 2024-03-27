import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// LogService is only for keeping track of console log messages
export class LogService {

  matchNumber: number = 0;

  tournamentLog: string[] = [];
  matchGroups: string[][] = [];

  // Adds a log to history
  newLog(log: string) {
    this.tournamentLog.push(log);
  }

  // Pushes the existing logs to a new match group and then resets the logs
  newMatchGroup() {
    this.matchGroups.push(this.tournamentLog);
    this.tournamentLog = [];
    
    this.matchNumber++;
  }
  // Returns an array of match groups. each match group is an array of strings containing the logs for that match
  getMatchGroups(): string[][] {
    return this.matchGroups;
  }

}
