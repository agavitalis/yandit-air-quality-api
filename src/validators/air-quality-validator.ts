import { param } from 'express-validator';

export const getAirQualityValidator = [
  param('latitude').isNumeric().withMessage('latitude is required, and must be numeric'), 
  param('longitude').isNumeric().withMessage('longitude is required. and must be numeric'),
]

