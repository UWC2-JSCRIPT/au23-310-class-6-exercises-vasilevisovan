/**
 * Car class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
class Car {
    constructor(model){
    this.model = model;
    this.speed = 0;
    }
    // Method to accelerate the car
    accelerate() {
      this.speed += 10;
      console.log(`${this.model} is accelerating. Current speed: ${this.speed} km/h`);
    };
  
    // Method to brake the car
    brake() {
      if (this.speed > 0) {
        this.speed -= 5;
        console.log(`${this.model} is braking. Current speed: ${this.speed} km/h`);
      } else {
        console.log(`${this.model} is already stopped.`);
      }
    };
  
    // Method to display car information
    toString() {
      return `${this.model} - Current speed: ${this.speed} km/h`;
    };
  }
  
  // Create an instance of the Car class
  const myCarDaciaDuster = new Car("Dacia Duster");
  
  // Accelerate twice
  myCarDaciaDuster.accelerate();
  myCarDaciaDuster.accelerate();
  
  // Brake once
  myCarDaciaDuster.brake();
  
  // Console log the instance toString()
  console.log(myCarDaciaDuster.toString());

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
