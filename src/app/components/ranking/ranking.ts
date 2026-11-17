import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ranking.html',
  styleUrl: './ranking.css',
})
export class Ranking {
  winners = [
    {
      name: 'Player 2',
      score: 'RM 2,500',
      rank: 2
    },
    {
      name: 'Player 1',
      score: 'RM 3,800',
      rank: 1
    },
    {
      name: 'Player 3',
      score: 'RM 1,600',
      rank: 3
    }
  ];
}
