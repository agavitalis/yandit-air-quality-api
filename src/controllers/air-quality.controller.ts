import { Request, Response } from 'express';
import { airQualityRepository } from '../infrastructure/repositories/index';

const getAirQuality = async (req: Request, res: Response) => {
  const { latitide, longitude } = req.params;
  const airQualityByLocation = await airQualityRepository.getAirQualityBylocation(Number(latitide), Number(longitude));
  return res.status(200).json({ Result: { "Pollution": airQualityByLocation } });
};

const airQualityUpdateInParis = async (req: Request, res: Response) => {
  const airQualityUpdateInParis = await airQualityRepository.getAirQualityUpdateInParis();
  return res.status(200).json({ Result: { "Pollution": airQualityUpdateInParis } });
};

export { airQualityUpdateInParis, getAirQuality, };
