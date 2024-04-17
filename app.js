
export class Vehicle{
    constructor(color="blue",numWheels=4,horns="beep beep"){
      this.color=color;
      this.now=numWheels ;
      this.h=horns ;
    }
    honkHorn(){
     console.log( this.h);
    }
   }
  
  