import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from '../../settings/app.settings';
import { Drone } from '../../models/drone/drone';

@Injectable({
  providedIn: 'root'
})
export class DroneService {

  constructor(private http: HttpClient) { }

  findAllDrones() {
    return this.http.get(AppSettings.APP_URL + "drones");
  }

  saveDrone(drone:Drone ){
    return this.http.post(AppSettings.APP_URL + "drone/", drone);
  }
}
