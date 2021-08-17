const es = {
  common: {
    or: 'o',
    cancel: 'Cancelar',
    reset: 'Reiniciar',
    save: 'Guardar',
    search: 'Buscar',
    edit: 'Editar',
    remove: 'Eliminar',
    new: 'Nuevo',
    export: 'Exportar a Excel',
    noDataToExport: 'No hay datos para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Si',
    no: 'No',
    pause: 'Pausa',
    areYouSure: '¿Estás seguro?',
    view: 'Ver',
    destroy: 'Eliminar',
    mustSelectARow: 'Debe seleccionar una fila',
    confirm: 'Confirmar',
    start: 'Comienzo',
    end: 'Final',
    filters: 'Filtros',
  },
  app: {
    title: 'Aplicación',
  },

  api: {
    menu: 'API',
  },

  entities: {
    pessoaFisica: {
        name: 'pessoaFisica',
        label: 'PessoaFisicas',
        menu: 'PessoaFisicas',
        exporterFileName: 'exportacion_pessoaFisica',
        list: {
          menu: 'PessoaFisicas',
          title: 'PessoaFisicas',
        },
        create: {
          success: 'PessoaFisica guardado con éxito',
        },
        update: {
          success: 'PessoaFisica guardado con éxito',
        },
        destroy: {
          success: 'PessoaFisica eliminado con éxito',
        },
        destroyAll: {
          success: 'PessoaFisica(s) eliminado con éxito',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo PessoaFisica',
        },
        view: {
          title: 'Ver PessoaFisica',
        },
        importer: {
          title: 'Importar PessoaFisicas',
          fileName: 'pessoaFisica_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    empresa: {
        name: 'empresa',
        label: 'Empresas',
        menu: 'Empresas',
        exporterFileName: 'exportacion_empresa',
        list: {
          menu: 'Empresas',
          title: 'Empresas',
        },
        create: {
          success: 'Empresa guardado con éxito',
        },
        update: {
          success: 'Empresa guardado con éxito',
        },
        destroy: {
          success: 'Empresa eliminado con éxito',
        },
        destroyAll: {
          success: 'Empresa(s) eliminado con éxito',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Empresa',
        },
        view: {
          title: 'Ver Empresa',
        },
        importer: {
          title: 'Importar Empresas',
          fileName: 'empresa_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    cartao: {
        name: 'cartao',
        label: 'Cartões',
        menu: 'Cartões',
        exporterFileName: 'exportacion_cartao',
        list: {
          menu: 'Cartões',
          title: 'Cartões',
        },
        create: {
          success: 'Cartão guardado con éxito',
        },
        update: {
          success: 'Cartão guardado con éxito',
        },
        destroy: {
          success: 'Cartão eliminado con éxito',
        },
        destroyAll: {
          success: 'Cartão(s) eliminado con éxito',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Cartão',
        },
        view: {
          title: 'Ver Cartão',
        },
        importer: {
          title: 'Importar Cartões',
          fileName: 'cartao_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    produto: {
        name: 'produto',
        label: 'Produtos',
        menu: 'Produtos',
        exporterFileName: 'exportacion_produto',
        list: {
          menu: 'Produtos',
          title: 'Produtos',
        },
        create: {
          success: 'Produto guardado con éxito',
        },
        update: {
          success: 'Produto guardado con éxito',
        },
        destroy: {
          success: 'Produto eliminado con éxito',
        },
        destroyAll: {
          success: 'Produto(s) eliminado con éxito',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Produto',
        },
        view: {
          title: 'Ver Produto',
        },
        importer: {
          title: 'Importar Produtos',
          fileName: 'produto_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    pedido: {
        name: 'pedido',
        label: 'Pedidos',
        menu: 'Pedidos',
        exporterFileName: 'exportacion_pedido',
        list: {
          menu: 'Pedidos',
          title: 'Pedidos',
        },
        create: {
          success: 'Pedido guardado con éxito',
        },
        update: {
          success: 'Pedido guardado con éxito',
        },
        destroy: {
          success: 'Pedido eliminado con éxito',
        },
        destroyAll: {
          success: 'Pedido(s) eliminado con éxito',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Pedido',
        },
        view: {
          title: 'Ver Pedido',
        },
        importer: {
          title: 'Importar Pedidos',
          fileName: 'pedido_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    carrinho: {
        name: 'carrinho',
        label: 'Carrinhos',
        menu: 'Carrinhos',
        exporterFileName: 'exportacion_carrinho',
        list: {
          menu: 'Carrinhos',
          title: 'Carrinhos',
        },
        create: {
          success: 'Carrinho guardado con éxito',
        },
        update: {
          success: 'Carrinho guardado con éxito',
        },
        destroy: {
          success: 'Carrinho eliminado con éxito',
        },
        destroyAll: {
          success: 'Carrinho(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Carrinho',
        },
        fields: {
          id: 'Id',
          'userId': 'UserId',
          'produto': 'Produto',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Carrinho',
        },
        view: {
          title: 'Ver Carrinho',
        },
        importer: {
          title: 'Importar Carrinhos',
          fileName: 'carrinho_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    categoria: {
        name: 'categoria',
        label: 'Categorias',
        menu: 'Categorias',
        exporterFileName: 'exportacion_categoria',
        list: {
          menu: 'Categorias',
          title: 'Categorias',
        },
        create: {
          success: 'Categoria guardado con éxito',
        },
        update: {
          success: 'Categoria guardado con éxito',
        },
        destroy: {
          success: 'Categoria eliminado con éxito',
        },
        destroyAll: {
          success: 'Categoria(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Categoria',
        },
        fields: {
          id: 'Id',
          'nome': 'Nome',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Categoria',
        },
        view: {
          title: 'Ver Categoria',
        },
        importer: {
          title: 'Importar Categorias',
          fileName: 'categoria_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },
  },
  auth: {
    tenants: 'Espacios de trabajo',
    profile: {
      title: 'Perfil',
      success: 'Perfil actualizado con éxito',
    },
    createAnAccount: 'Crea una cuenta',
    rememberMe: 'Recuérdame',
    forgotPassword: 'Se te olvidó tu contraseña',
    signin: 'Iniciar Sesión',
    signup: 'Registrarse',
    signout: 'Desconectar',
    alreadyHaveAnAccount:
      '¿Ya tienes una cuenta? Registrarse.',
    social: {
      errors: {
        'auth-invalid-provider':
          'This email is already registered to another provider.',
        'auth-no-email': `The email associated with this account is private or inexistent.`,
      },
    },
    signinWithAnotherAccount:
      'Inicia sesión con otra cuenta',
    passwordChange: {
      title: 'Cambia la contraseña',
      success: 'Contraseña cambiada correctamente',
      mustMatch: 'Las contraseñas deben coincidir',
    },
    emailUnverified: {
      message:
        'Confirme su correo electrónico en <strong>{0}</strong> para continuar.',
      submit: 'Reenviar verificación de correo electrónico',
    },
    emptyPermissions: {
      message:
        'Aún no tienes permisos. Espera a que el administrador te otorgue privilegios.',
    },
    passwordResetEmail: {
      message:
        'Enviar contraseña restablecer correo electrónico',
      error: 'Correo electrónico no reconocido',
    },
    passwordReset: {
      message: 'Restablecer la contraseña',
    },
    emailAddressVerificationEmail: {
      error: 'Correo electrónico no reconocido',
    },
    verificationEmailSuccess:
      'Correo electrónico de verificación enviado con éxito',
    passwordResetEmailSuccess:
      'Correo electrónico de restablecimiento de contraseña enviado correctamente',
    passwordResetSuccess:
      'Contraseña cambiada correctamente',
    verifyEmail: {
      success: 'Correo electrónico verificado con éxito.',
      message:
        'Solo un momento, su correo electrónico está siendo verificado ...',
    },
  },
  tenant: {
    name: 'inquilino',
    label: 'Espacios de trabajo',
    menu: 'Espacios de trabajo',
    list: {
      menu: 'Espacios de trabajo',
      title: 'Espacios de trabajo',
    },
    create: {
      button: 'Crear espacio de trabajo',
      success: 'Espacio de trabajo guardado correctamente',
    },
    update: {
      success: 'Espacio de trabajo guardado correctamente',
    },
    destroy: {
      success: 'Espacio de trabajo eliminado correctamente',
    },
    destroyAll: {
      success:
        'Espacio(s) de trabajo eliminado(s) correctamente',
    },
    edit: {
      title: 'Editar espacio de trabajo',
    },
    fields: {
      id: 'Id',
      name: 'Nombre',
      url: 'URL',
      tenantName: 'Nombre del espacio de trabajo',
      tenantId: 'Espacio de trabajo',
      tenantUrl: 'URL del espacio de trabajo',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'Nuevo espacio de trabajo',
    },
    invitation: {
      view: 'Ver invitaciones',
      invited: 'Invitado',
      accept: 'Aceptar la invitacion',
      decline: 'Rechazar invitación',
      declined: 'Invitación rechazada con éxito',
      acceptWrongEmail:
        'Aceptar invitación con este correo electrónico',
    },
    select: 'Seleccionar espacio de trabajo',
    validation: {
      url:
        'La URL de su espacio de trabajo solo puede contener letras minúsculas, números y guiones (y debe comenzar con una letra o número).',
    },
  },
  roles: {
    admin: {
      label: 'Administración',
      description: 'Acceso total a todos los recursos.',
    },
    custom: {
      label: 'Rol personalizado',
      description: 'Acceso personalizado a recursos',
    },
  },
  user: {
    invite: 'Invitación',
    title: 'Usuarios',
    menu: 'Usuarios',
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nombre completo',
      firstName: 'Nombre',
      lastName: 'Apellido',
      status: 'Estado',
      disabled: 'Discapacitado',
      phoneNumber: 'Número de teléfono',
      role: 'Rol',
      createdAt: 'Creado el',
      updatedAt: 'Actualizado el',
      roleUser: 'Rol/Usuario',
      roles: 'Roles',
      createdAtRange: 'Creado el',
      password: 'Contraseña',
      rememberMe: 'Recuérdame',
      oldPassword: 'Contraseña anterior',
      newPassword: 'Nueva contraseña',
      newPasswordConfirmation:
        'Nueva confirmación de contraseña',
    },
    enabled: 'Habilitado',
    disabled: 'Discapacitado',
    validations: {
      // eslint-disable-next-line
      email: 'El correo electrónico ${value} no es válido',
    },
    disable: 'Inhabilitar',
    enable: 'Habilitar',
    doEnableSuccess: 'Usuario habilitado con éxito',
    doDisableSuccess: 'Usuario deshabilitado con éxito',
    doDisableAllSuccess:
      'Usuario(s) deshabilitado con éxito',
    doEnableAllSuccess:
      'Usuario(s) habilitados correctamente',
    doAddSuccess: 'Usuario(s) guardado correctamente',
    doUpdateSuccess: 'Usuario guardado con éxito',
    status: {
      active: 'Activo',
      invited: 'Invitado',
      'empty-permissions': 'Esperando permisos',
    },
    exporterFileName: 'usuarios_exportacion',
    doDestroySuccess: 'Usuario eliminado con éxito',
    doDestroyAllSelectedSuccess:
      'Usuario(s) eliminado correctamente',
    edit: {
      title: 'Editar Usuario',
    },
    new: {
      title: 'Invitar Usuario(s)',
      titleModal: 'Nuevo Usuario',
      emailsHint:
        'Separe varias direcciones de correo electrónico utilizando el carácter de coma.',
    },
    view: {
      title: 'Ver Usuario',
      activity: 'Actividad',
    },
    importer: {
      title: 'Importar Usuarios',
      fileName: 'users_import_template',
      hint:
        'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio. Las relaciones deben ser la ID de los registros referenciados separados por espacio. Los roles deben ser los identificadores de roles separados por espacio.',
    },
    errors: {
      userAlreadyExists:
        'El usuario con este correo electrónico ya existe',
      userNotFound: 'Usuario no encontrado',
      disablingHimself: 'No puedes inhabilitarte',
      revokingOwnPermission:
        'No puede revocar su propio permiso de administrador',
    },
  },
  plan: {
    menu: 'Planes',
    title: 'Planes',
    free: {
      label: 'Gratis',
      price: '$0',
    },
    growth: {
      label: 'Crecimiento',
      price: '$10',
    },
    enterprise: {
      label: 'Empresa',
      price: '$50',
    },
    pricingPeriod: '/mes',
    current: 'Plan Actual',
    subscribe: 'Suscribir',
    manage: 'Administrar Suscripción',
    cancelAtPeriodEnd:
      'Este plan se cancelará al final del período.',
    somethingWrong:
      'Hay algo mal con su suscripción. Vaya a administrar la suscripción para obtener más detalles.',
    notPlanUser:
      'No eres el administrador de esta suscripción.',
    demoHintHtml:
      'Sugerencia: Use esas <a href="https://stripe.com/docs/testing#cards" target="_blank" rel="noopener noreferrer">tarjetas de prueba</a> para la demostración.',
  },
  auditLog: {
    menu: 'Registros de auditoría',
    title: 'Registros de auditoría',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separe varias entidades con el carácter de coma.',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidad',
      entityNames: 'Entidades',
      entityId: 'ID de entidad',
      action: 'Acción',
      values: 'Valores',
      timestamp: 'Fecha',
      createdByEmail: 'Email del usuario',
    },
  },
  settings: {
    title: 'Configuraciones',
    menu: 'Configuraciones',
    save: {
      success:
        'Configuración guardada con éxito. La página se volverá a cargar en {0} segundos para que los cambios surtan efecto.',
    },
    fields: {
      theme: 'Tema',
      primaryColor: 'Color primario',
      secondaryColor: 'Color secundario',
      logos: 'Logo',
      backgroundImages: 'Imagen de fondo',
    },
    colors: {
      default: 'Defecto',
      amber: 'Ámbar',
      blue: 'Azul',
      cyan: 'Cian',
      deep_orange: 'Naranja intenso',
      deep_purple: 'Morado oscuro',
      green: 'Verde',
      indigo: 'Índigo',
      light_blue: 'Azul claro',
      light_green: 'Verde claro',
      lime: 'Lima',
      orange: 'Naranja',
      pink: 'Rosado',
      purple: 'Púrpura',
      red: 'Rojo',
      teal: 'Verde azulado',
      yellow: 'Amarillo',
      grey: 'Gris',
      blue_grey: 'Gris azulado',
      brown: 'Marrón',
    },
  },
  dashboard: {
    menu: 'Tablero',
    message:
      'Esta página utiliza datos falsos solo con fines de demostración. Puede editarlo en frontend/src/app/dashboard/components/dashboard.component.html',
    charts: {
      day: 'Día',
      red: 'Rojo',
      green: 'Verde',
      yellow: 'Amarillo',
      grey: 'Gris',
      blue: 'Azul',
      orange: 'Naranja',
      months: {
        '1': 'Enero',
        '2': 'Febrero',
        '3': 'Marzo',
        '4': 'Abril',
        '5': 'Mayo',
        '6': 'Junio',
        '7': 'Julio',
      },
      eating: 'Comiendo',
      drinking: 'Bebiendo',
      sleeping: 'Dormiendo',
      designing: 'Diseñando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Corriendo',
      customer: 'Cliente',
    },
  },
  errors: {
    '403': 'Lo sentimos, no tienes acceso a esta página',
    '404': 'Lo sentimos, la página que visitaste no existe',
    '500': 'Lo sentimos, el servidor informa un error',
    '429':
      'Demasiadas solicitudes. Por favor, inténtelo de nuevo más tarde.',
    backToHome: 'Volver a Inicio',
    forbidden: {
      message: 'Prohibido',
    },
    validation: {
      message: 'Ocurrió un error',
    },
    defaultErrorMessage: 'Ops, ocurrió un error',
  },

  preview: {
    error:
      'Lo sentimos, esta operación no está permitida en el modo de vista previa.',
  },

  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} no es válido',
      required: '${path} es obligatorio',
      oneOf:
        '${path} debe ser uno de los siguientes valores: ${values}',
      notOneOf:
        '${path} no debe ser uno de los siguientes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} debe ser un ${type}`;
      },
    },
    string: {
      length:
        '${path} debe tener exactamente ${length} caracteres',
      min: '${path} debe tener al menos ${min} caracteres',
      max:
        '${path} debe tener como máximo ${max} caracteres',
      matches:
        '${path} debe coincidir con lo siguiente: "${regex}"',
      email:
        '${path} debe ser un correo electrónico válido',
      url: '${path} debe ser una URL válida',
      trim: '${path} debe ser una cadena recortada',
      lowercase:
        '${path} debe ser una cadena en minúsculas',
      uppercase: '${path} debe ser una cadena en mayúscula',
      selected: '${path} debe estar seleccionado',
    },
    number: {
      min: '${path} debe ser mayor o igual que ${min}',
      max: '${path} debe ser menor o igual que ${max}',
      lessThan: '${path} debe ser menor que ${less}',
      moreThan: '${path} debe ser mayor que ${more}',
      notEqual: '${path} no debe ser igual a ${notEqual}',
      positive: '${path} debe ser un número positivo',
      negative: '${path} debe ser un número negativo',
      integer: '${path} debe ser un número entero',
    },
    date: {
      min: 'El campo ${path} debe ser posterior a ${min}',
      max: 'El campo ${path} debe ser anterior a ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        'El campo ${path} no puede tener claves no especificadas en la forma del objeto',
    },
    array: {
      min:
        'El campo ${path} debe tener al menos ${min} elementos',
      max:
        'El campo ${path} debe tener elementos menores o iguales a ${max}',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Subir',
    image: 'Debes subir una imagen',
    size:
      'El archivo es muy grande. El tamaño máximo permitido es {0}',
    formats: 'Formato inválido. Debe ser uno de: {0}.',
  },
  importer: {
    line: 'Línea',
    status: 'Estado',
    pending: 'Pendiente',
    imported: 'Importado',
    error: 'Error',
    total: '{0} importado, {1} pendiente y {2} con error',
    importedMessage: 'Procesado {0} de {1}.',
    noNavigateAwayMessage:
      'No navegue fuera de esta página o la importación se detendrá.',
    completed: {
      success:
        'Importación completada. Todas las filas se importaron correctamente.',
      someErrors:
        'Procesamiento completado, pero algunas filas no se pudieron importar.',
      allErrors:
        'Importación fallida. No hay filas válidas.',
    },
    form: {
      downloadTemplate: 'Descargar la plantilla',
      hint:
        'Haga clic o arrastre el archivo a esta área para continuar.',
    },
    list: {
      discardConfirm:
        '¿Estás seguro? Los datos no importados se perderán.',
    },
    errors: {
      invalidFileEmpty: 'El archivo esta vacio',
      invalidFileExcel:
        'Solo se permiten archivos de Excel(.xlsx)',
      invalidFileUpload:
        'Archivo inválido. Asegúrese de estar utilizando la última versión de la plantilla.',
      importHashRequired: 'Se requiere hash de importación',
      importHashExistent:
        'Los datos ya han sido importados',
    },
  },
  paginator: {
    itemsPerPageLabel: 'Elementos por página:',
    nextPageLabel: 'Siguiente página',
    previousPageLabel: 'Pagina anterior',
    firstPageLabel: 'Primera página',
    lastPageLabel: 'Última página',
    getRangeLabel: {
      zero: '0 de {0}',
      interval: '{0} - {1} de {2}',
    },
  },
  datetime: {
    upSecondLabel: 'Añadir un segundo',
    downSecondLabel: 'Menos un segundo',
    upMinuteLabel: 'Añadir un minuto',
    downMinuteLabel: 'Menos un minuto',
    upHourLabel: 'Agregar una hora',
    downHourLabel: 'Menos una hora',
    prevMonthLabel: 'Mes anterior',
    nextMonthLabel: 'Próximo mes',
    prevYearLabel: 'Año anterior',
    nextYearLabel: 'El próximo año',
    prevMultiYearLabel: '21 años anteriores',
    nextMultiYearLabel: 'Próximos 21 años',
    switchToMonthViewLabel: 'Cambiar a vista mensual',
    switchToMultiYearViewLabel: 'Elige mes y año',
    cancelBtnLabel: 'Cancelar',
    setBtnLabel: 'Conjunto',
    rangeFromLabel: 'De',
    rangeToLabel: 'A',
    hour12AMLabel: 'AM',
    hour12PMLabel: 'PM',
  },
  table: {
    noData: 'Sin datos',
    loading: 'Cargando...',
  },
  autocomplete: {
    loading: 'Cargando...',
  },
  imagesViewer: {
    noImage: 'Sin imágen',
  },
};

export default es;
