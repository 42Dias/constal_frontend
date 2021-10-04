import { TestBed } from '@angular/core/testing';

import { ProdutoEmpresaService } from './produtoEmpresa.service';

describe('ProdutoEmpresaService', () => {
  let service: ProdutoEmpresaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutoEmpresaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
