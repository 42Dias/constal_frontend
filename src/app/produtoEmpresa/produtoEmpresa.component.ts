import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { i18n } from 'src/i18n';
import { FormSchema } from '../shared/form/form-schema';
import { ProdutoEmpresaModel } from './produtoEmpresa-model'
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-produtoempresa',
  templateUrl: './produtoempresa.component.html',
})
export class ProdutoEmpresaComponent implements OnInit {
  form: FormGroup;
  schema: FormSchema;

  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();
  @Input() isEditing;
  @Input() record;
  @Input() saveLoading;
  @Input() modal = false;
  
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildSchema();
    this.buildForm();

    console.log(this.record);
  }

  get fields() {
    return ProdutoEmpresaModel.fields;
  }

  doSave() {
    /* if (!this.form.valid) {
      return;
    } */
    
    const id = this.record && this.record.id;
    const values = this.schema.cast(this.form.value);
    console.log(id + " " + values);

    this.save.emit({ id, values });
  }

  doReset() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.schema.buildForm(this.record);
  }

  private buildSchema() {
    this.schema = new FormSchema(
      [
        this.fields.nome,
        this.fields.descricao,
        this.fields.marca,
        this.fields.modelo,
        this.fields.caracteristicas,
        this.fields.codigo,
        this.fields.preco,
        this.fields.somatoriaAvaliacoes,
        this.fields.quantidadeAvaliacoes,
        this.fields.volumeVendas,
        this.fields.fotos,
        this.fields.empresa,
        this.fields.categoria,
      ],
      this.formBuilder,
    );
  }
}
