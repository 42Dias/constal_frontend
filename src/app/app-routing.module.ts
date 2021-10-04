import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from 'src/app/layout/errors/error-404.component';
import { Error403Component } from 'src/app/layout/errors/error-403.component';
import { Error500Component } from 'src/app/layout/errors/error-500.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(
        (m) => m.DashboardModule,
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./dashboard-cliente/dashboard-cliente.module').then(
        (m) => m.DashboardClienteModule,
      ),
  },
  {
    path: 'listaprodutos',
    loadChildren: () =>
      import('./listaProdutos/listaProdutos.module').then(
        (m) => m.ListaProdutosModule,
      ),
  },
  {
    path: 'detalhes',
    loadChildren: () =>
      import('./detalhes/detalhes.module').then(
        (m) => m.DetalhesModule,
      ),
  },
  {
    path: 'produtoEmpresa',
    loadChildren: () =>
      import('./produtoEmpresa/produtoEmpresa.module').then(
        (m) => m.ProdutoEmpresaModule,
      ),
  },
  {
    path: 'vendas',
    loadChildren: () =>
      import('./vendas/vendas.module').then(
        (m) => m.VendasModule,
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then(
        (m) => m.AuthModule,
      ),
  },
  {
    path: 'tenant',
    loadChildren: () =>
      import('./tenant/tenant.module').then(
        (m) => m.TenantModule,
      ),
  },
  {
    path: 'plan',
    loadChildren: () =>
      import('./plan/plan.module').then(
        (m) => m.PlanModule,
      ),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user/user.module').then(
        (m) => m.UserModule,
      ),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./settings/settings.module').then(
        (m) => m.SettingsModule,
      ),
  },
  {
    path: 'audit-log',
    loadChildren: () =>
      import('./audit-log/audit-log.module').then(
        (m) => m.AuditLogModule,
      ),
  },
  {
    path: 'pessoa-fisica',
    loadChildren: () => import('./pessoa-fisica/pessoa-fisica.module').then(m => m.PessoaFisicaModule),
  },
  {
    path: 'empresa',
    loadChildren: () => import('./empresa/empresa.module').then(m => m.EmpresaModule),
  },
  {
    path: 'cartao',
    loadChildren: () => import('./cartao/cartao.module').then(m => m.CartaoModule),
  },
  {
    path: 'produto',
    loadChildren: () => import('./produto/produto.module').then(m => m.ProdutoModule),
  },
  {
    path: 'pedido',
    loadChildren: () => import('./pedido/pedido.module').then(m => m.PedidoModule),
  },
  {
    path: 'carrinho',
    loadChildren: () => import('./carrinho/carrinho.module').then(m => m.CarrinhoModule),
  },
  {
    path: 'categoria',
    loadChildren: () => import('./categoria/categoria.module').then(m => m.CategoriaModule),
  },
  { path: '403', component: Error403Component },
  { path: '500', component: Error500Component },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routedComponents = [
  Error404Component,
  Error403Component,
  Error500Component,
];
