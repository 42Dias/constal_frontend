import { GenericModel } from 'src/app/shared/model/generic-model';
import { i18n } from 'src/i18n';
import DateTimeField from 'src/app/shared/fields/date-time-field';
import IdField from 'src/app/shared/fields/id-field';
import DateTimeRangeField from 'src/app/shared/fields/date-time-range-field';
import IntegerField from 'src/app/shared/fields/integer-field';
import IntegerRangeField from 'src/app/shared/fields/integer-range-field';
import StringField from 'src/app/shared/fields/string-field';
import EnumeratorField from 'src/app/shared/fields/enumerator-field';
import DecimalRangeField from 'src/app/shared/fields/decimal-range-field';
import DecimalField from 'src/app/shared/fields/decimal-field';
import { EmpresaField } from 'src/app/empresa/empresa-field';
import { ProdutoField } from 'src/app/produto/produto-field';
import { UserField } from 'src/app/user/user-field';

function label(name) {
  return i18n(`entities.pedido.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.pedido.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  codigo: new StringField('codigo', label('codigo'), {}),
  quantidadeProdutos: new IntegerField('quantidadeProdutos', label('quantidadeProdutos'), {}),
  formaPagamento: new StringField('formaPagamento', label('formaPagamento'), {}),
  valorTotal: new DecimalField('valorTotal', label('valorTotal'), {}),
  dataPedido: new DateTimeField('dataPedido', label('dataPedido'), {}),
  dataProcessamento: new DateTimeField('dataProcessamento', label('dataProcessamento'), {}),
  dataEnvio: new DateTimeField('dataEnvio', label('dataEnvio'), {}),
  dataEntrega: new DateTimeField('dataEntrega', label('dataEntrega'), {}),
  dataFaturamento: new DateTimeField('dataFaturamento', label('dataFaturamento'), {}),
  status: new EnumeratorField('status', label('status'), [
    { id: 'pendente', label: enumeratorLabel('status', 'pendente') },
    { id: 'pago', label: enumeratorLabel('status', 'pago') },
    { id: 'cancelado', label: enumeratorLabel('status', 'cancelado') },
    { id: 'enviado', label: enumeratorLabel('status', 'enviado') },
    { id: 'recebido', label: enumeratorLabel('status', 'recebido') },
    { id: 'transito', label: enumeratorLabel('status', 'transito') },
    { id: 'entregue', label: enumeratorLabel('status', 'entregue') },
  ],{}),
  valorFrete: new DecimalField('valorFrete', label('valorFrete'), {}),
  compradorUser: UserField.relationToOne('compradorUser', label('compradorUser'), {}),
  fornecedorEmpresa: EmpresaField.relationToOne('fornecedorEmpresa', label('fornecedorEmpresa'), {}),
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
  quantidadeProdutosRange: new IntegerRangeField(
    'quantidadeProdutosRange',
    label('quantidadeProdutosRange'),
  ),
  valorTotalRange: new DecimalRangeField(
    'valorTotalRange',
    label('valorTotalRange'),
  ),
  dataPedidoRange: new DateTimeRangeField(
    'dataPedidoRange',
    label('dataPedidoRange'),
  ),
  dataProcessamentoRange: new DateTimeRangeField(
    'dataProcessamentoRange',
    label('dataProcessamentoRange'),
  ),
  dataEnvioRange: new DateTimeRangeField(
    'dataEnvioRange',
    label('dataEnvioRange'),
  ),
  dataEntregaRange: new DateTimeRangeField(
    'dataEntregaRange',
    label('dataEntregaRange'),
  ),
  dataFaturamentoRange: new DateTimeRangeField(
    'dataFaturamentoRange',
    label('dataFaturamentoRange'),
  ),
  valorFreteRange: new DecimalRangeField(
    'valorFreteRange',
    label('valorFreteRange'),
  ),
};

export class PedidoModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
