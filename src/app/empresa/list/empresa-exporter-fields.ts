import { EmpresaModel } from 'src/app/empresa/empresa-model';

const { fields } = EmpresaModel;

export default [
  fields.id,
  fields.marca,
  fields.razaoSocial,
  fields.cnpj,
  fields.telefone,
  fields.ramal,
  fields.email,
  fields.website,
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
