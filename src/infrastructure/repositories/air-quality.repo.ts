import axios from 'axios';
import { IBaseRepository } from '../interfaces/index';
import { AirQuality, AirQualityDto } from '../models';

class AirQualityRepository implements IBaseRepository {
  
  async getAirQualityBylocation(latitde: number, longitude: number): Promise<any> {

    const { IQAIR_API,IQAIR_API_KEY } = process.env;
    let REQUEST_URL = `${IQAIR_API}/nearest_city?lat=${latitde}&lon=${longitude}&key=${IQAIR_API_KEY}`;

    try {
      const getAirQualityRequest = await axios.get(REQUEST_URL);
      const response = getAirQualityRequest.data;
      return response.data.current.pollution;

    } catch (error) {
      console.error(error);
    }

  }

  async getAirQualityUpdateInParis(): Promise<any> {
    const airQuality = await AirQuality.find().sort({"aqius":-1, "aqicn":-1}).limit(1) 
    return airQuality[0];
  }

  async createAirQuality(airQualityDto: AirQualityDto): Promise<void> {
    const airQuality = AirQuality.build({ ts: airQualityDto.ts, aqius: airQualityDto.aqius, mainus: airQualityDto.mainus, aqicn: airQualityDto.aqicn, maincn: airQualityDto.maincn });
    await airQuality.save()
  }

}

export const airQualityRepository = new AirQualityRepository();


