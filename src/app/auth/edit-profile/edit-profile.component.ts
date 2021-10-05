import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { FormSchema } from 'src/app/shared/form/form-schema';
import { UserModel } from 'src/app/user/user-model';
import { PessoaFisicaModel } from 'src/app/pessoa-fisica/pessoa-fisica-model';
import { EmpresaModel } from 'src/app/empresa/empresa-model';

interface Mes {
  value: string;
  viewValue: string;
}

interface Ano {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  form: FormGroup;
  schema: FormSchema;
  campos: any;
  role: any;
  camposEnd: any;
  email: any;
  logradouro: any;
  numero: any;
  bairro: any;
  cidade: any;
  complemento: any;
  estado: any;
  cpf: any;
  nome: any;
  telefone: any;
  cep: any;
  currentProfile: any;

  mes: Mes[] = [
    { value: 'janeiro-0', viewValue: '01' },
    { value: 'fevereiro-1', viewValue: '02' },
    { value: 'março-2', viewValue: '03' },
    { value: 'abril-3', viewValue: '04' },
    { value: 'maio-4', viewValue: '05' },
    { value: 'junho-5', viewValue: '06' },
    { value: 'julho-6', viewValue: '07' },
    { value: 'agosto-7', viewValue: '08' },
    { value: 'setembro-8', viewValue: '09' },
    { value: 'outubro-9', viewValue: '10' },
    { value: 'novembro-10', viewValue: '11' },
    { value: 'dezembro-11', viewValue: '12' }
  ];

  ano: Ano[] = [
    { value: 'ano-0', viewValue: '21' },
    { value: 'ano-1', viewValue: '22' },
    { value: 'ano-2', viewValue: '23' },
    { value: 'ano-3', viewValue: '24' },
    { value: 'ano-4', viewValue: '25' },
    { value: 'ano-5', viewValue: '26' },
    { value: 'ano-6', viewValue: '27' },
    { value: 'ano-7', viewValue: '28' },
    { value: 'ano-8', viewValue: '29' },
    { value: 'ano-9', viewValue: '30' },
    { value: 'ano-10', viewValue: '31' },
    { value: 'ano-11', viewValue: '32' }
  ];



  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) { }

  async ngOnInit() {
    this.role = this.authService.currentUser.tenants[0].roles[0];
    this.currentProfile = this.authService.currentProfile;

    this.buildSchema();
    this.buildForm();
    this.campos = false;
    this.camposEnd = false;

    this.setData();

  }

  get fields() {
    return PessoaFisicaModel.fields;
  }

  get empresaFields() {
    return EmpresaModel.fields;
  }

  get saveLoading() {
    return this.authService.loadingUpdateProfile;
  }

  async doSave() {
    if (!this.form.valid) {
      return;
    }

    const values = this.schema.cast(this.form.value);
    return await this.authService.doUpdateProfile(this.role, values);
  }

  doReset() {
    this.buildForm();
  }

  habilitaCampos() {
    if (this.campos == false) {
      this.campos = true;
    } else {
      this.campos = false
    }
  }

  habilitarEnd() {
    if (this.camposEnd == false) {
      this.camposEnd = true;
    } else {
      this.camposEnd = false
    }
    console.log(this.camposEnd);

  }

  setData() {
    this.email = this.fields.email.name;
    this.logradouro = this.fields.logradouro.name;
    this.numero = this.fields.numero.name;
    this.bairro = this.fields.bairro.name;
    this.cidade = this.fields.cidade.name;
    this.complemento = this.fields.complemento.name;
    this.estado = this.fields.estado.name;
    this.cpf = this.fields.cpf.name;
    this.nome = this.fields.nome.name;
    this.telefone = this.fields.telefone.name;
    this.cep = this.fields.cep.name;
  }

  buildForm() {
    this.form = this.schema.buildForm(
      this.authService.currentUser,
    );
  }

  get currentUser() {
    return this.authService.currentUser;
  }


  breadcrumb = [
    [i18n('dashboard.menu'), '/'],
    [i18n('auth.profile.title')],
  ];

  private buildSchema() {
    if (this.role == 'empresa') {
      this.schema = new FormSchema(
        [
          this.empresaFields.email,
          this.empresaFields.logradouro,
          this.empresaFields.numero,
          this.empresaFields.bairro,
          this.empresaFields.cidade,
          this.empresaFields.complemento,
          this.empresaFields.estado,
          this.empresaFields.cnpj,
          this.empresaFields.razaoSocial,
          this.empresaFields.telefone,
          this.empresaFields.cep,
        ],
        this.formBuilder,
      );
    }
    else {
      this.schema = new FormSchema(
        [
          this.fields.email,
          this.fields.logradouro,
          this.fields.numero,
          this.fields.bairro,
          this.fields.cidade,
          this.fields.complemento,
          this.fields.estado,
          this.fields.cpf,
          this.fields.nome,
          this.fields.telefone,
          this.fields.cep,
        ],
        this.formBuilder,
      );
    }
  }
}

