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

//delete

@NgModule({
  declarations: [
    AppComponent,
    PaisComponent,
    PaisListarComponent,
    PaisInsertarComponent,
    HomeComponent,
    PaisDialogoComponent
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
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
