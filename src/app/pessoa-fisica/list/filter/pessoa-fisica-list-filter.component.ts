import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FilterSchema } from 'src/app/shared/form/filter-schema';
import { PessoaFisicaListService } from 'src/app/pessoa-fisica/list/pessoa-fisica-list.service';
import { PessoaFisicaModel } from 'src/app/pessoa-fisica/pessoa-fisica-model';

@Component({
  selector: 'app-pessoa-fisica-list-filter',
  templateUrl: './pessoa-fisica-list-filter.component.html',
})
export class PessoaFisicaListFilterComponent implements OnInit {
  form: FormGroup;
  schema: FilterSchema;
  expanded: boolean = false;

  constructor(
    private service: PessoaFisicaListService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {}

  async ngOnInit() {
    this.buildSchema();
    this.buildForm();
    this.doFilter();
  }

  get fields() {
    return PessoaFisicaModel.fields;
  }

  get loading() {
    return this.service.loading;
  }

  doRemove(key) {
    this.form.get(key).setValue(null);
    this.expanded = false;
    const values = this.schema.cast(this.form.value);
    return this.service.doFetch(values);
  }

  doToggleExpanded() {
    this.expanded = !this.expanded;
  }

  doFilter() {
    if (!this.form.valid) {
      return;
    }

    this.expanded = false;
    const values = this.schema.cast(this.form.value);
    return this.service.doFetch(values);
  }

  buildForm() {
    const { filter } = this.service;
    const params = this.route.snapshot.queryParams;
    this.form = this.schema.buildForm(filter, params);
  }

  doReset() {
    this.form = this.schema.buildForm();
    this.doFilter();
    this.expanded = false;
  }

  private buildSchema() {
    this.schema = new FilterSchema(
      [
        this.fields.cpf,
        this.fields.nome,
        this.fields.email,
        this.fields.telefone,
        this.fields.celular,
        this.fields.cep,
        this.fields.logradouro,
        this.fields.numeroRange,
        this.fields.complemento,
        this.fields.pontoReferencia,
        this.fields.cidade,
        this.fields.estado,
        this.fields.bairro,
        this.fields.user,
      ],
      this.formBuilder,
    );
  }
}
