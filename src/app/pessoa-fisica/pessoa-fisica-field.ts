import RelationToOneField from 'src/app/shared/fields/relation-to-one-field';
import { PessoaFisicaApi } from 'src/app/pessoa-fisica/pessoa-fisica.api';
import { Permissions } from 'src/security/permissions';
import RelationToManyField from 'src/app/shared/fields/relation-to-many-field';

export class PessoaFisicaField {
  static relationToOne(name, label, options?) {
    return new RelationToOneField(
      name,
      label,
      '/pessoa-fisica',
      Permissions.values.pessoaFisicaRead,
      PessoaFisicaApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.cpf,
        };
      },
      options,
    );
  }

  static relationToMany(name, label, options?) {
    return new RelationToManyField(
      name,
      label,
      '/pessoa-fisica',
      Permissions.values.pessoaFisicaRead,
      PessoaFisicaApi.listAutocomplete,
      (record) => {
        if (!record) {
          return null;
        }

        return {
          id: record.id,
          label: record.cpf,
        };
      },
      options,
    );
  }
}
