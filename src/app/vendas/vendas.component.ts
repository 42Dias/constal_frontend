import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})
export class VendasComponent implements OnInit {

  role = this.authService.currentUser.tenants[0].roles[0];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    
    
  }

}
