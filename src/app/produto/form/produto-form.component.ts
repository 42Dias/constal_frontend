import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProdutoModel } from 'src/app/produto/produto-model';
import { FormSchema } from 'src/app/shared/form/form-schema';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
})
export class ProdutoFormComponent implements OnInit {
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
    return ProdutoModel.fields;
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
