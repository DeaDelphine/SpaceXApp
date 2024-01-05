export class Drone {
   modele : string;
  poids: number;
  porteeMax: string;
  capaciteMaxBat: string;

  constructor(modele: string, poids: number,porteeMax: string,capaciteMaxBat: string) {
    this.modele = modele;
    this.poids = poids;
    this.porteeMax = porteeMax;
    this.capaciteMaxBat = capaciteMaxBat;
  }
}
