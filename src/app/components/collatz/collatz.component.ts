import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-collatz',
  templateUrl: './collatz.component.html',
  styleUrls: ['./collatz.component.css']
})
export class CollatzComponent implements OnInit{
  public number!: number;
  public collatzSequence: number[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.number = +params['number'];
      this.calculateCollatz();
    });
  }

  calculateCollatz() {
    let n = this.number;
    this.collatzSequence = [n];

    while (n !== 1) {
      if (n % 2 === 0) {
        n = n / 2;
      } else {
        n = 3 * n + 1;
      }
      this.collatzSequence.push(n);
    }
  }
}
