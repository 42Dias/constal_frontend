import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmpresaModel } from 'src/app/empresa/empresa-model';
import { FormSchema } from 'src/app/shared/form/form-schema';

@Component({
  selector: 'app-empresa-form',
  templateUrl: './empresa-form.component.html',
})
export class EmpresaFormComponent implements OnInit {
  form: FormGroup;
  schema: FormSchema;

  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();
  @Input() isEditing;
  @Input() record;
  @Input() saveLoading;
  @Input() modal = false;

  constructor(private formBuilder: FormBuilder) {}

  async ngOnInit() {
    this.buildSchema();
    this.buildForm();
  }

  get fields() {
    return EmpresaModel.fields;
  }

  doSave() {
    if (!this.form.valid) {
      return;
    }

    const id = this.record && this.record.id;
    const values = this.schema.cast(this.form.value);

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
        this.fields.marca,
        this.fields.razaoSocial,
        this.fields.cnpj,
        this.fields.telefone,
        this.fields.ramal,
        this.fields.email,
        this.fields.website,
        this.fields.cep,
        this.fields.logradouro,
        this.fields.numero,
        this.fields.complemento,
        this.fields.pontoReferencia,
        this.fields.cidade,
        this.fields.estado,
        this.fields.bairro,
        this.fields.foto,
        this.fields.user,
      ],
      this.formBuilder,
    );
  }
}
