import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FilterSchema } from 'src/app/shared/form/filter-schema';
import { ProdutoListService } from 'src/app/produto/list/produto-list.service';
import { ProdutoModel } from 'src/app/produto/produto-model';

@Component({
  selector: 'app-produto-list-filter',
  templateUrl: './produto-list-filter.component.html',
})
export class ProdutoListFilterComponent implements OnInit {
  form: FormGroup;
  schema: FilterSchema;
  expanded: boolean = false;

  constructor(
    private service: ProdutoListService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {}

  async ngOnInit() {
    this.buildSchema();
    this.buildForm();
    this.doFilter();
  }

  get fields() {
    return ProdutoModel.fields;
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
        this.fields.nome,
        this.fields.descricao,
        this.fields.marca,
        this.fields.modelo,
        this.fields.caracteristicas,
        this.fields.codigo,
        this.fields.precoRange,
        this.fields.somatoriaAvaliacoesRange,
        this.fields.quantidadeAvaliacoesRange,
        this.fields.volumeVendasRange,
        this.fields.empresa,
        this.fields.categoria,
      ],
      this.formBuilder,
    );
  }
}
