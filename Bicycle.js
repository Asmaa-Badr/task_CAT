import { Vehicle } from "./app.js";
export class Bicycle extends Vehicle{
    constructor(color,numWheels=2,horns="honk honk"){
      super(numWheels,horns);
    }
  
   }