import request from "supertest";
import {app} from '../app'

describe('Test For Endpoints', () => {
 
  describe('Testing the endpoints', () => {
    it('returns 200 for get air quality update in Paris', async () => {
      const response = await request(app).get('/api/v1/airQualityUpdateInParis')
      expect(response.status).toBe(200)
    })
  })

  describe('Testing the endpoints', () => {
    it('returns 200 for get air quality by location', async () => {
      const response = await request(app).get('/api/v1/airQuality/3.351/6.3433')
      expect(response.status).toBe(200)
    })
  })

})