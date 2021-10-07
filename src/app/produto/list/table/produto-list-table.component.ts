import { Component } from '@angular/core';
import { ProdutoListService } from 'src/app/produto/list/produto-list.service';
import { ProdutoService } from 'src/app/produto/produto.service';
import { ProdutoModel } from 'src/app/produto/produto-model';
import { ConfirmService } from 'src/app/shared/confirm/confirm.service';
import { ProdutoDestroyService } from 'src/app/produto/destroy/produto-destroy.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';
import AuthCurrentTenant from 'src/app/auth/auth-current-tenant';
import authAxios from 'src/app/shared/axios/auth-axios';

@Component({
  selector: 'app-produto-list-table',
  templateUrl: './produto-list-table.component.html',
  styleUrls: ['./produto-list-table.component.css']
})
export class ProdutoListTableComponent {
  role: any;
  categoriaOn: boolean = false;
  corOn: boolean = false;
  marcaOn: boolean = false;
  categorias: any;

  constructor(
    public service: ProdutoListService,
    public destroyService: ProdutoDestroyService,
    public produtoService: ProdutoService,
    private confirmService: ConfirmService,
    private authService: AuthService
  ) {}

  async ngOnInit() {
    this.role = this.authService.currentUser.tenants[0].roles[0];
    this.categorias = await ProdutoListTableComponent.listCategoria();
  }

  presenter(row, fieldName) {
    return ProdutoModel.presenter(row, fieldName);
  }

  verifyImage(image) {
    if (image.length > 0) {
      return image[0].downloadUrl
    } else {
      return 'assets/images/noImage.png'
    }
  }

  tradeView(param) {
    if (param == 'categoria') {
      if (this.categoriaOn == false) {
        this.categoriaOn = true
      } else {
        this.categoriaOn = false
      }
    } else if ( param == 'cor') {
      if (this.corOn == false) {
        this.corOn = true
      } else {
        this.corOn = false
      }
    } else if (param == 'marca') {
      if (this.marcaOn == false) {
        this.marcaOn = true
      } else {
        this.marcaOn = false
      }
    }
  }

  static async listCategoria() {

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.get(
      `/tenant/${tenantId}/categoria`,
    );

    // /produto?filter%5Bcategoria%5D=25970959-129d-4b83-8a2a-6f050f27da0e
    
    return response.data.rows;
  }

  i18n(key) {
    return i18n(key);
  }

  async doDestroy(id) {
    const response = await this.confirmService.confirm();

    if (!response) {
      return;
    }

    return this.destroyService.doDestroy(id);
  }

  get hasPermissionToEdit() {
    return this.produtoService.hasPermissionToEdit;
  }

  get hasPermissionToDestroy() {
    return this.produtoService.hasPermissionToDestroy;
  }

  get fields() {
    return ProdutoModel.fields;
  }

  get columns() {
    return [
      '_select',

      this.fields.nome.name,
      this.fields.descricao.name,
      this.fields.marca.name,
      this.fields.modelo.name,
      this.fields.caracteristicas.name,
      this.fields.codigo.name,
      this.fields.preco.name,
      this.fields.somatoriaAvaliacoes.name,
      this.fields.quantidadeAvaliacoes.name,
      this.fields.volumeVendas.name,
      this.fields.fotos.name,
      this.fields.empresa.name,
      this.fields.categoria.name,

      '_actions',
    ];
  }
}
