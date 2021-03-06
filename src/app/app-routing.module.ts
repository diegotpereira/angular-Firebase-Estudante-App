import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {  AddEstudanteComponent  } from './add-estudante/add-estudante.component';
import { EstudanteListComponent } from './estudante-list/estudante-list.component';
import { EditEstudanteComponent } from './edit-estudante/edit-estudante.component';

const routes: Routes = [
  { path: '', redirectTo: '/registro-estudante', pathMatch: 'full' },
  { path: 'registro-estudante', component: AddEstudanteComponent },
  { path: 'view-estudantes', component: EstudanteListComponent },
  { path: 'edit-estudante/:id', component: EditEstudanteComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
