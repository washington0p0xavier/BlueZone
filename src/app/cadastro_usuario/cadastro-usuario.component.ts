import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UsuarioService } from '../core/usuario.service';
import { Usuario } from '../models/usuario';

@Component({
  /*selector: 'cadastro-usuario',*/
  templateUrl: 'cadastro-usuario.component.html',
  styleUrls: ['cadastro-usuario.component.css'],
})

export class CadastroUsuarioComponent implements OnInit{
  
  cadastroUsuario: FormGroup;

  constructor( private fb: FormBuilder, 
               private usuarioService: UsuarioService) { }
  
  ngOnInit() {

    this.cadastroUsuario = this.fb.group({
      nome: ['', [Validators.required, Validators.pattern("[a-zA-Z]*")]],
      sobrenome: ['', [Validators.required, Validators.pattern("[a-zA-Z]*")]],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      email: ['', [Validators.required, Validators.email]],
      celular: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      senha: ['', [Validators.required, Validators.pattern("[a-zA-Z*@!1-9]*")]],
    });

  }

  /*CRUDE*/
  submit(): void{
    this.cadastroUsuario.markAllAsTouched();
      if(this.cadastroUsuario.invalid) {
        return;
      }

    const usuario = this.cadastroUsuario.getRawValue() as Usuario;
    this.salvar(usuario);
  }

  private salvar(usuario: Usuario): void {
    this.usuarioService.salvar(usuario).subscribe(() => {
      alert('Sucesso!');
    },
    () => {
      alert('Erro ao salvar!');
    });
  }

  reiniciarForm(): void{
    this.cadastroUsuario.reset();
  }

  

}