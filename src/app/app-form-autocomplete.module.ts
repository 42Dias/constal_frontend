import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { TenantFormComponent } from 'src/app/tenant/form/tenant-form.component';

import { UserNewFormComponent } from 'src/app/user/form/user-new-form.component';
import { UserNewFormModalComponent } from 'src/app/user/form/user-new-form-modal.component';
import { UserNewFormModalService } from 'src/app/user/form/user-new-form-modal.service';
import { UserFormFieldComponent } from 'src/app/user/autocomplete/user-form-field.component';

import { PessoaFisicaFormFieldComponent } from 'src/app/pessoa-fisica/autocomplete/pessoa-fisica-form-field.component';
import { PessoaFisicaFormModalComponent } from 'src/app/pessoa-fisica/form/pessoa-fisica-form-modal.component';
import { PessoaFisicaFormModalService } from 'src/app/pessoa-fisica/form/pessoa-fisica-form-modal.service';
import { PessoaFisicaFormComponent } from 'src/app/pessoa-fisica/form/pessoa-fisica-form.component';

import { EmpresaFormFieldComponent } from 'src/app/empresa/autocomplete/empresa-form-field.component';
import { EmpresaFormModalComponent } from 'src/app/empresa/form/empresa-form-modal.component';
import { EmpresaFormModalService } from 'src/app/empresa/form/empresa-form-modal.service';
import { EmpresaFormComponent } from 'src/app/empresa/form/empresa-form.component';

import { CartaoFormFieldComponent } from 'src/app/cartao/autocomplete/cartao-form-field.component';
import { CartaoFormModalComponent } from 'src/app/cartao/form/cartao-form-modal.component';
import { CartaoFormModalService } from 'src/app/cartao/form/cartao-form-modal.service';
import { CartaoFormComponent } from 'src/app/cartao/form/cartao-form.component';

import { ProdutoFormFieldComponent } from 'src/app/produto/autocomplete/produto-form-field.component';
import { ProdutoFormModalComponent } from 'src/app/produto/form/produto-form-modal.component';
import { ProdutoFormModalService } from 'src/app/produto/form/produto-form-modal.service';
import { ProdutoFormComponent } from 'src/app/produto/form/produto-form.component';

import { PedidoFormFieldComponent } from 'src/app/pedido/autocomplete/pedido-form-field.component';
import { PedidoFormModalComponent } from 'src/app/pedido/form/pedido-form-modal.component';
import { PedidoFormModalService } from 'src/app/pedido/form/pedido-form-modal.service';
import { PedidoFormComponent } from 'src/app/pedido/form/pedido-form.component';

import { CarrinhoFormFieldComponent } from 'src/app/carrinho/autocomplete/carrinho-form-field.component';
import { CarrinhoFormModalComponent } from 'src/app/carrinho/form/carrinho-form-modal.component';
import { CarrinhoFormModalService } from 'src/app/carrinho/form/carrinho-form-modal.service';
import { CarrinhoFormComponent } from 'src/app/carrinho/form/carrinho-form.component';

import { CategoriaFormFieldComponent } from 'src/app/categoria/autocomplete/categoria-form-field.component';
import { CategoriaFormModalComponent } from 'src/app/categoria/form/categoria-form-modal.component';
import { CategoriaFormModalService } from 'src/app/categoria/form/categoria-form-modal.service';
import { CategoriaFormComponent } from 'src/app/categoria/form/categoria-form.component';

/**
 * This module exists to avoid circular dependencies, because autocompletes and forms
 * from different modules may use each others.
 */
@NgModule({
  declarations: [
    TenantFormComponent,

    UserNewFormComponent,
    UserFormFieldComponent,
    UserNewFormModalComponent,

    PessoaFisicaFormComponent,
    PessoaFisicaFormFieldComponent,
    PessoaFisicaFormModalComponent,

    EmpresaFormComponent,
    EmpresaFormFieldComponent,
    EmpresaFormModalComponent,

    CartaoFormComponent,
    CartaoFormFieldComponent,
    CartaoFormModalComponent,

    ProdutoFormComponent,
    ProdutoFormFieldComponent,
    ProdutoFormModalComponent,

    PedidoFormComponent,
    PedidoFormFieldComponent,
    PedidoFormModalComponent,

    CarrinhoFormComponent,
    CarrinhoFormFieldComponent,
    CarrinhoFormModalComponent,

    CategoriaFormComponent,
    CategoriaFormFieldComponent,
    CategoriaFormModalComponent,
  ],
  imports: [SharedModule],
  exports: [
    TenantFormComponent,

    UserNewFormComponent,
    UserFormFieldComponent,

    PessoaFisicaFormComponent,
    PessoaFisicaFormFieldComponent,

    EmpresaFormComponent,
    EmpresaFormFieldComponent,

    CartaoFormComponent,
    CartaoFormFieldComponent,

    ProdutoFormComponent,
    ProdutoFormFieldComponent,

    PedidoFormComponent,
    PedidoFormFieldComponent,

    CarrinhoFormComponent,
    CarrinhoFormFieldComponent,

    CategoriaFormComponent,
    CategoriaFormFieldComponent,
  ],
  providers: [
    UserNewFormModalService,
    PessoaFisicaFormModalService,

    EmpresaFormModalService,

    CartaoFormModalService,

    ProdutoFormModalService,

    PedidoFormModalService,

    CarrinhoFormModalService,

    CategoriaFormModalService,
  ],
  entryComponents: [
    UserNewFormModalComponent,
    PessoaFisicaFormModalComponent,

    EmpresaFormModalComponent,

    CartaoFormModalComponent,

    ProdutoFormModalComponent,

    PedidoFormModalComponent,

    CarrinhoFormModalComponent,

    CategoriaFormModalComponent,
  ],
})
export class AppFormAutocompleteModule {}
