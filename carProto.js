/**
 * Car class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */
//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

class Car {
  constructor(model) {
      this.model = model;
      this.speed = 0;
  }

  accelerate() {
      const randomSpeed = Math.floor(Math.random() * 50) + 1;
      this.speed += randomSpeed;
      console.log(`${this.model} is accelerating. Current speed: ${this.speed} km/h`);
  }

  brake() {
      if (this.speed > 0) {
          this.speed -= 5;
          console.log(`${this.model} is braking.`);
      } else {
          console.log(`${this.model} is already stopped.`);
      }
  }

  toString() {
      return `${this.model} - Current speed: ${this.speed} km/h`;
  }
}

class ElectricCar extends Car {
  constructor(model) {
      super(model);
      this.motor = "electric";
  }

  accelerate() {
      // Increase the speed by twice the random speed
      const randomSpeed = Math.floor(Math.random() * 50) + 1;
      this.speed += 2 * randomSpeed;
      console.log(`${this.model} (Electric) is accelerating. Current speed: ${this.speed} km/h`);
  }

  toString() {
      return `${this.model} (Electric) - Current speed: ${this.speed} km/h`;
  }
}

const myCarDaciaDuster = new Car("Dacia Duster");

myCarDaciaDuster.accelerate();
myCarDaciaDuster.accelerate();
myCarDaciaDuster.brake();
console.log(myCarDaciaDuster.toString());

const myElectricCar = new ElectricCar("Tesla Model S");

myElectricCar.accelerate();
myElectricCar.accelerate();
myElectricCar.brake();
console.log(myElectricCar.toString());