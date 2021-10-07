import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoModel } from 'src/app/produto/produto-model';
import { ProdutoViewService } from 'src/app/produto/view/produto-view.service';
import { i18n } from 'src/i18n';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-produto-view',
  templateUrl: './produto-view.component.html',
  styleUrls: ['./produto-view.component.css'],
})

export class ProdutoViewComponent implements OnInit {
  quantity: any;
  preco: any;
  presente: any;
  marca: any;
  modelo: any;
  caract: any;
  fotos: any;
  noImage: any;
  multi: any = 0;

  constructor(
    private service: ProdutoViewService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  async ngOnInit() {
    await this.service.doFind(
      this.route.snapshot.paramMap.get('id'),
    );
    this.presente = this.presenter(this.record, 'preco');
    this.preco = this.presenter(this.record, 'preco');
    this.marca = this.presenter(this.record, 'marca');
    this.modelo = this.presenter(this.record, 'modelo');
    this.caract = this.presenter(this.record, 'caracteristicas');
    this.quantity = 1;
    this.fotos = this.presenter(this.record, 'fotos'); 
    this.verifyImage(this.fotos);
    console.log(this.record);
    console.log(this.fotos);
    
  }

  changePictures(index) {
    console.log(index);
    
    this.multi = index;
  }

  upQuantity() {
    this.quantity+= 1;
    this.presente = this.preco;
    this.presente*=this.quantity;
    this.presente = this.presente.toFixed(2);
  }

  downQuantity() {
    if (this.quantity > 1){
      this.quantity-= 1;
    }
    this.presente = this.preco;
    this.presente*=this.quantity;
    this.presente = this.presente.toFixed(2);
  }
  
  verifyImage(image) {
    if (image.length > 0) {
      this.noImage = false;      
    } else {
      this.noImage = true;
    }
  }

  /* verifyImage(image) {
    if (image.length > 0) {
      return image[0].downloadUrl
    } else {
      return 'assets/images/noImage.png'
    }
  } */

  presenter(row, fieldName) {
    return ProdutoModel.presenter(row, fieldName);
  }

  get fields() {
    return ProdutoModel.fields; 
  }

  get loading() {
    return this.service.loading;
  }

  get record() {
    return this.service.record;
  }

  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('entities.produto.menu'), '/produto'],
    [i18n('entities.produto.view.title')],
  ];

}
