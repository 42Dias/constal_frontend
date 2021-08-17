import { GenericModel } from 'src/app/shared/model/generic-model';
import { i18n } from 'src/i18n';
import DateTimeField from 'src/app/shared/fields/date-time-field';
import IdField from 'src/app/shared/fields/id-field';
import DateTimeRangeField from 'src/app/shared/fields/date-time-range-field';
import IntegerField from 'src/app/shared/fields/integer-field';
import IntegerRangeField from 'src/app/shared/fields/integer-range-field';
import StringField from 'src/app/shared/fields/string-field';
import { UserField } from 'src/app/user/user-field';
import { Storage } from 'src/security/storage';
import ImagesField from 'src/app/shared/fields/images-field';

function label(name) {
  return i18n(`entities.empresa.fields.${name}`);
}

function placeholder(name) {
  return i18n(`entities.empresa.placeholders.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  marca: new StringField('marca', label('marca'), {}),
  razaoSocial: new StringField('razaoSocial', label('razaoSocial'), {}),
  cnpj: new StringField('cnpj', label('cnpj'), {
    "placeholder": placeholder('cnpj')
  }),
  telefone: new StringField('telefone', label('telefone'), {}),
  ramal: new StringField('ramal', label('ramal'), {}),
  email: new StringField('email', label('email'), {}),
  website: new StringField('website', label('website'), {}),
  cep: new StringField('cep', label('cep'), {
    "placeholder": placeholder('cep')
  }),
  logradouro: new StringField('logradouro', label('logradouro'), {}),
  numero: new IntegerField('numero', label('numero'), {}),
  complemento: new StringField('complemento', label('complemento'), {}),
  pontoReferencia: new StringField('pontoReferencia', label('pontoReferencia'), {}),
  cidade: new StringField('cidade', label('cidade'), {}),
  estado: new StringField('estado', label('estado'), {}),
  bairro: new StringField('bairro', label('bairro'), {}),
  foto: new ImagesField('foto', label('foto'),Storage.values.empresaFoto, {}),
  user: UserField.relationToOne('user', label('user'), {}),
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
  numeroRange: new IntegerRangeField(
    'numeroRange',
    label('numeroRange'),
  ),
};

export class EmpresaModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
