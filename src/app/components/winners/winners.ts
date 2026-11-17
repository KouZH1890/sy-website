import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-winners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './winners.html',
  styleUrl: './winners.css',
})
export class Winners implements OnInit {
  constructor(
    private cdr: ChangeDetectorRef
  ) {}

  names = [
    'John',
    'Sarah',
    'Mike',
    'Alex',
    'David',
    'Kevin',
    'Chris'
  ];

  actions = [
    'won RM500',
    'won RM1000',
    'deposited RM200',
    'withdrew RM300',
    'claimed bonus RM100'
  ];

  times = [
    '2 seconds ago',
    '5 seconds ago',
    '10 seconds ago',
    '15 seconds ago',
    '20 seconds ago'
  ];

  feedHistory: any[] = [];

  generateFeed() {

    const feed = {
      name: this.names[Math.floor(Math.random() * this.names.length)],
      action: this.actions[Math.floor(Math.random() * this.actions.length)],
      time: this.times[Math.floor(Math.random() * this.times.length)]
    };

    this.feedHistory.unshift(feed);

    console.log(this.feedHistory);

    if (this.feedHistory.length > 10) {
      this.feedHistory.pop();
    }
  }

  ngOnInit() {

    this.generateFeed();

    setInterval(() => {

      this.generateFeed();

      this.cdr.detectChanges();

    }, 5000);

  }
}
