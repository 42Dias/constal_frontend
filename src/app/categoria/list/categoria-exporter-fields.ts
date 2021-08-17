import { CategoriaModel } from 'src/app/categoria/categoria-model';

const { fields } = CategoriaModel;

export default [
  fields.id,
  fields.nome,
  fields.createdAt,
  fields.updatedAt,
];
