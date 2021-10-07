import { Component, OnInit } from '@angular/core';
import AuthCurrentTenant from 'src/app/auth/auth-current-tenant';
import { AuthService } from 'src/app/auth/auth.service';
import authAxios from 'src/app/shared/axios/auth-axios';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})
export class VendasComponent implements OnInit {

  role = this.authService.currentUser.tenants[0].roles[0];
  vendas:any;
  status = "pendente";
  currentProfile:any;

  negrito = "pendentes"

  constructor(private authService: AuthService) { }

  async ngOnInit(){
    await this.getVendas()
  }

  async getVendas() {
    try {
      this.vendas = null;

      const tenantId = AuthCurrentTenant.get();

      const response = await authAxios.get(
        `/tenant/${tenantId}/pedido?filter%5Bstatus%5D=${this.status}`,
      );

      this.vendas = response.data.rows;
        
    } catch (error) {
      this.vendas = null;
    }
  }

  async confirmado(){
    this.status = "confirmado";
    await this.getVendas()
    this.negrito = "confirmadas"
  }

  async devolvida(){
    this.status = "devolvido";
    await this.getVendas()
    this.negrito = "devolvidas"
  }

  async pendente(){
    this.status = "pendente";
    await this.getVendas()
    this.negrito = "pendentes"
  }
}
