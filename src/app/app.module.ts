import { BrowserModule } from "@angular/platform-browser";
import { CameraComponent } from "./components/camera/camera.component";
import { DroneComponent } from "./components/drone/drone.component";
import { FlightControllerComponent } from "./components/flight-controller/flight-controller.component";
import { FooterComponent } from "./components/footer/footer.component";
import { GpsModuleComponent } from "./components/gps-module/gps-module.component";
import { HeaderComponent } from "./components/header/header.component";
import { AppRoutingModule } from "./app-rooting.module";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    DroneComponent,
    CameraComponent,
    GpsModuleComponent,
    FlightControllerComponent,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,


  ],
  providers: [

    //{ provide: HTTP_INTERCEPTORS, useClass:AuthHttpInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
