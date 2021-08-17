import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { CategoriaApi } from 'src/app/categoria/categoria.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class CategoriaField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/categoria',
      Permissions.values.categoriaRead,
      CategoriaApi.listAutocomplete,
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
      '/categoria',
      Permissions.values.categoriaRead,
      CategoriaApi.listAutocomplete,
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
