import { Component, OnInit } from '@angular/core';
import { i18n } from 'src/i18n';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { FormSchema } from 'src/app/shared/form/form-schema';
import { UserModel } from 'src/app/user/user-model';
import { PessoaFisicaModel } from 'src/app/pessoa-fisica/pessoa-fisica-model';
import { EmpresaModel } from 'src/app/empresa/empresa-model';
import { Location } from '@angular/common';

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
  camposEnd: any = false;
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

  load = 0;

  //ngModels
  loginModel: any;
  senhaModel:any;
  nomeModel:any;
  cpfModel:any;
  telefoneModel:any;
  emailModel:any;
  logradouroModel:any;
  cepModel:any;
  numeroModel:any;
  bairroModel:any;
  cidadeModel:any;
  estadoModel:any;
  complementoModel:any;
  razaoSocialModel: any;
  cnpjModel:any;

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
    private location: Location
  ) { }

  async ngOnInit() {
    
    this.role = this.authService.currentUser.tenants[0].roles[0];
    this.currentProfile = this.authService.currentProfile;
    
    
    console.log(this.currentProfile)
    console.log(this.role)
    console.log(this.authService)
    
    
    this.buildSchema();
    this.buildForm();
    this.campos = false;
    this.camposEnd = false;

    
    setTimeout(() => {
      console.log(this.authService.currentProfile)
    }, 1000);
    // this.setData();
    
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

    if (this.role == 'pessoa') {
      this.form.value.senha = this.senhaModel
      this.form.value.nome = this.nomeModel
      this.form.value.cpf = this.cpfModel
      this.form.value.telefone = this.telefoneModel
      this.form.value.email = this.emailModel
      this.form.value.logradouro = this.logradouroModel
      this.form.value.cep = this.cepModel
      this.form.value.numero = this.numeroModel
      this.form.value.bairro = this.bairroModel
      this.form.value.cidade = this.cidadeModel
      this.form.value.estado = this.estadoModel
      this.form.value.complemento = this.complementoModel


      if(this.currentProfile != null){
        this.currentProfile.nome = this.nomeModel;
        this.currentProfile.cpf = this.cpfModel;
        this.currentProfile.telefone = this.telefoneModel;
        this.currentProfile.email = this.emailModel;
        this.currentProfile.logradouro = this.logradouroModel;
        this.currentProfile.cep = this.cepModel;
        this.currentProfile.numero = this.numeroModel;
        this.currentProfile.bairro = this.bairroModel;
        this.currentProfile.cidade = this.cidadeModel;
        this.currentProfile.estado = this.estadoModel;
        this.currentProfile.complemento = this.complementoModel;
      }
    }

    if (this.role == 'empresa') {
      this.form.value.senha = this.senhaModel
      this.form.value.razaoSocial = this.razaoSocialModel
      this.form.value.cnpj = this.cnpjModel
      this.form.value.telefone = this.telefoneModel
      this.form.value.email = this.emailModel
      this.form.value.logradouro = this.logradouroModel
      this.form.value.cep = this.cepModel
      this.form.value.numero = this.numeroModel
      this.form.value.bairro = this.bairroModel
      this.form.value.cidade = this.cidadeModel
      this.form.value.estado = this.estadoModel
      this.form.value.complemento = this.complementoModel


      if (this.currentProfile != null) {
        this.currentProfile.razaoSocial = this.razaoSocialModel;
        this.currentProfile.cnpj = this.cnpjModel;
        this.currentProfile.telefone = this.telefoneModel;
        this.currentProfile.email = this.emailModel;
        this.currentProfile.logradouro = this.logradouroModel;
        this.currentProfile.cep = this.cepModel;
        this.currentProfile.numero = this.numeroModel;
        this.currentProfile.bairro = this.bairroModel;
        this.currentProfile.cidade = this.cidadeModel;
        this.currentProfile.estado = this.estadoModel;
        this.currentProfile.complemento = this.complementoModel;
      }
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

  }

  setData() {
    // if (this.currentProfile != null) {
      if(this.role == 'pessoa'){
        this.email = this.fields.email.name
        this.logradouro = this.fields.logradouro.name
        this.numero = this.fields.numero.name
        this.bairro = this.fields.bairro.name
        this.cidade = this.fields.cidade.name
        this.complemento = this.fields.complemento.name
        this.estado = this.fields.estado.name
        this.cpf = this.fields.cpf.name
        this.nome = this.fields.nome.name
        this.telefone = this.fields.telefone.name
        this.cep = this.fields.cep.name
      } 
      if (this.role == 'empresa') {
  
        this.email = this.empresaFields.email.name
        this.logradouro = this.empresaFields.logradouro.name
        this.numero = this.empresaFields.numero.name
        this.bairro = this.empresaFields.bairro.name
        this.cidade = this.empresaFields.cidade.name
        this.complemento = this.empresaFields.complemento.name
        this.estado = this.empresaFields.estado.name
        this.cpf = this.empresaFields.cnpj.name
        this.nome = this.empresaFields.razaoSocial.name
        this.telefone = this.empresaFields.telefone.name
        this.cep = this.empresaFields.cep.name
      }
    // }
  }

  buildForm() {
    this.form = this.schema.buildForm(
      this.authService.currentUser,
    );

    this.load = 0;

      
    // if (this.currentProfile != null) {
      if (this.role == 'pessoa') {
        // alert("AAAAAAAAA")
        this.senhaModel = this.form.value.senha

        this.nomeModel = this.currentProfile.nome
        this.cpfModel = this.currentProfile.cpf

        this.telefoneModel = this.currentProfile.telefone
        // this.form.setValue(this.telefoneModel);

        this.emailModel = this.currentProfile.email
        // this.form.value.email = this.emailModel;

        console.log(this.emailModel)

        this.logradouroModel = this.currentProfile.logradouro
        this.cepModel = this.currentProfile.cep
        this.numeroModel = this.currentProfile.numero
        this.bairroModel = this.currentProfile.bairro
        this.cidadeModel = this.currentProfile.cidade
        this.estadoModel = this.currentProfile.estado
        this.complementoModel = this.currentProfile.complemento
  
      } 
      
      if(this.role == 'empresa') {
        this.senhaModel = this.form.value.senha 
        this.razaoSocialModel = this.currentProfile.razaoSocial 
        this.cnpjModel = this.currentProfile.cnpj 
        this.telefoneModel = this.currentProfile.telefone 
        this.emailModel = this.currentProfile.email 
        this.logradouroModel = this.currentProfile.logradouro 
        this.cepModel = this.currentProfile.cep 
        this.numeroModel = this.currentProfile.numero 
        this.bairroModel = this.currentProfile.bairro 
        this.cidadeModel = this.currentProfile.cidade 
        this.estadoModel = this.currentProfile.estado 
        this.complementoModel = this.currentProfile.complemento 
      }

      setTimeout(() => {
        // console.log(this.form.value)
        console.log(this.emailModel)
        this.load = 1;
      }, 300);

      
    // }
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
    
    if(this.role == 'pessoa'){
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

