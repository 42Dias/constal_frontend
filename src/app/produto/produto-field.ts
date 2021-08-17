import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { ProdutoApi } from 'src/app/produto/produto.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class ProdutoField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/produto',
      Permissions.values.produtoRead,
      ProdutoApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.nome,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options?) {
    return new RelationToManyField(
      name,
      label,
      '/produto',
      Permissions.values.produtoRead,
      ProdutoApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.nome,
        };
      },
      options,
    );
  }
}
