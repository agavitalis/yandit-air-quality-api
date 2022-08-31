import { app } from "./app";
import { cronGetParisAirQualityUpdate } from "./services/cron";
const HOST = process.env.HOST || 'http://localhost';
const PORT = parseInt(process.env.PORT || '4500');

app.listen(PORT, async () => {
  console.log(`Application started on URL ${HOST}:${PORT} 🎉`);
  await cronGetParisAirQualityUpdate();
});