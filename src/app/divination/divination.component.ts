import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divination',
  templateUrl: './divination.component.html',
  styleUrls: ['./divination.component.css']
})
export class DivinationComponent implements OnInit {
  nombreInconnu: number;
  shoot = 0;
  afficherBravo = false;
  nombreDeCoups = 10;

  coupsRestants = 5;

  constructor() {
  }

  ngOnInit() {
    this.initNombre();
  }

  initNombre() {
    this.nombreInconnu = Math.floor(Math.random() * 10);
  }

  register() {
    if (this.shoot === this.nombreInconnu) {
      this.afficherBravo = true;
    }
    if (this.shoot > this.nombreInconnu) {
      this.afficherBravo = false;
      alert('trop haut');
      this.coupsRestants = this.coupsRestants - 1
    }
    else if (this.shoot < this.nombreInconnu) {
      this.afficherBravo = false;
      alert('trop bas')
      this.coupsRestants = this.coupsRestants - 1
    }
    if (this.coupsRestants === 0) {

    }
  }
}

