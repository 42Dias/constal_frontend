import { PessoaFisicaModel } from 'src/app/pessoa-fisica/pessoa-fisica-model';

const { fields } = PessoaFisicaModel;

export default [
  fields.id,
  fields.cpf,
  fields.nome,
  fields.email,
  fields.telefone,
  fields.celular,
  fields.cep,
  fields.logradouro,
  fields.numero,
  fields.complemento,
  fields.pontoReferencia,
  fields.cidade,
  fields.estado,
  fields.bairro,
  fields.pix,
  fields.foto,
  fields.user,
  fields.createdAt,
  fields.updatedAt,
];
