import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { CartaoApi } from 'src/app/cartao/cartao.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class CartaoField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/cartao',
      Permissions.values.cartaoRead,
      CartaoApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.apelido,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options?) {
    return new RelationToManyField(
      name,
      label,
      '/cartao',
      Permissions.values.cartaoRead,
      CartaoApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.apelido,
        };
      },
      options,
    );
  }
}
