import { PedidoModel } from 'src/app/pedido/pedido-model';

const { fields } = PedidoModel;

export default [
  fields.id,
  fields.codigo,
  fields.quantidadeProdutos,
  fields.formaPagamento,
  fields.valorTotal,
  fields.dataPedido,
  fields.dataProcessamento,
  fields.dataEnvio,
  fields.dataEntrega,
  fields.dataFaturamento,
  fields.status,
  fields.valorFrete,
  fields.compradorUser,
  fields.fornecedorEmpresa,
  fields.produto,
  fields.createdAt,
  fields.updatedAt,
];
