import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./Components/home/home.component";
import {TiendaComponent} from "./Components/tienda/tienda.component";
import {ContactoComponent} from "./Components/contacto/contacto.component";
import {AdminComponent} from "./Components/admin/admin.component";

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "tienda", component: TiendaComponent},
  {path: "contacto", component: ContactoComponent},
  {path: "administracion", component: AdminComponent},
  {path: "*", redirectTo: "home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
