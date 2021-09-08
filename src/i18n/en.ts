const en = {
  common: {
    or: 'or',
    cancel: 'Cancel',
    reset: 'Reset',
    save: 'Save',
    search: 'Search',
    edit: 'Edit',
    remove: 'Remove',
    new: 'New',
    export: 'Export to Excel',
    noDataToExport: 'No data to export',
    import: 'Import',
    discard: 'Discard',
    yes: 'Yes',
    no: 'No',
    pause: 'Pause',
    areYouSure: 'Are you sure?',
    view: 'View',
    destroy: 'Delete',
    mustSelectARow: 'Must select a row',
    confirm: 'Confirm',
    start: 'Start',
    end: 'End',
    filters: 'Filters',
  },

  app: {
    title: 'Application',
  },

  api: {
    menu: 'API',
  },

  entities: {
    pessoaFisica: {
        name: 'pessoaFisica',
        label: 'PessoaFisicas',
        menu: 'PessoaFisicas',
        exporterFileName: 'pessoaFisica_export',
        list: {
          menu: 'PessoaFisicas',
          title: 'PessoaFisicas',
        },
        create: {
          success: 'PessoaFisica successfully saved',
        },
        update: {
          success: 'PessoaFisica successfully saved',
        },
        destroy: {
          success: 'PessoaFisica successfully deleted',
        },
        destroyAll: {
          success: 'PessoaFisica(s) successfully deleted',
        },
        edit: {
          title: 'Edit PessoaFisica',
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
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
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
          title: 'New PessoaFisica',
        },
        view: {
          title: 'View PessoaFisica',
        },
        importer: {
          title: 'Import PessoaFisicas',
          fileName: 'pessoaFisica_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    empresa: {
        name: 'empresa',
        label: 'Empresas',
        menu: 'Empresas',
        exporterFileName: 'empresa_export',
        list: {
          menu: 'Empresas',
          title: 'Empresas',
        },
        create: {
          success: 'Empresa successfully saved',
        },
        update: {
          success: 'Empresa successfully saved',
        },
        destroy: {
          success: 'Empresa successfully deleted',
        },
        destroyAll: {
          success: 'Empresa(s) successfully deleted',
        },
        edit: {
          title: 'Edit Empresa',
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
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
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
          title: 'New Empresa',
        },
        view: {
          title: 'View Empresa',
        },
        importer: {
          title: 'Import Empresas',
          fileName: 'empresa_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    cartao: {
        name: 'cartao',
        label: 'Cartões',
        menu: 'Cartões',
        exporterFileName: 'cartao_export',
        list: {
          menu: 'Cartões',
          title: 'Cartões',
        },
        create: {
          success: 'Cartão successfully saved',
        },
        update: {
          success: 'Cartão successfully saved',
        },
        destroy: {
          success: 'Cartão successfully deleted',
        },
        destroyAll: {
          success: 'Cartão(s) successfully deleted',
        },
        edit: {
          title: 'Edit Cartão',
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
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
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
          title: 'New Cartão',
        },
        view: {
          title: 'View Cartão',
        },
        importer: {
          title: 'Import Cartões',
          fileName: 'cartao_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    produto: {
        name: 'produto',
        label: 'Produtos',
        menu: 'Produtos',
        exporterFileName: 'produto_export',
        list: {
          menu: 'Produtos',
          title: 'Produtos',
        },
        create: {
          success: 'Produto successfully saved',
        },
        update: {
          success: 'Produto successfully saved',
        },
        destroy: {
          success: 'Produto successfully deleted',
        },
        destroyAll: {
          success: 'Produto(s) successfully deleted',
        },
        edit: {
          title: 'Edit Produto',
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
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Produto',
        },
        view: {
          title: 'View Produto',
        },
        importer: {
          title: 'Import Produtos',
          fileName: 'produto_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    pedido: {
        name: 'pedido',
        label: 'Pedidos',
        menu: 'Pedidos',
        exporterFileName: 'pedido_export',
        list: {
          menu: 'Pedidos',
          title: 'Pedidos',
        },
        create: {
          success: 'Pedido successfully saved',
        },
        update: {
          success: 'Pedido successfully saved',
        },
        destroy: {
          success: 'Pedido successfully deleted',
        },
        destroyAll: {
          success: 'Pedido(s) successfully deleted',
        },
        edit: {
          title: 'Edit Pedido',
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
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
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
          title: 'New Pedido',
        },
        view: {
          title: 'View Pedido',
        },
        importer: {
          title: 'Import Pedidos',
          fileName: 'pedido_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    carrinho: {
        name: 'carrinho',
        label: 'Carrinhos',
        menu: 'Carrinhos',
        exporterFileName: 'carrinho_export',
        list: {
          menu: 'Carrinhos',
          title: 'Carrinhos',
        },
        create: {
          success: 'Carrinho successfully saved',
        },
        update: {
          success: 'Carrinho successfully saved',
        },
        destroy: {
          success: 'Carrinho successfully deleted',
        },
        destroyAll: {
          success: 'Carrinho(s) successfully deleted',
        },
        edit: {
          title: 'Edit Carrinho',
        },
        fields: {
          id: 'Id',
          'userId': 'UserId',
          'produto': 'Produto',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Carrinho',
        },
        view: {
          title: 'View Carrinho',
        },
        importer: {
          title: 'Import Carrinhos',
          fileName: 'carrinho_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    categoria: {
        name: 'categoria',
        label: 'Categorias',
        menu: 'Categorias',
        exporterFileName: 'categoria_export',
        list: {
          menu: 'Categorias',
          title: 'Categorias',
        },
        create: {
          success: 'Categoria successfully saved',
        },
        update: {
          success: 'Categoria successfully saved',
        },
        destroy: {
          success: 'Categoria successfully deleted',
        },
        destroyAll: {
          success: 'Categoria(s) successfully deleted',
        },
        edit: {
          title: 'Edit Categoria',
        },
        fields: {
          id: 'Id',
          'nome': 'Nome',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Categoria',
        },
        view: {
          title: 'View Categoria',
        },
        importer: {
          title: 'Import Categorias',
          fileName: 'categoria_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },
  },

  auth: {
    tenants: 'Workspaces',
    profile: {
      title: 'Profile',
      success: 'Profile successfully updated',
    },
    createAnAccount: 'Create an account',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password',
    signin: 'Sign in',
    signup: 'Sign up',
    signout: 'Sign out',
    alreadyHaveAnAccount:
      'Already have an account? Sign in.',
    social: {
      errors: {
        'auth-invalid-provider':
          'This email is already registered to another provider.',
        'auth-no-email': `The email associated with this account is private or inexistent.`,
      },
    },
    signinWithAnotherAccount:
      'Sign in with another account',
    emailUnverified: {
      message: `Please confirm your email at <strong>{0}</strong> to continue.`,
      submit: `Resend email verification`,
    },
    emptyPermissions: {
      message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
    },
    passwordResetEmail: {
      message: 'Send password reset email',
      error: `Email not recognized`,
    },
    passwordReset: {
      message: 'Reset password',
    },
    passwordChange: {
      title: 'Change Password',
      success: 'Password successfully changed',
      mustMatch: 'Passwords must match',
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    verificationEmailSuccess: `Verification email successfully sent`,
    passwordResetEmailSuccess: `Password reset email successfully sent`,
    passwordResetSuccess: `Password successfully changed`,
    verifyEmail: {
      success: 'Email successfully verified.',
      message:
        'Just a moment, your email is being verified...',
    },
  },

  roles: {
    admin: {
      label: 'Admin',
      description: 'Full access to all resources',
    },
    custom: {
      label: 'Custom Role',
      description: 'Custom role access',
    },
  },

  user: {
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      status: 'Status',
      phoneNumber: 'Phone Number',
      role: 'Role',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Password',
      oldPassword: 'Old Password',
      newPassword: 'New Password',
      newPasswordConfirmation: 'New Password Confirmation',
      rememberMe: 'Remember me',
    },
    status: {
      active: 'Active',
      invited: 'Invited',
      'empty-permissions': 'Waiting for Permissions',
    },
    invite: 'Invite',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
    title: 'Users',
    menu: 'Users',
    doAddSuccess: 'User(s) successfully saved',
    doUpdateSuccess: 'User successfully saved',
    exporterFileName: 'users_export',
    doDestroySuccess: 'User successfully deleted',
    doDestroyAllSuccess: 'Users successfully deleted',
    edit: {
      title: 'Edit User',
    },
    new: {
      title: 'Invite User(s)',
      titleModal: 'Invite User',
      emailsHint:
        'Separate multiple email addresses using the comma character.',
    },
    view: {
      title: 'View User',
      activity: 'Activity',
    },
    importer: {
      title: 'Import Users',
      fileName: 'users_import_template',
      hint:
        'Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists:
        'User with this email already exists',
      userNotFound: 'User not found',
      revokingOwnPermission: `You can't revoke your own admin permission`,
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Workspaces',
    menu: 'Workspaces',
    list: {
      menu: 'Workspaces',
      title: 'Workspaces',
    },
    create: {
      button: 'Create Workspace',
      success: 'Workspace successfully saved',
    },
    update: {
      success: 'Workspace successfully saved',
    },
    destroy: {
      success: 'Workspace successfully deleted',
    },
    destroyAll: {
      success: 'Workspace(s) successfully deleted',
    },
    edit: {
      title: 'Edit Workspace',
    },
    fields: {
      id: 'Id',
      name: 'Name',
      url: 'URL',
      tenantUrl: 'Workspace URL',
      tenantName: 'Workspace Name',
      tenantId: 'Workspace',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'New Workspace',
    },
    invitation: {
      view: 'View Invitations',
      invited: 'Invited',
      accept: 'Accept Invitation',
      decline: 'Decline Invitation',
      declined: 'Invitation successfully declined',
      acceptWrongEmail: 'Accept Invitation With This Email',
    },
    select: 'Select Workspace',
    validation: {
      url:
        'Your workspace URL can only contain lowercase letters, numbers and dashes (and must start with a letter or number).',
    },
  },

  plan: {
    menu: 'Plans',
    title: 'Plans',

    free: {
      label: 'Free',
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

    pricingPeriod: '/month',
    current: 'Current Plan',
    subscribe: 'Subscribe',
    manage: 'Manage Subscription',
    cancelAtPeriodEnd:
      'This plan will be canceled at the end of the period.',
    somethingWrong:
      'There is something wrong with your subscription. Please go to manage subscription for more details.',
    notPlanUser: `You are not the manager of this subscription.`,
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },
  settings: {
    title: 'Settings',
    menu: 'Settings',
    save: {
      success:
        'Settings successfully saved. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      theme: 'Theme',
      primaryColor: 'Primary Color',
      secondaryColor: 'Secondary Color',
      logos: 'Logo',
      backgroundImages: 'Background Image',
    },
    colors: {
      default: 'Default',
      amber: 'Amber',
      blue: 'Blue',
      cyan: 'Cyan',
      deep_orange: 'Deep Orange',
      deep_purple: 'Deep Purple',
      green: 'Green',
      indigo: 'Indigo',
      light_blue: 'Light Blue',
      light_green: 'Light Green',
      lime: 'Lime',
      orange: 'Orange',
      pink: 'Pink',
      purple: 'Purple',
      red: 'Red',
      teal: 'Teal',
      yellow: 'Yellow',
      grey: 'Grey',
      blue_grey: 'Blue Grey',
      brown: 'Brown',
    },
  },
  dashboard: {
    menu: 'Dashboard',
    message: `This page uses fake data for demonstration purposes only. You can edit it at frontend/src/app/dashboard/components/dashboard.component.html.`,
    charts: {
      day: 'Day',
      red: 'Red',
      green: 'Green',
      yellow: 'Yellow',
      grey: 'Grey',
      blue: 'Blue',
      orange: 'Orange',
      months: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
      },
      eating: 'Eating',
      drinking: 'Drinking',
      sleeping: 'Sleeping',
      designing: 'Designing',
      coding: 'Coding',
      cycling: 'Cycling',
      running: 'Running',
      customer: 'Customer',
    },
  },
  errors: {
    backToHome: 'Back to home',
    403: `Sorry, you don't have access to this page`,
    404: 'Sorry, the page you visited does not exist',
    500: 'Sorry, the server is reporting an error',
    429: 'Too many requests. Please try again later.',
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
  },

  preview: {
    error:
      'Sorry, this operation is not allowed in preview mode.',
  },

  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf:
        '${path} must be one of the following values: ${values}',
      notOneOf:
        '${path} must not be one of the following values: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length:
        '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches:
        '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min:
        '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
      type: '${path} must be a number',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: '${path} field must have at least ${min} items',
      max:
        '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be one of: {0}.`,
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: `Status: {0} imported, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'Do not navigate away from this page or import will be stopped.',
    completed: {
      success:
        'Import completed. All rows were successfully imported.',
      someErrors:
        'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint:
        'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm:
        'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel:
        'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  paginator: {
    itemsPerPageLabel: 'Items per page:',
    nextPageLabel: 'Next page',
    previousPageLabel: 'Previous page',
    firstPageLabel: 'First page',
    lastPageLabel: 'Last page',
    getRangeLabel: {
      zero: '0 of {0}',
      interval: '{0} - {1} of {2}',
    },
  },

  datetime: {
    upSecondLabel: 'Add a second',
    downSecondLabel: 'Minus a second',
    upMinuteLabel: 'Add a minute',
    downMinuteLabel: 'Minus a minute',
    upHourLabel: 'Add a hour',
    downHourLabel: 'Minus a hour',
    prevMonthLabel: 'Previous month',
    nextMonthLabel: 'Next month',
    prevYearLabel: 'Previous year',
    nextYearLabel: 'Next year',
    prevMultiYearLabel: 'Previous 21 years',
    nextMultiYearLabel: 'Next 21 years',
    switchToMonthViewLabel: 'Change to month view',
    switchToMultiYearViewLabel: 'Choose month and year',
    cancelBtnLabel: 'Cancel',
    setBtnLabel: 'Set',
    rangeFromLabel: 'From',
    rangeToLabel: 'To',
    hour12AMLabel: 'AM',
    hour12PMLabel: 'PM',
  },

  table: {
    noData: 'No data',
    loading: 'Loading...',
  },

  autocomplete: {
    loading: 'Loading...',
  },

  imagesViewer: {
    noImage: 'No image',
  },
};

export default en;
