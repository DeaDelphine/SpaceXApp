import { Component } from '@angular/core';
import { DroneService } from '../../services/drone/drone.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drone',
  standalone: false,
  templateUrl: './drone.component.html',
  styleUrl: './drone.component.css'
})
export class DroneComponent {
drones: any;
constructor(private droneService:DroneService, private router:Router) { }
  ngOnInit() {

    this.getDrones();
  }
  getDrones() {
    this.droneService.findAllDrones().subscribe(
      data => {
        console.log(data);
        //j'insère dans ma variable les datas
        this.drones = data;
      }
    );
  }
}
