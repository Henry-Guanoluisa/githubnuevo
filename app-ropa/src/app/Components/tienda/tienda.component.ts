import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  productos = [1,2,3,4,5,6,7,8,9,10,11,12]
  constructor() { }

  ngOnInit(): void {
  }

}
