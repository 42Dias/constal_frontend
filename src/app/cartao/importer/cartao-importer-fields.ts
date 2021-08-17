import { CartaoModel } from 'src/app/cartao/cartao-model';

const { fields } = CartaoModel;

export default [
  fields.tipo,
  fields.nomeTitular,
  fields.apelido,
  fields.numero,
  fields.cvv,
  fields.validade,
  fields.bandeira,
  fields.user,
];
