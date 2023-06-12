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
import { DistritoComponent } from './component/distrito/distrito.component';
import { DistritoInsertarComponent } from './component/distrito/distrito-insertar/distrito-insertar.component';
import { CiudadComponent } from './component/ciudad/ciudad.component';
import { CiudadInsertarComponent } from './component/ciudad/ciudad-insertar/ciudad-insertar.component';
import { ArrendadorComponent } from './component/arrendador/arrendador.component';
import { ArrendadorInsetarComponent } from './component/arrendador/arrendador-insetar/arrendador-insetar.component';
import { PublicacionfavoritaComponent } from './component/publicacionfavorita/publicacionfavorita.component';
import { PublicacionfavoritaInsertarComponent } from './component/publicacionfavorita/publicacionfavorita-insertar/publicacionfavorita-insertar.component';
import { HabitacionInsertarComponent } from './component/habitacion/habitacion-insertar/habitacion-insertar.component';
import { HabitacionComponent } from './component/habitacion/habitacion.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { ManagetoolbarComponent } from './component/managetoolbar/managetoolbar.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'admin',
    component:ToolbarComponent

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
        path: 'edicion/:id',
        component: PaisInsertarComponent,
      },
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
      { path: 'tipoinsertar', component: TipoInsertarComponent },
      { path: 'edicion/:id', component: TipoInsertarComponent },
    ],
  },
  {
    path: 'estudiante',
    component: EstudianteComponent,
    children: [
      { path: 'estudianteinsertar', component: EstudianteInsertarComponent },
      { path: 'edicion/:id', component: EstudianteInsertarComponent },
    ],
  },

  {
    path: 'universidad',
    component: UniversidadComponent,
    children: [
      { path: 'universidadinsertar', component: UniversidadInsertarComponent },
      { path: 'edicion/:id', component: UniversidadInsertarComponent },
    ],
  },
  {
    path: 'contratodealquiler',
    component: ContratodealquilerComponent,
    children: [
      {
        path: 'contratodealquilerinsertar',
        component: ContratodealquilerInsertarComponent,
      },
      { path: 'edicion/:id', component: ContratodealquilerInsertarComponent },
    ],
  },

  {
    path: 'mensaje',
    component: MensajeComponent,
    children: [
      { path: 'mensajesinsertar', component: MensajeInsertarComponent },
      { path: 'edicion/:id', component: MensajeInsertarComponent },
    ],
  },
  {
    path: 'publicacion',
    component: PublicacionComponent,
    children: [
      { path: 'publicacioninsertar', component: PublicacionInsertarComponent },
      { path: 'edicion/:id', component: PublicacionInsertarComponent },
    ],
  },
  {
    path: 'distrito',
    component: DistritoComponent,
    children: [
      { path: 'distritoinsertar', component: DistritoInsertarComponent },
      { path: 'edicion/:id', component: DistritoInsertarComponent },
    ],
  },
  {
    path: 'ciudad',
    component: CiudadComponent,
    children: [
      { path: 'ciudadinsertar', component: CiudadInsertarComponent },
      { path: 'edicion/:id', component: CiudadInsertarComponent },
    ],
  },
  {
    path: 'habitacion',
    component: HabitacionComponent,
    children: [
      { path: 'habitacioninsertar', component: HabitacionInsertarComponent },
      { path: 'edicion/:id', component: HabitacionInsertarComponent },
    ],
  },
  {
    path: 'arrendador',
    component: ArrendadorComponent,
    children: [
      { path: 'arrendadorinsertar', component: ArrendadorInsetarComponent },
      { path: 'edicion/:id', component: ArrendadorInsetarComponent },
    ],
  },
  {
    path: 'publicacionfavorita',
    component: PublicacionfavoritaComponent,
    children: [
      {
        path: 'publicacionfavoritainsertar',
        component: PublicacionfavoritaInsertarComponent,
      },
      { path: 'edicion/:id', component: PublicacionfavoritaInsertarComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
