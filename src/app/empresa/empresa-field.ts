import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { EmpresaApi } from 'src/app/empresa/empresa.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class EmpresaField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/empresa',
      Permissions.values.empresaRead,
      EmpresaApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.marca,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options?) {
    return new RelationToManyField(
      name,
      label,
      '/empresa',
      Permissions.values.empresaRead,
      EmpresaApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.marca,
        };
      },
      options,
    );
  }
}
