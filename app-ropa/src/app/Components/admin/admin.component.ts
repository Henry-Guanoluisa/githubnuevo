import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../Services/product.service";
import { Router } from '@angular/router';

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
    imagen: ""
  }
  productUpdate = {
    titulo: "",
    precio: "",
    imagen: "",
    _id:""
  }
  productsGet = []
  displayActualizar = false
  idProduct: any
  constructor(private productService: ProductService, private router:Router) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data:any)=>{
      this.productsGet = data.productos
    })
  }
  saveProduct(forma:any){
    this.displayAgregar = false
    console.log(this.product)
    this.productService.saveProduct(this.product).subscribe(()=>{
      forma.reset()
      window.location.reload()
    })
  }
  eliminarProduct(id: any){
    this.productService.deleteProduct(id).subscribe(()=>{
      console.log("producto eliminado")
      window.location.reload()
    }, error => {
      console.log("producto no eliminado")
    })
  }

  getIdProduct(id:any){
    this.idProduct = id
    this.productService.getProduct(this.idProduct).subscribe((product)=>{
      console.log(product)
      this.productUpdate.titulo = product.producto["titulo"]
      this.productUpdate.precio = product.producto["precio"]
      this.productUpdate.imagen = product.producto["imagen"]
      this.productUpdate._id = product.producto["_id"]
      this.displayActualizar = true
    })
  }
  updateProduct(forma:any){
    this.productService.updateProduct(this.productUpdate).subscribe(()=>{
      window.location.reload()
      forma.reset()
      console.log("prodcuto actualizado")
      this.displayActualizar = false
    }, error => {
      console.log("no se pudo actualizar")
    })
  }

}
