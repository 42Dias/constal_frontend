import { ProdutoModel } from 'src/app/produto/produto-model';

const { fields } = ProdutoModel;

export default [
  fields.nome,
  fields.descricao,
  fields.marca,
  fields.modelo,
  fields.caracteristicas,
  fields.codigo,
  fields.preco,
  fields.somatoriaAvaliacoes,
  fields.quantidadeAvaliacoes,
  fields.volumeVendas,
  fields.fotos,
  fields.empresa,
  fields.categoria,
];
