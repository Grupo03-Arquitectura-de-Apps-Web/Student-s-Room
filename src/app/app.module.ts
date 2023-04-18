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

import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    PaisComponent,
    PaisListarComponent,
    PaisInsertarComponent
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
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
