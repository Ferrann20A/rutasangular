import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menucollatz',
  templateUrl: './menucollatz.component.html',
  styleUrls: ['./menucollatz.component.css']
})
export class MenucollatzComponent implements OnInit{
  public aleatorios!:Array<number>;
  ngOnInit(): void {
    this.aleatorios = new Array<number>();
    for(let i = 1; i <= 7; i++){
      let random = Math.floor(Math.random()*100)+1;
      this.aleatorios.push(random);
    }
  }
}
