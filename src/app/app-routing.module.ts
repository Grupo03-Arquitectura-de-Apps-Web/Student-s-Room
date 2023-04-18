import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisComponent } from './component/pais/pais.component';
import { PaisInsertarComponent } from './component/pais/pais-insertar/pais-insertar.component';

const routes: Routes = [
  {
    path:'paises',component:PaisComponent,children:[
      {
        path:'paisesinsertar',component:PaisInsertarComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
