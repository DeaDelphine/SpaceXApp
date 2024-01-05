import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DroneComponent } from "./components/drone/drone.component";
import { CameraComponent } from "./components/camera/camera.component";
import { FlightControllerComponent } from "./components/flight-controller/flight-controller.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { GpsModuleComponent } from "./components/gps-module/gps-module.component";

const routes: Routes = [

  {
    path: 'drone',
    component: DroneComponent
  },
  {
    path: 'camera',
    component: CameraComponent
  },
  {
    path: 'flightController',
    component: FlightControllerComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'gpsModule',
    component: GpsModuleComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
