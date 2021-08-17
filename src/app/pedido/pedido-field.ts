import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { PedidoApi } from 'src/app/pedido/pedido.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class PedidoField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/pedido',
      Permissions.values.pedidoRead,
      PedidoApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.codigo,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options?) {
    return new RelationToManyField(
      name,
      label,
      '/pedido',
      Permissions.values.pedidoRead,
      PedidoApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.codigo,
        };
      },
      options,
    );
  }
}
