import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../Services/product.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  displayAgregar = false
  product = {
    titulo: "",
    precio: "",
    img: ""
  }
  productsGet = []
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data)=>{
      this.productsGet = data
    })
  }
  saveProduct(){
    this.displayAgregar = false
    this.productService.saveProduct(this.product).subscribe(()=>{
    })
  }
  eliminarProduct(id: any){
    this.productService.deleteProduct(id).subscribe(()=>{
      console.log("producto eliminado")
      this.productService.getProducts().subscribe((data)=>{
        this.productsGet = data
      })
    }, error => {
      console.log("producto no eliminado")
    })
  }

}
