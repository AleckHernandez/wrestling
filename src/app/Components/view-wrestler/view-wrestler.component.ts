import { Component, Input } from '@angular/core';
import { Wrestler } from '../../models/wrestler.model';

@Component({
  selector: 'app-view-wrestler',
  templateUrl: './view-wrestler.component.html',
  styleUrls: ['./view-wrestler.component.css']
})
export class ViewWrestlerComponent {

  // Takes a wrestler object to display
  @Input() wrestler!: Wrestler
}
