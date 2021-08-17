import { CartaoModel } from 'src/app/cartao/cartao-model';

const { fields } = CartaoModel;

export default [
  fields.id,
  fields.tipo,
  fields.nomeTitular,
  fields.apelido,
  fields.numero,
  fields.cvv,
  fields.validade,
  fields.bandeira,
  fields.user,
  fields.createdAt,
  fields.updatedAt,
];
