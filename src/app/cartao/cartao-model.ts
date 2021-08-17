import { GenericModel } from 'src/app/shared/model/generic-model';
import { i18n } from 'src/i18n';
import DateTimeField from 'src/app/shared/fields/date-time-field';
import IdField from 'src/app/shared/fields/id-field';
import DateTimeRangeField from 'src/app/shared/fields/date-time-range-field';
import StringField from 'src/app/shared/fields/string-field';
import EnumeratorField from 'src/app/shared/fields/enumerator-field';
import { UserField } from 'src/app/user/user-field';

function label(name) {
  return i18n(`entities.cartao.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.cartao.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  tipo: new EnumeratorField('tipo', label('tipo'), [
    { id: 'credito', label: enumeratorLabel('tipo', 'credito') },
    { id: 'debito', label: enumeratorLabel('tipo', 'debito') },
  ],{}),
  nomeTitular: new StringField('nomeTitular', label('nomeTitular'), {}),
  apelido: new StringField('apelido', label('apelido'), {}),
  numero: new StringField('numero', label('numero'), {}),
  cvv: new StringField('cvv', label('cvv'), {}),
  validade: new StringField('validade', label('validade'), {}),
  bandeira: new StringField('bandeira', label('bandeira'), {}),
  user: UserField.relationToMany('user', label('user'), {}),
  createdAt: new DateTimeField(
    'createdAt',
    label('createdAt'),
  ),
  updatedAt: new DateTimeField(
    'updatedAt',
    label('updatedAt'),
  ),
  createdAtRange: new DateTimeRangeField(
    'createdAtRange',
    label('createdAtRange'),
  ),

};

export class CartaoModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
