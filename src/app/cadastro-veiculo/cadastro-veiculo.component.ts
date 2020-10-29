import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { VeiculoService } from '../core/veiculo.service';
import { Veiculo } from '../models/veiculo';

@Component({
  /*selector: 'cadastro-veiculo',*/
  templateUrl: 'cadastro-veiculo.component.html',
  styleUrls: ['cadastro-veiculo.component.css'],
})

export class CadastroVeiculoComponent {
  
  cadastroVeiculo: FormGroup;

  constructor(private fb: FormBuilder,
              private veiculoService: VeiculoService) { }
  
  ngOnInit() {

    this.cadastroVeiculo = this.fb.group({
      placa: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9]*")]],
      renavam: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      marca: ['', [Validators.required, Validators.pattern("[a-zA-Z]*")]],
      modelo: ['', [Validators.required, Validators.pattern("[a-zA-Z*@!1-9]*")]],
      cor: ['', [Validators.required, Validators.pattern("[a-zA-Z]*")]],
    });
  } 

  /*CRUDE*/
  submit(): void{
    this.cadastroVeiculo.markAllAsTouched();
      if(this.cadastroVeiculo.invalid) {
        return;
      }

    const veiculo = this.cadastroVeiculo.getRawValue() as Veiculo;
    this.salvar(veiculo);
  }

  private salvar(veiculo: Veiculo): void {
    this.veiculoService.salvar(veiculo).subscribe(() => {
      alert('Sucesso!');
    },
    () => {
      alert('Erro ao salvar!');
    });
  }

  reiniciarForm(): void{
    this.cadastroVeiculo.reset();
  }

}
