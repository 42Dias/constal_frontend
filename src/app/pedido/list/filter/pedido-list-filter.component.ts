import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FilterSchema } from 'src/app/shared/form/filter-schema';
import { PedidoListService } from 'src/app/pedido/list/pedido-list.service';
import { PedidoModel } from 'src/app/pedido/pedido-model';

@Component({
  selector: 'app-pedido-list-filter',
  templateUrl: './pedido-list-filter.component.html',
})
export class PedidoListFilterComponent implements OnInit {
  form: FormGroup;
  schema: FilterSchema;
  expanded: boolean = false;

  constructor(
    private service: PedidoListService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {}

  async ngOnInit() {
    this.buildSchema();
    this.buildForm();
    this.doFilter();
  }

  get fields() {
    return PedidoModel.fields;
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
        this.fields.codigo,
        this.fields.quantidadeProdutosRange,
        this.fields.formaPagamento,
        this.fields.valorTotalRange,
        this.fields.dataPedidoRange,
        this.fields.dataProcessamentoRange,
        this.fields.dataEnvioRange,
        this.fields.dataEntregaRange,
        this.fields.dataFaturamentoRange,
        this.fields.status,
        this.fields.valorFreteRange,
        this.fields.compradorUser,
        this.fields.fornecedorEmpresa,
      ],
      this.formBuilder,
    );
  }
}
