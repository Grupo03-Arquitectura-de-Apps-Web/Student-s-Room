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

import { MatInputModule } from '@angular/material/input';

import { MatSelectModule } from '@angular/material/select';

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

import { MatListModule } from '@angular/material/list';
//import { RouterModule, Routes }   from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';

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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { UniversidadComponent } from './component/universidad/universidad.component';
import { UniversidadInsertarComponent } from './component/universidad/universidad-insertar/universidad-insertar.component';
import { UniversidadListarComponent } from './component/universidad/universidad-listar/universidad-listar.component';
import { UniversidadDialogoComponent } from './component/universidad/universidad-listar/universidad-dialogo/universidad-dialogo.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MensajeComponent } from './component/mensaje/mensaje.component';
import { MensajeInsertarComponent } from './component/mensaje/mensaje-insertar/mensaje-insertar.component';
import { MensajeListarComponent } from './component/mensaje/mensaje-listar/mensaje-listar.component';
import { MensajeDialogoComponent } from './component/mensaje/mensaje-listar/mensaje-dialogo/mensaje-dialogo.component';
import { ContratodealquilerComponent } from './component/contratodealquiler/contratodealquiler.component';
import { ContratodealquilerInsertarComponent } from './component/contratodealquiler/contratodealquiler-insertar/contratodealquiler-insertar.component';
import { ContratodealquilerEliminarComponent } from './component/contratodealquiler/contratodealquiler-eliminar/contratodealquiler-eliminar.component';
import { ContratodealquilerListarComponent } from './component/contratodealquiler/contratodealquiler-listar/contratodealquiler-listar.component';

import { ArrendadorComponent } from './component/arrendador/arrendador.component';
import { ArrendadorInsetarComponent } from './component/arrendador/arrendador-insetar/arrendador-insetar.component';
import { ArrendadorListarComponent } from './component/arrendador/arrendador-listar/arrendador-listar.component';
import { ArrendadorDialogoComponent } from './component/arrendador/arrendador-listar/arrendador-dialogo/arrendador-dialogo.component';
import { PublicacionfavoritaComponent } from './component/publicacionfavorita/publicacionfavorita.component';
import { PublicacionfavoritaListarComponent } from './component/publicacionfavorita/publicacionfavorita-listar/publicacionfavorita-listar.component';
import { PublicacionfavoritaInsertarComponent } from './component/publicacionfavorita/publicacionfavorita-insertar/publicacionfavorita-insertar.component';
import { PublicacionfavoritaDialogoComponent } from './component/publicacionfavorita/publicacionfavorita-listar/publicacionfavorita-dialogo/publicacionfavorita-dialogo.component';

import { PublicacionComponent } from './component/publicacion/publicacion.component';
import { PublicacionInsertarComponent } from './component/publicacion/publicacion-insertar/publicacion-insertar.component';
import { PublicacionListarComponent } from './component/publicacion/publicacion-listar/publicacion-listar.component';
import { PublicacionEliminarComponent } from './component/publicacion/publicacion-listar/publicacion-eliminar/publicacion-eliminar.component';
import { DistritoComponent } from './component/distrito/distrito.component';
import { DistritoInsertarComponent } from './component/distrito/distrito-insertar/distrito-insertar.component';
import { DistritoListarComponent } from './component/distrito/distrito-listar/distrito-listar.component';
import { DistritoEliminarComponent } from './component/distrito/distrito-listar/distrito-eliminar/distrito-eliminar.component';
import { CiudadComponent } from './component/ciudad/ciudad.component';
import { CiudadInsertarComponent } from './component/ciudad/ciudad-insertar/ciudad-insertar.component';
import { CiudadListarComponent } from './component/ciudad/ciudad-listar/ciudad-listar.component';
import { CiudadEliminarComponent } from './component/ciudad/ciudad-listar/ciudad-eliminar/ciudad-eliminar.component';
import { HabitacionComponent } from './component/habitacion/habitacion.component';
import { HabitacionInsertarComponent } from './component/habitacion/habitacion-insertar/habitacion-insertar.component';
import { HabitacionListarComponent } from './component/habitacion/habitacion-listar/habitacion-listar.component';
import { HabitacionEliminarComponent } from './component/habitacion/habitacion-listar/habitacion-eliminar/habitacion-eliminar.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { NavsComponent } from './component/navs/navs.component';

import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { LoginComponent } from './component/login/login.component';
import { SidebarComponent } from './component/navs/sidebar/sidebar.component';
import { SideNavbarComponent } from './component/navs/side-navbar/side-navbar.component';
import { MainNavComponent } from './component/navs/main-nav/main-nav.component';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { ReportsComponent } from './component/reports/reports.component';
import { Report01Component } from './component/reports/report01/report01.component';
import { Report02Component } from './component/reports/report02/report02.component';

import { ContratodealquilerOnlyreadComponent } from './component/contratodealquiler/contratodealquiler-onlyread/contratodealquiler-onlyread.component';

import { RegisterUserComponent } from './component/register-user/register-user.component';
import { RegisterRolComponent } from './component/register-rol/register-rol.component';
import { Report03Component } from './component/reports/report03/report03.component';
import { Report04Component } from './component/reports/report04/report04.component';

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
    UniversidadDialogoComponent,
    MensajeComponent,
    MensajeInsertarComponent,
    MensajeListarComponent,
    MensajeDialogoComponent,
    ContratodealquilerComponent,
    ContratodealquilerInsertarComponent,
    ContratodealquilerEliminarComponent,
    ContratodealquilerListarComponent,
    ArrendadorComponent,
    ArrendadorInsetarComponent,
    ArrendadorListarComponent,
    ArrendadorDialogoComponent,
    PublicacionfavoritaComponent,
    PublicacionfavoritaListarComponent,
    PublicacionfavoritaInsertarComponent,
    PublicacionfavoritaDialogoComponent,
    PublicacionComponent,
    PublicacionInsertarComponent,
    PublicacionListarComponent,
    PublicacionEliminarComponent,
    DistritoComponent,
    DistritoInsertarComponent,
    DistritoListarComponent,
    DistritoEliminarComponent,
    CiudadComponent,
    CiudadInsertarComponent,
    CiudadListarComponent,
    CiudadEliminarComponent,
    HabitacionComponent,
    HabitacionInsertarComponent,
    HabitacionListarComponent,
    HabitacionEliminarComponent,
    ToolbarComponent,
    NavsComponent,
    LoginComponent,
    SidebarComponent,
    SideNavbarComponent,
    MainNavComponent,
    UsuarioComponent,
    ReportsComponent,
    Report01Component,
    Report02Component,
    ContratodealquilerOnlyreadComponent,

    RegisterUserComponent,
    RegisterRolComponent,
    Report03Component,
    Report04Component,
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
    MatPaginatorModule,
    MatListModule,
    MatExpansionModule,
    MatTooltipModule,
    MatCardModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
