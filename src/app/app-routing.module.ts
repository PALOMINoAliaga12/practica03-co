import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar el nuevo IndexComponent en lugar de HomeComponent
import { HomeComponent } from "./components/home/home.component";
import { ServiciosComponent } from "./components/servicios/servicios.component";
import { ProductoComponent } from "./components/producto/producto.component";
import { MarcasComponent } from "./components/marcas/marcas.component";
import { ContactenosComponent } from "./components/contactenos/contactenos.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NosotrosComponent } from "./components/nosotros/nosotros.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'marcas', component: MarcasComponent },
  { path: 'contactenos', component: ContactenosComponent },
  { path: 'footer', component: FooterComponent } // Pie de página
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
