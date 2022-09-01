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
            type: 'array',
            example: {
              errors: [
                {
                  "message": "Error Message",
                  "field": "input field name (optional)"
                }
              ]
            },
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
        type: 'object',
        properties: {
          errors: {
            type: 'array',
            example:
              [
                {
                  "message": "Error Message",
                  "field": "input field name (optional)"
                }
              ]
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
    '400': validationError,
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
    '500': internalServerError,
  },
};

export {
  getAirQualityByLocation,
  getAirQualityUpdateInParis,
};
