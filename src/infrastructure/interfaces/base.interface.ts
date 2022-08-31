export interface IBaseRepository {
    getAirQualityBylocation(latitde: number, longitude: number): Promise<any>;
    getAirQualityUpdateInParis(): Promise<any>;
}