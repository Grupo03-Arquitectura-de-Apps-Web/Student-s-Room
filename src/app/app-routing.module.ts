import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisComponent } from './component/pais/pais.component';
import { PaisInsertarComponent } from './component/pais/pais-insertar/pais-insertar.component';
import { HomeComponent } from './component/home/home.component';
import { PlanComponent } from './component/plan/plan.component';
import { PlanInsertarComponent } from './component/plan/plan-insertar/plan-insertar.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'paises',
    component: PaisComponent,
    children: [
      {
        path: 'paisesinsertar',
        component: PaisInsertarComponent,
      },
      {
        path:'edicion/:id',
        component:PaisInsertarComponent
      }
    ],
  },
  {
    path: 'plans',
    component: PlanComponent,
    children: [
      {
        path: 'plansinsertar',
        component: PlanInsertarComponent,
      },
      {
        path: 'edicion/:id',
        component: PlanInsertarComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
