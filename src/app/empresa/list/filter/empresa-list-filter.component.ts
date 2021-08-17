import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FilterSchema } from 'src/app/shared/form/filter-schema';
import { EmpresaListService } from 'src/app/empresa/list/empresa-list.service';
import { EmpresaModel } from 'src/app/empresa/empresa-model';

@Component({
  selector: 'app-empresa-list-filter',
  templateUrl: './empresa-list-filter.component.html',
})
export class EmpresaListFilterComponent implements OnInit {
  form: FormGroup;
  schema: FilterSchema;
  expanded: boolean = false;

  constructor(
    private service: EmpresaListService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {}

  async ngOnInit() {
    this.buildSchema();
    this.buildForm();
    this.doFilter();
  }

  get fields() {
    return EmpresaModel.fields;
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
        this.fields.marca,
        this.fields.razaoSocial,
        this.fields.cnpj,
        this.fields.telefone,
        this.fields.ramal,
        this.fields.email,
        this.fields.website,
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
