const carPassing = function(cars, speed){
let car = {
    time : Date.now(),
    speed: speed         
  }
  cars.push(car);
  return cars;
}
console.log(carPassing([], 60));