import { Wrestler } from "../models/wrestler.model";
import { Move } from "../models/move.model";


// premade set of wrestlers (may or may not be me and my flatmates)
export const WRESTLERS: Wrestler[] = [
    { name: 'Aleck', health: 200, moves: [ 
        { name: 'Coding Hyperfixation', damage: 20, type: 'signature' }, 
        { name: 'Pickleball Mallet', damage: 10, type: 'signature' }, 
        { name: 'Unhealthy Sleep Schedule', damage: 30, type: 'signature' },
        { name: 'Throw Pokeball', damage: 50, type: 'finisher' } ] 
    },
    { name: 'Trey', health: 175, moves: [ 
        { name: 'Spinning Piledriver', damage: 40, type: 'signature' }, 
        { name: 'Emotional Damage', damage: 30, type: 'signature' }, 
        { name: 'Reverse Croch Kick', damage: 20, type: 'signature' },
        { name: 'Flying Tornado', damage: 75, type: 'finisher' } ] 
    },
    { name: 'Maria', health: 150, moves: [ 
        { name: 'Fall Apart', damage: 30, type: 'signature' }, 
        { name: 'Take a Nap', damage: 40, type: 'signature' }, 
        { name: 'Energy Drink', damage: 50, type: 'signature' }, 
        { name: 'Molotov Cocktail', damage: 100, type: 'finisher' } ] 
    },
    { name: 'Julia', health: 125, moves: [ 
        { name: 'Milk', damage: 60, type: 'signature' }, 
        { name: 'Rip Off Shoulder', damage: 50, type: 'signature' }, 
        { name: 'Painful Massage', damage: 40, type: 'signature' }, 
        { name: 'Slow Frog Blink', damage: 125, type: 'finisher' } ] 
    }
]