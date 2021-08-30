import { Roles } from 'src/security/roles';
import { Plans } from 'src/security/plans';
import { Storage } from 'src/security/storage';

const storage = Storage.values;
const roles = Roles.values;
const plans = Plans.values;

export class Permissions {
  static get values() {
    return {
      tenantEdit: {
        id: 'tenantEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      tenantDestroy: {
        id: 'tenantDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      planEdit: {
        id: 'planEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      planRead: {
        id: 'planRead',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userEdit: {
        id: 'userEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userDestroy: {
        id: 'userDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userCreate: {
        id: 'userCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userImport: {
        id: 'userImport',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userRead: {
        id: 'userRead',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userAutocomplete: {
        id: 'userAutocomplete',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [
          storage.settingsBackgroundImages,
          storage.settingsLogos,
        ],
      },
      pessoaFisicaImport: {
        id: 'pessoaFisicaImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      pessoaFisicaCreate: {
        id: 'pessoaFisicaCreate',
        allowedRoles: [roles.admin, roles.pessoa],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [
          storage.pessoaFisicaFoto,
        ],
      },
      pessoaFisicaEdit: {
        id: 'pessoaFisicaEdit',
        allowedRoles: [roles.admin, roles.pessoa],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [
          storage.pessoaFisicaFoto,
        ],
      },
      pessoaFisicaDestroy: {
        id: 'pessoaFisicaDestroy',
        allowedRoles: [roles.admin,],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [
          storage.pessoaFisicaFoto,
        ],
      },
      pessoaFisicaRead: {
        id: 'pessoaFisicaRead',
        allowedRoles: [roles.admin, roles.pessoa],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      pessoaFisicaAutocomplete: {
        id: 'pessoaFisicaAutocomplete',
        allowedRoles: [roles.admin,],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      empresaImport: {
        id: 'empresaImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      empresaCreate: {
        id: 'empresaCreate',
        allowedRoles: [roles.admin, roles.empresa],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [
          storage.empresaFoto,
        ],
      },
      empresaEdit: {
        id: 'empresaEdit',
        allowedRoles: [roles.admin, roles.empresa],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [
          storage.empresaFoto,
        ],
      },
      empresaDestroy: {
        id: 'empresaDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [
          storage.empresaFoto,
        ],
      },
      empresaRead: {
        id: 'empresaRead',
        allowedRoles: [roles.admin, roles.empresa],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      empresaAutocomplete: {
        id: 'empresaAutocomplete',
        allowedRoles: [roles.admin,],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      cartaoImport: {
        id: 'cartaoImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      cartaoCreate: {
        id: 'cartaoCreate',
        allowedRoles: [roles.admin, roles.pessoa],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      cartaoEdit: {
        id: 'cartaoEdit',
        allowedRoles: [roles.admin, roles.pessoa],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      cartaoDestroy: {
        id: 'cartaoDestroy',
        allowedRoles: [roles.admin, roles.pessoa],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      cartaoRead: {
        id: 'cartaoRead',
        allowedRoles: [roles.admin, roles.pessoa],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      cartaoAutocomplete: {
        id: 'cartaoAutocomplete',
        allowedRoles: [roles.admin, roles.pessoa],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      produtoImport: {
        id: 'produtoImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      produtoCreate: {
        id: 'produtoCreate',
        allowedRoles: [roles.admin, roles.empresa],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [
          storage.produtoFotos,
        ],
      },
      produtoEdit: {
        id: 'produtoEdit',
        allowedRoles: [roles.admin, roles.empresa],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [
          storage.produtoFotos,
        ],
      },
      produtoDestroy: {
        id: 'produtoDestroy',
        allowedRoles: [roles.admin, roles.empresa],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [
          storage.produtoFotos,
        ],
      },
      produtoRead: {
        id: 'produtoRead',
        allowedRoles: [roles.admin, roles.empresa, roles.pessoa],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      produtoAutocomplete: {
        id: 'produtoAutocomplete',
        allowedRoles: [roles.admin, roles.empresa, roles.pessoa],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      pedidoImport: {
        id: 'pedidoImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      pedidoCreate: {
        id: 'pedidoCreate',
        allowedRoles: [roles.admin, roles.pessoa],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      pedidoEdit: {
        id: 'pedidoEdit',
        allowedRoles: [roles.admin, roles.empresa, roles.pessoa],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      pedidoDestroy: {
        id: 'pedidoDestroy',
        allowedRoles: [roles.admin, roles.pessoa],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      pedidoRead: {
        id: 'pedidoRead',
        allowedRoles: [roles.admin, roles.empresa, roles.pessoa],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      pedidoAutocomplete: {
        id: 'pedidoAutocomplete',
        allowedRoles: [roles.admin, roles.pessoa],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      carrinhoImport: {
        id: 'carrinhoImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      carrinhoCreate: {
        id: 'carrinhoCreate',
        allowedRoles: [roles.admin, roles.pessoa],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      carrinhoEdit: {
        id: 'carrinhoEdit',
        allowedRoles: [roles.admin, roles.pessoa],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      carrinhoDestroy: {
        id: 'carrinhoDestroy',
        allowedRoles: [roles.admin, roles.pessoa],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      carrinhoRead: {
        id: 'carrinhoRead',
        allowedRoles: [roles.admin, roles.pessoa],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      carrinhoAutocomplete: {
        id: 'carrinhoAutocomplete',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      categoriaImport: {
        id: 'categoriaImport',
        allowedRoles: [roles.admin, roles.empresa],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      categoriaCreate: {
        id: 'categoriaCreate',
        allowedRoles: [roles.admin, roles.empresa],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      categoriaEdit: {
        id: 'categoriaEdit',
        allowedRoles: [roles.admin, roles.empresa],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      categoriaDestroy: {
        id: 'categoriaDestroy',
        allowedRoles: [roles.admin, roles.empresa],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      categoriaRead: {
        id: 'categoriaRead',
        allowedRoles: [roles.admin, roles.empresa],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      categoriaAutocomplete: {
        id: 'categoriaAutocomplete',
        allowedRoles: [roles.admin, roles.empresa],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}
