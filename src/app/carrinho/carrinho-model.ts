import { GenericModel } from 'src/app/shared/model/generic-model';
import { i18n } from 'src/i18n';
import DateTimeField from 'src/app/shared/fields/date-time-field';
import IdField from 'src/app/shared/fields/id-field';
import DateTimeRangeField from 'src/app/shared/fields/date-time-range-field';
import { ProdutoField } from 'src/app/produto/produto-field';
import { UserField } from 'src/app/user/user-field';

function label(name) {
  return i18n(`entities.carrinho.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  userId: UserField.relationToOne('userId', label('userId'), {}),
  produto: ProdutoField.relationToMany('produto', label('produto'), {}),
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

export class CarrinhoModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
