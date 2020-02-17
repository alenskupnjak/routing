import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  lista = [
    {
      id: 1,
      name: 'Alen',
      status: 'activan'
    },
    {
      id: 2,
      name: 'Ema',
      status: 'activan'
    },
    {
      id: 3,
      name: 'Tin',
      status: 'activan'
    },
    {
      id: 4,
      name: 'Mirela',
      status: 'Neaktivan'
    },

  ];
  constructor() { }

  ngOnInit() {
  }

}
