import { Component, OnInit } from '@angular/core';
import { AuditLogService } from 'src/app/audit-log/audit-log.service';
import { SettingsService } from 'src/app/settings/settings.service';
import { UserService } from 'src/app/user/user.service';
import { PlanService } from 'src/app/plan/plan.service';
import { PessoaFisicaService } from 'src/app/pessoa-fisica/pessoa-fisica.service';
import { EmpresaService } from 'src/app/empresa/empresa.service';
import { CartaoService } from 'src/app/cartao/cartao.service';
import { ProdutoService } from 'src/app/produto/produto.service';
import { PedidoService } from 'src/app/pedido/pedido.service';
import { CarrinhoService } from 'src/app/carrinho/carrinho.service';
import { CategoriaService } from 'src/app/categoria/categoria.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  constructor(
    public auditLogService: AuditLogService,
    public settingsService: SettingsService,
    public userService: UserService,
    public planService: PlanService,
    public pessoaFisicaService: PessoaFisicaService,
    public empresaService: EmpresaService,
    public cartaoService: CartaoService,
    public produtoService: ProdutoService,
    public pedidoService: PedidoService,
    public carrinhoService: CarrinhoService,
    public categoriaService: CategoriaService,
  ) {}

  ngOnInit(): void {}
}
