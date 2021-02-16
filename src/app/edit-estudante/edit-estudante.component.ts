import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from '../shared/crud.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-estudante',
  templateUrl: './edit-estudante.component.html',
  styleUrls: ['./edit-estudante.component.css']
})
export class EditEstudanteComponent implements OnInit {

  editForm: FormGroup;

  constructor(
    private crudApi: CrudService,
    private fb: FormBuilder,
    private location: Location,
    private actRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.updateEstudanteData();
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.crudApi.GetEstudante(id).valueChanges().subscribe(data => {
      this.editForm.setValue(data)
    })
  }
  get nome(){
    return this.editForm.get('nome');
  }
  get sobrenome(){
    return this.editForm.get('sobrenome');
  }
  get email (){
    return this.editForm.get('email');
  }
  get telefone (){
    return this.editForm.get('telefone');
  }
  updateEstudanteData(){
    this.editForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      sobrenome: [''],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      telefone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }
  goBack (){
    this.location.back();
  }
  updateForm(){
    this.crudApi.UpdateEstudante(this.editForm.value);
    this.toastr.success(this.editForm.controls['nome'].value + 'atualizado com sucesso!');
    this.router.navigate(['view-estudantes']);
  }

}
