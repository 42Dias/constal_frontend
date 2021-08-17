import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FilterSchema } from 'src/app/shared/form/filter-schema';
import { CartaoListService } from 'src/app/cartao/list/cartao-list.service';
import { CartaoModel } from 'src/app/cartao/cartao-model';

@Component({
  selector: 'app-cartao-list-filter',
  templateUrl: './cartao-list-filter.component.html',
})
export class CartaoListFilterComponent implements OnInit {
  form: FormGroup;
  schema: FilterSchema;
  expanded: boolean = false;

  constructor(
    private service: CartaoListService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {}

  async ngOnInit() {
    this.buildSchema();
    this.buildForm();
    this.doFilter();
  }

  get fields() {
    return CartaoModel.fields;
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
        this.fields.tipo,
        this.fields.nomeTitular,
        this.fields.apelido,
        this.fields.numero,
        this.fields.cvv,
        this.fields.validade,
        this.fields.bandeira,
      ],
      this.formBuilder,
    );
  }
}
