import { GenericModel } from 'src/app/shared/model/generic-model';
import { i18n } from 'src/i18n';
import DateTimeField from 'src/app/shared/fields/date-time-field';
import IdField from 'src/app/shared/fields/id-field';
import DateTimeRangeField from 'src/app/shared/fields/date-time-range-field';
import IntegerField from 'src/app/shared/fields/integer-field';
import IntegerRangeField from 'src/app/shared/fields/integer-range-field';
import StringField from 'src/app/shared/fields/string-field';
import DecimalRangeField from 'src/app/shared/fields/decimal-range-field';
import DecimalField from 'src/app/shared/fields/decimal-field';
import { EmpresaField } from 'src/app/empresa/empresa-field';
import { CategoriaField } from 'src/app/categoria/categoria-field';
import { Storage } from 'src/security/storage';
import ImagesField from 'src/app/shared/fields/images-field';

function label(name) {
  return i18n(`entities.produto.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  nome: new StringField('nome', label('nome'), {}),
  descricao: new StringField('descricao', label('descricao'), {}),
  marca: new StringField('marca', label('marca'), {}),
  modelo: new StringField('modelo', label('modelo'), {}),
  caracteristicas: new StringField('caracteristicas', label('caracteristicas'), {}),
  codigo: new StringField('codigo', label('codigo'), {}),
  preco: new DecimalField('preco', label('preco'), {}),
  somatoriaAvaliacoes: new IntegerField('somatoriaAvaliacoes', label('somatoriaAvaliacoes'), {}),
  quantidadeAvaliacoes: new IntegerField('quantidadeAvaliacoes', label('quantidadeAvaliacoes'), {}),
  volumeVendas: new IntegerField('volumeVendas', label('volumeVendas'), {}),
  fotos: new ImagesField('fotos', label('fotos'),Storage.values.produtoFotos, {}),
  empresa: EmpresaField.relationToOne('empresa', label('empresa'), {}),
  categoria: CategoriaField.relationToOne('categoria', label('categoria'), {}),
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
  precoRange: new DecimalRangeField(
    'precoRange',
    label('precoRange'),
  ),
  somatoriaAvaliacoesRange: new IntegerRangeField(
    'somatoriaAvaliacoesRange',
    label('somatoriaAvaliacoesRange'),
  ),
  quantidadeAvaliacoesRange: new IntegerRangeField(
    'quantidadeAvaliacoesRange',
    label('quantidadeAvaliacoesRange'),
  ),
  volumeVendasRange: new IntegerRangeField(
    'volumeVendasRange',
    label('volumeVendasRange'),
  ),
};

export class ProdutoModel extends GenericModel {
  static get fields() {
    return fields;
  }
}
