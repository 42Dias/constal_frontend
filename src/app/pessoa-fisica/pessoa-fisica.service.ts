import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Permissions } from 'src/security/permissions';

@Injectable({
  providedIn: 'root',
})
export class PessoaFisicaService {
  constructor(private authService: AuthService) {}

  get lockedForCurrentPlan() {
    return this.authService.lockedForCurrentPlan(
      Permissions.values.pessoaFisicaRead,
    );
  }

  get hasPermissionToRead() {
    return this.authService.hasPermission(
      Permissions.values.pessoaFisicaRead,
    );
  }

  get hasPermissionToDestroy() {
    return this.authService.hasPermission(
      Permissions.values.pessoaFisicaDestroy,
    );
  }

  get hasPermissionToEdit() {
    return this.authService.hasPermission(
      Permissions.values.pessoaFisicaEdit,
    );
  }

  get hasPermissionToCreate() {
    return this.authService.hasPermission(
      Permissions.values.pessoaFisicaCreate,
    );
  }

  get hasPermissionToImport() {
    return this.authService.hasPermission(
      Permissions.values.pessoaFisicaImport,
    );
  }
}
