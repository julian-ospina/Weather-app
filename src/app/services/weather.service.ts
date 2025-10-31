import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = '32c82eca4b804070a2c214629253110'; 
  private baseUrl = 'https://api.weatherapi.com/v1'; // ✅ correct base URL

  constructor(private http: HttpClient) {}

  /** ✅ Search by coordinates */
  getWeather(lat: number, lon: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/current.json?key=${this.apiKey}&q=${lat},${lon}&aqi=no`
    );
  }

  /** ✅ Search by city name */
  getWeatherByCity(city: string): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/current.json?key=${this.apiKey}&q=${city}&aqi=no`
    );
  }
}
