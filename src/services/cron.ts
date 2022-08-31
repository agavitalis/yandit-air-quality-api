import { airQualityRepository } from '../infrastructure/repositories/index';

const cron = require('node-cron');
const PARIS_LATITUDE = 48.856613;
const PARIS_LONGITUDE = 2.352222;

const cronGetParisAirQualityUpdate = async () => {

    cron.schedule('* * * * *', async () => {
        console.log('🥳 ..about to update paris air quuality');
       
        const airQualityByLocation = await airQualityRepository.getAirQualityBylocation(Number(PARIS_LATITUDE), Number(PARIS_LONGITUDE));
        await airQualityRepository.createAirQuality(airQualityByLocation);
        
        console.log('paris air quuality updated..💃');
    });

};

export { cronGetParisAirQualityUpdate };
