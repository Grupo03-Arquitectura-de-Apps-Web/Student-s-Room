import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaisComponent } from './component/pais/pais.component';
import { PaisListarComponent } from './component/pais/pais-listar/pais-listar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaisInsertarComponent } from './component/pais/pais-insertar/pais-insertar.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';

////agregar import
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';

import {MatSelectModule} from '@angular/material/select';

import { HomeComponent } from './component/home/home.component';

//
import { LayoutModule } from '@angular/cdk/layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';

import { PaisDialogoComponent } from './component/pais/pais-listar/pais-dialogo/pais-dialogo.component';
import { PlanComponent } from './component/plan/plan.component';
import { PlanListarComponent } from './component/plan/plan-listar/plan-listar.component';
import { PlanInsertarComponent } from './component/plan/plan-insertar/plan-insertar.component';
import { PlanDialogoComponent } from './component/plan/plan-listar/plan-dialogo/plan-dialogo.component';
import { TipoComponent } from './component/tipo/tipo.component';
import { TipoListarComponent } from './component/tipo/tipo-listar/tipo-listar.component';
import { TipoInsertarComponent } from './component/tipo/tipo-insertar/tipo-insertar.component';
import { TipoEliminarComponent } from './component/tipo/tipo-listar/tipo-eliminar/tipo-eliminar.component';
import { EstudianteComponent } from './component/estudiante/estudiante.component';
import { EstudianteListarComponent } from './component/estudiante/estudiante-listar/estudiante-listar.component';
import { EstudianteInsertarComponent } from './component/estudiante/estudiante-insertar/estudiante-insertar.component';
import { EstudianteEliminarComponent } from './component/estudiante/estudiante-eliminar/estudiante-eliminar.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { UniversidadComponent } from './component/universidad/universidad.component';
import { UniversidadInsertarComponent } from './component/universidad/universidad-insertar/universidad-insertar.component';
import { UniversidadListarComponent } from './component/universidad/universidad-listar/universidad-listar.component';
import { UniversidadDialogoComponent } from './component/universidad/universidad-listar/universidad-dialogo/universidad-dialogo.component';

//delete

@NgModule({
  declarations: [
    AppComponent,
    PaisComponent,
    PaisListarComponent,
    PaisInsertarComponent,
    HomeComponent,
    PaisDialogoComponent,
    PlanComponent,
    PlanListarComponent,
    PlanInsertarComponent,
    PlanDialogoComponent,
    TipoComponent,
    TipoListarComponent,
    TipoInsertarComponent,
    TipoEliminarComponent,
    EstudianteComponent,
    EstudianteListarComponent,
    EstudianteInsertarComponent,
    EstudianteEliminarComponent,


    UniversidadComponent,
    UniversidadInsertarComponent,
    UniversidadListarComponent,
    UniversidadDialogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,

    //agregar
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    LayoutModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
