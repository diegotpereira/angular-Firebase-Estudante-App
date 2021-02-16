import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AddEstudanteComponent } from './add-estudante/add-estudante.component';
import { EditEstudanteComponent } from './edit-estudante/edit-estudante.component';
import { EstudanteListComponent } from './estudante-list/estudante-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEstudanteComponent,
    EditEstudanteComponent,
    EstudanteListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
