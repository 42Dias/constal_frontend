// Place the URL here with the /api suffix.
// Ex.:`https://domain.com/api`;
const backendUrl = `http://projetos.42dias.com.br:8157/api`;

// SwaggerUI Documentation URL
// Leave black if documentation should be hidden
const apiDocumentationUrl = `http://projetos.42dias.com.br:8157/documentation`;

/**
 * Frontend URL.
 */
const frontendUrl = {
  host: 'domain.com/',
  protocol: 'https',
};

/**
 * Tenant Mode
 * multi: Allow new users to create new tenants.
 * multi-with-subdomain: Same as multi, but enable access to the tenant via subdomain.
 * single: One tenant, the first user to register will be the admin.
 */
const tenantMode = 'single';

/**
 * Plan payments configuration.
 */
const isPlanEnabled = false;
const stripePublishableKey = '';

export const environment = {
  production: true,
  frontendUrl,
  backendUrl,
  apiDocumentationUrl,
  tenantMode,
  isPlanEnabled,
  stripePublishableKey,
};
