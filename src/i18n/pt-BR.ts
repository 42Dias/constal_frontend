const ptBR = {
  common: {
    or: 'ou',
    cancel: 'Cancelar',
    reset: 'Limpar',
    save: 'Salvar',
    search: 'Buscar',
    edit: 'Editar',
    remove: 'Remover',
    new: 'Novo',
    export: 'Exportar para Excel',
    noDataToExport: 'Não há dados para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Sim',
    no: 'Não',
    pause: 'Pausar',
    areYouSure: 'Tem certeza?',
    view: 'Visualizar',
    destroy: 'Deletar',
    mustSelectARow: 'Selecine uma linha',
    confirm: 'Confirmar',
    start: 'Início',
    end: 'Fim',
    filters: 'Filtros',
  },

  app: {
    title: 'Aplicação',
  },

  api: {
    menu: 'API',
  },

  entities: {
    pessoaFisica: {
        name: 'PessoaFisica',
        label: 'PessoaFisicas',
        menu: 'PessoaFisicas',
        exporterFileName: 'PessoaFisica_exportados',
        list: {
          menu: 'PessoaFisicas',
          title: 'PessoaFisicas',
        },
        create: {
          success: 'PessoaFisica salvo com sucesso',
        },
        update: {
          success: 'PessoaFisica salvo com sucesso',
        },
        destroy: {
          success: 'PessoaFisica deletado com sucesso',
        },
        destroyAll: {
          success: 'PessoaFisica(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar PessoaFisica',
        },
        fields: {
          id: 'Id',
          'cpf': 'Cpf',
          'nome': 'Nome',
          'email': 'Email',
          'telefone': 'Telefone',
          'celular': 'Celular',
          'cep': 'Cep',
          'logradouro': 'Logradouro',
          'numeroRange': 'Número',
          'numero': 'Número',
          'complemento': 'Complemento',
          'pontoReferencia': 'Ponto de Referência',
          'cidade': 'Cidade',
          'estado': 'Estado',
          'bairro': 'Bairro',
          'pix': 'Pix',
          'foto': 'Foto',
          'user': 'User',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {
          'cpf': '999.999.999-99',
          'cep': '99999-999',
        },
        hints: {

        },
        new: {
          title: 'Novo PessoaFisica',
        },
        view: {
          title: 'Visualizar PessoaFisica',
        },
        importer: {
          title: 'Importar PessoaFisicas',
          fileName: 'pessoaFisica_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    empresa: {
        name: 'Empresa',
        label: 'Empresas',
        menu: 'Empresas',
        exporterFileName: 'Empresa_exportados',
        list: {
          menu: 'Empresas',
          title: 'Empresas',
        },
        create: {
          success: 'Empresa salvo com sucesso',
        },
        update: {
          success: 'Empresa salvo com sucesso',
        },
        destroy: {
          success: 'Empresa deletado com sucesso',
        },
        destroyAll: {
          success: 'Empresa(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Empresa',
        },
        fields: {
          id: 'Id',
          'marca': 'Marca',
          'razaoSocial': 'RazaoSocial',
          'cnpj': 'Cnpj',
          'telefone': 'Telefone',
          'ramal': 'Ramal',
          'email': 'Email',
          'website': 'Website',
          'cep': 'Cep',
          'logradouro': 'Logradouro',
          'numeroRange': 'Numero',
          'numero': 'Numero',
          'complemento': 'Complemento',
          'pontoReferencia': 'Ponto de Referência',
          'cidade': 'Cidade',
          'estado': 'Estado',
          'bairro': 'Bairro',
          'foto': 'Foto',
          'user': 'User',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {
          'cnpj': '99.999.999/9999-99',
          'cep': '99999-999',
        },
        hints: {

        },
        new: {
          title: 'Novo Empresa',
        },
        view: {
          title: 'Visualizar Empresa',
        },
        importer: {
          title: 'Importar Empresas',
          fileName: 'empresa_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    cartao: {
        name: 'Cartão',
        label: 'Cartões',
        menu: 'Cartões',
        exporterFileName: 'Cartão_exportados',
        list: {
          menu: 'Cartões',
          title: 'Cartões',
        },
        create: {
          success: 'Cartão salvo com sucesso',
        },
        update: {
          success: 'Cartão salvo com sucesso',
        },
        destroy: {
          success: 'Cartão deletado com sucesso',
        },
        destroyAll: {
          success: 'Cartão(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Cartão',
        },
        fields: {
          id: 'Id',
          'tipo': 'Tipo',
          'nomeTitular': 'Nome do Titular',
          'apelido': 'Apelido',
          'numero': 'Numero',
          'cvv': 'Cvv',
          'validade': 'Validade',
          'bandeira': 'Bandeira',
          'user': 'User',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {
          'tipo': {
            'credito': 'Credito',
            'debito': 'Debito',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Cartão',
        },
        view: {
          title: 'Visualizar Cartão',
        },
        importer: {
          title: 'Importar Cartões',
          fileName: 'cartao_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    produto: {
        name: 'Produto',
        label: 'Produtos',
        menu: 'Produtos',
        exporterFileName: 'Produto_exportados',
        list: {
          menu: 'Produtos',
          title: 'Produtos',
        },
        create: {
          success: 'Produto salvo com sucesso',
        },
        update: {
          success: 'Produto salvo com sucesso',
        },
        destroy: {
          success: 'Produto deletado com sucesso',
        },
        destroyAll: {
          success: 'Produto(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Produto',
        },
        fields: {
          id: 'Id',
          'nome': 'Nome',
          'descricao': 'Descrição',
          'marca': 'Marca',
          'modelo': 'Modelo',
          'caracteristicas': 'Características',
          'codigo': 'Código',
          'precoRange': 'Preço',
          'preco': 'Preço',
          'somatoriaAvaliacoesRange': 'SomatoriaAvaliacoes',
          'somatoriaAvaliacoes': 'SomatoriaAvaliacoes',
          'quantidadeAvaliacoesRange': 'QuantidadeAvaliacoes',
          'quantidadeAvaliacoes': 'QuantidadeAvaliacoes',
          'volumeVendasRange': 'VolumeVendas',
          'volumeVendas': 'VolumeVendas',
          'fotos': 'Fotos',
          'empresa': 'Empresa',
          'categoria': 'Categoria',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Produto',
        },
        view: {
          title: 'Visualizar Produto',
        },
        importer: {
          title: 'Importar Produtos',
          fileName: 'produto_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    pedido: {
        name: 'Pedido',
        label: 'Pedidos',
        menu: 'Pedidos',
        exporterFileName: 'Pedido_exportados',
        list: {
          menu: 'Pedidos',
          title: 'Pedidos',
        },
        create: {
          success: 'Pedido salvo com sucesso',
        },
        update: {
          success: 'Pedido salvo com sucesso',
        },
        destroy: {
          success: 'Pedido deletado com sucesso',
        },
        destroyAll: {
          success: 'Pedido(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Pedido',
        },
        fields: {
          id: 'Id',
          'codigo': 'Código',
          'quantidadeProdutosRange': 'Quantidade de Produtos',
          'quantidadeProdutos': 'Quantidade de Produtos',
          'formaPagamento': 'Forma de Pagamento',
          'valorTotalRange': 'Valor Total',
          'valorTotal': 'Valor Total',
          'dataPedidoRange': 'Data do Pedido',
          'dataPedido': 'Data do Pedido',
          'dataProcessamentoRange': 'Data do Processamento',
          'dataProcessamento': 'Data do Processamento',
          'dataEnvioRange': 'Data do Envio',
          'dataEnvio': 'Data do Envio',
          'dataEntregaRange': 'Data de Entrega',
          'dataEntrega': 'Data de Entrega',
          'dataFaturamentoRange': 'Data de Faturamento',
          'dataFaturamento': 'Data de Faturamento',
          'status': 'Status',
          'valorFreteRange': 'ValorFrete',
          'valorFrete': 'ValorFrete',
          'compradorUser': 'CompradorUser',
          'fornecedorEmpresa': 'FornecedorEmpresa',
          'produto': 'Produto',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {
          'status': {
            'pendente': 'Pendente',
            'pago': 'Pago',
            'cancelado': 'Cancelado',
            'enviado': 'Enviado',
            'recebido': 'Recebido',
            'transito': 'Transito',
            'entregue': 'Entregue',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Pedido',
        },
        view: {
          title: 'Visualizar Pedido',
        },
        importer: {
          title: 'Importar Pedidos',
          fileName: 'pedido_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    carrinho: {
        name: 'Carrinho',
        label: 'Carrinhos',
        menu: 'Carrinhos',
        exporterFileName: 'Carrinho_exportados',
        list: {
          menu: 'Carrinhos',
          title: 'Carrinhos',
        },
        create: {
          success: 'Carrinho salvo com sucesso',
        },
        update: {
          success: 'Carrinho salvo com sucesso',
        },
        destroy: {
          success: 'Carrinho deletado com sucesso',
        },
        destroyAll: {
          success: 'Carrinho(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Carrinho',
        },
        fields: {
          id: 'Id',
          'userId': 'UserId',
          'produto': 'Produto',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Carrinho',
        },
        view: {
          title: 'Visualizar Carrinho',
        },
        importer: {
          title: 'Importar Carrinhos',
          fileName: 'carrinho_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    categoria: {
        name: 'Categoria',
        label: 'Categorias',
        menu: 'Categorias',
        exporterFileName: 'Categoria_exportados',
        list: {
          menu: 'Categorias',
          title: 'Categorias',
        },
        create: {
          success: 'Categoria salvo com sucesso',
        },
        update: {
          success: 'Categoria salvo com sucesso',
        },
        destroy: {
          success: 'Categoria deletado com sucesso',
        },
        destroyAll: {
          success: 'Categoria(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Categoria',
        },
        fields: {
          id: 'Id',
          'nome': 'Nome',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Categoria',
        },
        view: {
          title: 'Visualizar Categoria',
        },
        importer: {
          title: 'Importar Categorias',
          fileName: 'categoria_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },
  },

  auth: {
    tenants: 'Áreas de Trabalho',
    profile: {
      title: 'Perfil',
      success: 'Perfil atualizado com sucesso',
    },
    createAnAccount: 'Criar uma conta',
    rememberMe: 'Lembrar-me',
    forgotPassword: 'Esqueci minha senha',
    signin: 'Entrar',
    signup: 'Registrar',
    signout: 'Sair',
    alreadyHaveAnAccount: 'Já possui uma conta? Entre.',
    social: {
      errors: {
        'auth-invalid-provider':
          'Este email está registrado para outro provedor.',
        'auth-no-email': `O email associado a esta conta é privado ou não existe.`,
      },
    },
    signinWithAnotherAccount: 'Entrar com outra conta',
    emailUnverified: {
      message: `Por favor, confirme seu email em <strong>{0}</strong> para continuar.`,
      submit: `Reenviar confirmação por email`,
    },
    passwordResetEmail: {
      message: 'Enviar email de redefinição de senha',
      error: `Email não encontrado`,
    },
    emptyPermissions: {
      message: `Você ainda não possui permissões. Aguarde o administrador conceder seus privilégios.`,
    },
    passwordReset: {
      message: 'Alterar senha',
    },
    passwordChange: {
      title: 'Mudar a Senha',
      success: 'Senha alterada com sucesso',
      mustMatch: 'Senhas devem ser iguais',
    },
    emailAddressVerificationEmail: {
      error: `Email não encontrado`,
    },
    verificationEmailSuccess: `Verificação de email enviada com sucesso`,
    passwordResetEmailSuccess: `Email de redefinição de senha enviado com sucesso`,
    passwordResetSuccess: `Senha alterada com sucesso`,
    verifyEmail: {
      success: 'Email verificado com sucesso.',
      message:
        'Aguarde um momento, seu email está sendo verificado...',
    },
  },

  roles: {
    admin: {
      label: 'Administrador',
      description: 'Acesso completo a todos os recursos',
    },
    custom: {
      label: 'Perfil Customizado',
      description: 'Acesso customizado',
    },
  },

  user: {
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nome',
      firstName: 'Nome',
      lastName: 'Sobrenome',
      status: 'Estado',
      phoneNumber: 'Telefone',
      role: 'Perfil',
      createdAt: 'Criado em',
      updatedAt: 'Atualizado em',
      roleUser: 'Perfil/Usuário',
      roles: 'Perfis',
      createdAtRange: 'Criado em',
      password: 'Senha',
      oldPassword: 'Senha Antiga',
      newPassword: 'Nova Senha',
      newPasswordConfirmation: 'Confirmação da Nova Senha',
      rememberMe: 'Lembrar-me',
    },
    status: {
      active: 'Ativo',
      invited: 'Convidado',
      'empty-permissions': 'Aguardando Permissões',
    },
    invite: 'Convidar',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} é inválido',
    },
    title: 'Usuários',
    menu: 'Usuários',
    doAddSuccess: 'Usuário(s) salvos com sucesso',
    doUpdateSuccess: 'Usuário salvo com sucesso',
    exporterFileName: 'usuarios_exportados',
    doDestroySuccess: 'Usuário deletado com sucesso',
    doDestroyAllSuccess:
      'Usuários deletado com sucesso',
    edit: {
      title: 'Editar usuário',
    },
    new: {
      title: 'Novo(s) Usuário(s)',
      titleModal: 'Novo Usuário',
      emailsHint:
        'Separe múltiplos endereços de e-mail usando a vírgula.',
    },
    view: {
      title: 'Visualizar Usuário',
      activity: 'Atividades',
    },
    importer: {
      title: 'Importar Usuários',
      fileName: 'usuarios_template_importacao',
      hint:
        'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
    },
    errors: {
      userAlreadyExists: 'Usuário com este email já existe',
      userNotFound: 'Usuário não encontrado',
      revokingOwnPermission: `Você não pode revogar sua própria permissão de proprietário`,
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Área de Trabalho',
    menu: 'Áreas de Trabalho',
    list: {
      menu: 'Áreas de Trabalho',
      title: 'Áreas de Trabalho',
    },
    create: {
      button: 'Criar Área de Trabalho',
      success: 'Área de Trabalho salvo com sucesso',
    },
    update: {
      success: 'Área de Trabalho salva com sucesso',
    },
    destroy: {
      success: 'Área de Trabalho deletado com sucesso',
    },
    destroyAll: {
      success: 'Área(s) de Trabalho deletado com sucesso',
    },
    edit: {
      title: 'Editar Área de Trabalho',
    },
    fields: {
      id: 'Id',
      name: 'Nome',
      tenantName: 'Nome da Área de Trabalho',
      tenantUrl: 'URL da Área de Trabalho',
      tenantId: 'Área de Trabalho',
      plan: 'Plano',
    },
    enumerators: {},
    new: {
      title: 'Nova Área de Trabalho',
    },
    invitation: {
      view: 'Ver Convites',
      invited: 'Convidado',
      accept: 'Aceitar Convite',
      decline: 'Recusar Convite',
      declined: 'Convite recusado com sucesso',
      acceptWrongEmail: 'Aceitar Convite Com Este Email',
    },
    select: 'Selecionar Área de Trabalho',
    validation: {
      url:
        'A URL pode conter apenas letras minúsculas, números e traços (e deve iniciar com letra ou número).',
    },
  },

  plan: {
    menu: 'Planos',
    title: 'Planos',

    free: {
      label: 'Gratuito',
      price: '$0',
    },
    growth: {
      label: 'Growth',
      price: '$10',
    },
    enterprise: {
      label: 'Enterprise',
      price: '$50',
    },

    pricingPeriod: '/mês',
    current: 'Plano Atual',
    subscribe: 'Assinar',
    manage: 'Gerenciar Assinatura',
    somethingWrong:
      'Há algo errado com sua assinatura. Por favor clique em Gerenciar Assinatura para mais informações.',
    cancelAtPeriodEnd:
      'O plano será cancelado no fim do período.',
    notPlanUser: `Esta assinatura não é controlada por você.`,
  },

  auditLog: {
    menu: 'Registros de Auditoria',
    title: 'Registros de Auditoria',
    exporterFileName: 'registros_autoria_exportados',
    entityNamesHint:
      'Separe múltiplas entidades por vírgula',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidade',
      entityNames: 'Entidades',
      entityId: 'ID da Entidade',
      action: 'Ação',
      values: 'Valores',
      timestamp: 'Data',
      createdByEmail: 'Email do Usuário',
    },
  },
  settings: {
    title: 'Configurações',
    menu: 'Configurações',
    save: {
      success:
        'Configurações salvas com sucesso. A página irá recarregar em {0} para que as alterações tenham efeito.',
    },
    fields: {
      theme: 'Tema',
      primaryColor: 'Cor Primária',
      secondaryColor: 'Cor Secundária',
      logos: 'Logo',
      backgroundImages: 'Papel de Parede',
    },
    colors: {
      default: 'Padrão',
      amber: 'Âmbar',
      blue: 'Azul',
      cyan: 'Ciano',
      deep_orange: 'Laranja Escuro',
      deep_purple: 'Roxo Escuro',
      green: 'Azul',
      indigo: 'Índigo',
      light_blue: 'Azul Fraco',
      light_green: 'Verde Fraco',
      lime: 'Limão',
      orange: 'Laranja',
      pink: 'Rosa',
      purple: 'Roxo',
      red: 'Vermelho',
      teal: 'Verde Azulado',
      yellow: 'Amarelo',
      grey: 'Cinza',
      blue_grey: 'Azul Cinza',
      brown: 'Marrom',
    },
  },
  dashboard: {
    menu: 'Dashboard',
    message: `Esta página usa dados falsos apenas para fins de demonstração. Você pode editá-la em frontend/src/app/dashboard/components/dashboard.component.html.`,
    charts: {
      day: 'Dia',
      red: 'Vermelho',
      green: 'Verde',
      yellow: 'Amarelho',
      grey: 'Cinza',
      blue: 'Azul',
      orange: 'Laranja',
      months: {
        1: 'Janeiro',
        2: 'Fevereiro',
        3: 'Março',
        4: 'Abril',
        5: 'Maio',
        6: 'Junho',
        7: 'Julho',
      },
      eating: 'Comendo',
      drinking: 'Bebendo',
      sleeping: 'Dormindo',
      designing: 'Projetando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Correndo',
      customer: 'Cliente',
    },
  },
  errors: {
    backToHome: 'Voltar a página inicial',
    403: `Desculpe, você não tem acesso a esta página`,
    404: 'Desculpe, a página que você visitou não existe',
    500: 'Desculpe, o servidor está relatando um erro',
    429: 'Muitas requisições. Por favor, tente novamente mais tarde.',
    forbidden: {
      message: 'Acesso negado',
    },
    validation: {
      message: 'Ocorreu um erro',
    },
    defaultErrorMessage: 'Ops, ocorreu um erro',
  },

  preview: {
    error:
      'Desculpe, esta operação não é permitida em modo de demonstração.',
  },

  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} é inválido',
      required: '${path} é obrigatório',
      oneOf:
        '${path} deve ser um dos seguintes valores: ${values}',
      notOneOf:
        '${path} não deve ser um dos seguintes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} deve ser um ${type}`;
      },
    },
    string: {
      length: '${path} deve possuir ${length} caracteres',
      min:
        '${path} deve possuir ao menos ${min} caracteres',
      max:
        '${path} deve possui no máximo ${max} caracteres',
      matches:
        '${path} deve respeitar o padrão: "${regex}"',
      email: '${path} deve ser um email válido',
      url: '${path} deve ser uma URL válida',
      trim:
        '${path} deve ser uma palavra sem espaços em branco',
      lowercase: '${path} deve ser minúsculo',
      uppercase: '${path} deve ser maiúsculo',
      selected: '${path} deve ser selecionado',
    },
    number: {
      min: '${path} deve ser maior ou igual a ${min}',
      max: '${path} deve ser menor ou igual a ${max}',
      lessThan: '${path} deve ser menor que ${less}',
      moreThan: '${path} deve ser maior que ${more}',
      notEqual: '${path} não deve ser igual a ${notEqual}',
      positive: '${path} deve ser um número positivo',
      negative: '${path} deve ser um número negativo',
      integer: '${path} deve ser um inteiro',
      type: '${path} deve ser um número',
    },
    date: {
      min: '${path} deve ser posterior a ${min}',
      max: '${path} deve ser mais cedo do que ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} não pode ter atributos não especificados no formato do objeto',
    },
    array: {
      min: '${path} deve possuir ao menos ${min} itens',
      max: '${path} deve possuir no máximo ${max} itens',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'Você deve fazer upload de uma imagem',
    size:
      'O arquivo é muito grande. O tamanho máximo permitido é {0}',
    formats: `Formato inválido. Deve ser um destes: {0}.`,
  },
  importer: {
    line: 'Linha',
    status: 'Estado',
    pending: 'Pendente',
    imported: 'Importado',
    error: 'Erro',
    total: `{0} importado, {1} pendente e {2} com erro`,
    importedMessage: `Processados {0} de {1}.`,
    noNavigateAwayMessage:
      'Não saia desta página ou a importação será interrompida.',
    completed: {
      success:
        'Importação concluída. Todas as linhas foram importadas com sucesso.',
      someErrors:
        'O processamento foi concluído, mas algumas linhas não puderam ser importadas.',
      allErrors:
        'Importação falhou. Não há linhas válidas.',
    },
    form: {
      downloadTemplate: 'Baixe o modelo',
      hint:
        'Clique ou arraste o arquivo para esta área para continuar.',
    },
    list: {
      discardConfirm:
        'Você tem certeza? Dados não importados serão perdidos.',
    },
    errors: {
      invalidFileEmpty: 'O arquivo está vazio',
      invalidFileExcel:
        'Apenas arquivos Excel (.xlsx) são permitidos',
      invalidFileUpload:
        'Arquivo inválido. Verifique se você está usando a última versão do modelo.',
      importHashRequired: 'Hash de importação é necessário',
      importHashExistent: 'Dados já foram importados',
    },
  },

  paginator: {
    itemsPerPageLabel: 'Itens por página:',
    nextPageLabel: 'Próxima',
    previousPageLabel: 'Anterior',
    firstPageLabel: 'Primeira página',
    lastPageLabel: 'Última página',
    getRangeLabel: {
      zero: '0 de {0}',
      interval: '{0} - {1} de {2}',
    },
  },

  datetime: {
    upSecondLabel: 'Adicionar um segundo',
    downSecondLabel: 'Diminuir um segundo',
    upMinuteLabel: 'Adicionar um minuto',
    downMinuteLabel: 'Diminuir um minuto',
    upHourLabel: 'Adicionar uma hora',
    downHourLabel: 'Diminuir uma hora',
    prevMonthLabel: 'Mês anterior',
    nextMonthLabel: 'Mês seguinte',
    prevYearLabel: 'Ano anterior',
    nextYearLabel: 'Ano seguinte',
    prevMultiYearLabel: '21 anos anteriores',
    nextMultiYearLabel: '21 anos próximos',
    switchToMonthViewLabel: 'Alterar para visão mensal',
    switchToMultiYearViewLabel: 'Escolher mês e ano',
    cancelBtnLabel: 'Cancelar',
    setBtnLabel: 'Confirmar',
    rangeFromLabel: 'De',
    rangeToLabel: 'Até',
    hour12AMLabel: 'AM',
    hour12PMLabel: 'PM',
  },

  table: {
    noData: 'Não há dados',
    loading: 'Carregando...',
  },

  autocomplete: {
    loading: 'Carregando...',
  },

  imagesViewer: {
    noImage: 'Sem imagem',
  },
};

export default ptBR;
