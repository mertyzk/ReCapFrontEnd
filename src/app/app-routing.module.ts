import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';

const routes: Routes = [
  {path: "",pathMatch:"full" ,component:CarComponent}, // "" bir yol seçili değilken ana sayfamızda CarComponent olacak (router outlet için görünecek olan komponent)
  {path:"cars", component:CarComponent}, // adres yolu /x yapıldığında açılacak olan komponentimiz
  {path:"cars/brand/:brandId", component:CarComponent},
  {path:"cars/color/:colorId", component:CarComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
