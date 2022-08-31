import { getAirQualityByLocation, getAirQualityUpdateInParis } from "./air-quality";

const apiDocumentation = {
  openapi: '3.0.3',
  info: {
    version: '1.3.0',
    title: 'Yandit Air Quality API - Documentation',
    description: 'API Documentation for Yandit Air Quality API',
    termsOfService: '#',
    contact: {
      name: 'Ogbonna Vitalis',
      email: 'agavitalisogbonna@gmail.com',
      url: 'https://vivvaa.com.ng',
    },
    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
    },
  },
  servers: [
    {
      url: 'http://localhost:5000/api/v1',
      description: 'Local Server',
    },
  ],
  paths: {
    '/airQuality/{latitude}/{longitude}': {
      get: getAirQualityByLocation,
    },
    '/airQualityUpdateInParis': {
      get: getAirQualityUpdateInParis,
    },
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
};

export { apiDocumentation };
