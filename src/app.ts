import express from 'express';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import { connectToDatabase } from "./services/database";
import { airQualityRoute } from './routes/api.route';
import { apiDocumentation } from './docs/api-docs';
import { errorHandler } from './middlewares/index';
import { NotFoundError } from './errors/not-found-error'

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/v1', airQualityRoute());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(apiDocumentation));

app.get('/', (req, res) => {
  return res.json({ message: 'Welcome to Yandit AirQuality API' });
});

app.all('*', () => {
  throw new NotFoundError('Route Not Found')
})

app.use(errorHandler)
connectToDatabase();

export { app };

