import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter implements OnInit {
number = 123456;

  digits: string[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {

    this.updateDigits();

    setInterval(() => {

      this.number++;

      this.updateDigits();

      this.cdr.detectChanges();

    }, 1000);
  }

  updateDigits() {
    this.digits = this.number
      .toString()
      .padStart(10, '0')
      .split('');
  }
}
