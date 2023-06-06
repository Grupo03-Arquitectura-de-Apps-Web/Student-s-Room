import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisComponent } from './component/pais/pais.component';
import { PaisInsertarComponent } from './component/pais/pais-insertar/pais-insertar.component';
import { HomeComponent } from './component/home/home.component';
import { PlanComponent } from './component/plan/plan.component';
import { PlanInsertarComponent } from './component/plan/plan-insertar/plan-insertar.component';
import { TipoComponent } from './component/tipo/tipo.component';
import { TipoInsertarComponent } from './component/tipo/tipo-insertar/tipo-insertar.component';
import { EstudianteComponent } from './component/estudiante/estudiante.component';
import { EstudianteInsertarComponent } from './component/estudiante/estudiante-insertar/estudiante-insertar.component';
import { UniversidadInsertarComponent } from './component/universidad/universidad-insertar/universidad-insertar.component';
import { UniversidadComponent } from './component/universidad/universidad.component';

import { MensajeComponent } from './component/mensaje/mensaje.component';
import { MensajeInsertarComponent } from './component/mensaje/mensaje-insertar/mensaje-insertar.component';

import { ContratodealquilerComponent } from './component/contratodealquiler/contratodealquiler.component';
import { ContratodealquilerInsertarComponent } from './component/contratodealquiler/contratodealquiler-insertar/contratodealquiler-insertar.component';
import { PublicacionComponent } from './component/publicacion/publicacion.component';
import { PublicacionInsertarComponent } from './component/publicacion/publicacion-insertar/publicacion-insertar.component';

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
  {
    path: 'tipo',
    component: TipoComponent,
    children: [
      {  path: 'tipoinsertar',component: TipoInsertarComponent},
      {path: 'edicion/:id', component:TipoInsertarComponent}
    ],
  },
  {
    path:'estudiante',
    component:EstudianteComponent,
    children:[
      {path:'estudianteinsertar', component:EstudianteInsertarComponent},
      {path:'edicion/:id',component:EstudianteInsertarComponent}
    ],
  },

  {
    path: 'universidad',
    component: UniversidadComponent,
    children: [
      {  path: 'universidadinsertar',component: UniversidadInsertarComponent},
      {path: 'edicion/:id', component:UniversidadInsertarComponent}
    ],
  },
  {
    path: 'contratodealquiler',
    component: ContratodealquilerComponent,
    children: [
      {  path: 'contratodealquilerinsertar',component: ContratodealquilerInsertarComponent},
      {path: 'edicion/:id', component:ContratodealquilerInsertarComponent}
    ],
  },

  {
    path: 'mensaje',
    component: MensajeComponent,
    children: [
      {  path: 'mensajesinsertar',component: MensajeInsertarComponent},
      {path: 'edicion/:id', component:MensajeInsertarComponent}
    ],
  },
  {
    path: 'publicacion',
    component: PublicacionComponent,
    children: [
      {  path: 'publicacioninsertar',component: PublicacionInsertarComponent},
      {path: 'edicion/:id', component:PublicacionInsertarComponent}
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
