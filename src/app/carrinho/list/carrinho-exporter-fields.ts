import { CarrinhoModel } from 'src/app/carrinho/carrinho-model';

const { fields } = CarrinhoModel;

export default [
  fields.id,
  fields.userId,
  fields.produto,
  fields.createdAt,
  fields.updatedAt,
];
