import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormProduitComponentComponent } from './form-produit-component/form-produit-component.component';
import { ProduitsComponent } from './produits/produits.component';

const routes : Routes =[
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'detail/:id',component:FormProduitComponentComponent},
  {path:'produits',component:ProduitsComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
