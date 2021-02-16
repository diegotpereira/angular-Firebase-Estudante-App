import { Injectable } from '@angular/core';
import { Estudante } from '../shared/estudante';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  estudantesRef: AngularFireList<any>;
  estudanteRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Criar Estudante
  AddEStudante(estudante: Estudante){
    this.estudantesRef.push({
      nome: estudante.nome,
      sobrenome: estudante.sobrenome,
      email: estudante.email,
      telefone: estudante.telefone
    })
  }
  GetEstudante(id: string){
    this.estudanteRef = this.db.object('estudante-lista/' + id);
    return this.estudanteRef;
  }
  GetEstudanteList(){
    this.estudantesRef = this.db.list('estudante-lista');
    return this.estudantesRef;
  }
  UpdateEstudante(estudante: Estudante){
    this.estudanteRef.update({
      nome: estudante.nome,
      sobrenome: estudante.sobrenome,
      email: estudante.email,
      telefone: estudante.telefone
    })
  }
  DeleteEstudante(id: string){
    this.estudanteRef = this.db.object('estudantes-lista/' +id);
    this.estudanteRef.remove();
  }
}
