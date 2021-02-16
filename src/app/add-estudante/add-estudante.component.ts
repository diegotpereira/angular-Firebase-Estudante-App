import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-estudante',
  templateUrl: './add-estudante.component.html',
  styleUrls: ['./add-estudante.component.css']
})
export class AddEstudanteComponent implements OnInit {

  public estudanteForm: FormGroup;

  constructor(
    public crudApi: CrudService,
    public fb: FormBuilder,
    public toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.crudApi.GetEstudanteList();
    this.criarForm();
  }
  criarForm() {
    this.estudanteForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      sobrenome: [''],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      telefone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }
  get nome(){
    return this.estudanteForm.get('nome');
  }
  get sobrenome(){
    return this.estudanteForm.get('sobrenome');
  }
  get email(){
    return this.estudanteForm.get('email');
  }
  get telefone(){
    return this.estudanteForm.get('telefone');
  }
  ResetForm(){
    this.estudanteForm.reset();
  }
  submitEstudanteData(){
    this.crudApi.AddEStudante(this.estudanteForm.value);
    this.toastr.success(this.estudanteForm.controls['nome'].value + 'Sucesso ao cadastrar!');
    this.ResetForm();
    this.router.navigate(['view-estudantes']);
  }


}
