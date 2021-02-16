import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { Estudante } from './../shared/estudante';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-estudante-list',
  templateUrl: './estudante-list.component.html',
  styleUrls: ['./estudante-list.component.css']
})
export class EstudanteListComponent implements OnInit {
  p: number = 1;
  Estudante: Estudante[];
  hideWhenNoEstudante: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;

  constructor(public crudApi: CrudService, public toastr: ToastrService ) { }

  ngOnInit(): void {
    this.dataState();
    let s = this.crudApi.GetEstudanteList();
    s.snapshotChanges().subscribe(data => {
      this.Estudante = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Estudante.push(a as Estudante);
      })
    })
  }
  dataState(){
    this.crudApi.GetEstudanteList().valueChanges().subscribe(data => {
      this.preLoader = false;
      if (data.length <= 0) {
        this.hideWhenNoEstudante = false;
        this.noData = true;
      }else{
        this.hideWhenNoEstudante = true;
        this.noData = false;
      }
    })
  }
  deleteEstudante(estudante){
    if (window.confirm('Tem certeza que deseja deletar esse estudante?')) {
      this.crudApi.DeleteEstudante(estudante.$key)
      this.toastr.success(estudante.nome + 'Sucesso ao excluir estudante!')
    }
  }

}
