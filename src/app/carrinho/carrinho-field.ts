import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { CarrinhoApi } from 'src/app/carrinho/carrinho.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class CarrinhoField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/carrinho',
      Permissions.values.carrinhoRead,
      CarrinhoApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.id,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options?) {
    return new RelationToManyField(
      name,
      label,
      '/carrinho',
      Permissions.values.carrinhoRead,
      CarrinhoApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.id,
        };
      },
      options,
    );
  }
}
