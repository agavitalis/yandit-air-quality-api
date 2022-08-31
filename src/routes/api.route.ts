import { Router } from 'express';
import { airQualityUpdateInParis, getAirQuality} from '../controllers/air-quality.controller';
import { validateRequest } from '../middlewares/index';
import * as v from '../validators/index'

const airQualityRoute = () => {
  const router = Router();

  router.get('/airQuality/:latitude/:longitude',v.getAirQualityValidator,validateRequest, getAirQuality);

  router.get('/airQualityUpdateInParis', airQualityUpdateInParis);

  return router;
};

export { airQualityRoute };
