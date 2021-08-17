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
  return i18n(`entities.pessoaFisica.fields.${name}`);
}

function placeholder(name) {
  return i18n(`entities.pessoaFisica.placeholders.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  cpf: new StringField('cpf', label('cpf'), {
    "placeholder": placeholder('cpf')
  }),
  nome: new StringField('nome', label('nome'), {}),
  email: new StringField('email', label('email'), {}),
  telefone: new StringField('telefone', label('telefone'), {}),
  celular: new StringField('celular', label('celular'), {}),
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
  pix: new StringField('pix', label('pix'), {}),
  foto: new ImagesField('foto', label('foto'),Storage.values.pessoaFisicaFoto, {}),
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

export class PessoaFisicaModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
