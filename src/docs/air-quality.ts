const airQualityResponse = {
  ts: {
    type: 'Date',
    example: '2021-03-19T11:48:25.980Z'
  },
  aqius: {
    type: 'number',
    example: 5
  },
  mainus: {
    type: 'string',
    example: "p3",
  },
  aqicn: {
    type: 'number',
    example: 2
  },
  maincn: {
    type: 'string',
    example: "n5",
  }
};

const internalServerError = {
  description: 'Internal Server Error',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            example: 'Internal Server Error',
          },
        },
      },
    },
  },
};

const notFoundError = {
  description: 'Resource not found',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            example: 'AirQuality with id: "71675fcb655047cdc4955929" not found',
          },
        },
      },
    },
  },
};

const validationError = {
  description: 'Request validation Error',
  content: {
    'application/json': {
      schema: {
        type: 'array',
        properties: {
          message: {
            type: 'string',
            example: 'The fields name and description are required',
          },
          field: {
            type: 'array',
            example: 'The fields name and description are required',
          },
        },
      },
    },
  },
};

const getAirQualityByLocation = {
  tags: ['Air Quality By Location'],
  description: 'Air Quality By Location',
  operationId: 'getAirQualitys',
  parameters: [
    {
      name: 'latitude',
      in: 'path',
      description: 'latitude',
      required: 'true',
      type: 'string',
      example: '66.3433',
    },
    {
      name: 'longitude',
      in: 'path',
      description: 'longitude',
      required: 'true',
      type: 'string',
      example: '66.3433',
    },
  ],
  responses: {
    '200': {
      description: 'Air Quality By Location retrieved successfully!',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: airQualityResponse,
          },
        },
      },
    },
    '500': internalServerError,
  },
};

const getAirQualityUpdateInParis = {
  tags: ['Air Quality In Paris'],
  description: 'Air quality update in Paris',
  operationId: 'getAirQuality',
  responses: {
    '200': {
      description: 'AirQuality retrieved successfully!',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: airQualityResponse,
          },
        },
      },
    },
    '400': validationError,
    '404': notFoundError,
    '500': internalServerError,
  },
};

export {
  getAirQualityByLocation,
  getAirQualityUpdateInParis,
};
