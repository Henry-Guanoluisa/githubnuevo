import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  productos = [1,2,3,4,5,6,7,8,9,10,11,12]
  productsGet = []
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data:any)=>{
      this.productsGet = data.productos
    })
  }

}
