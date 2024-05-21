// Only change code below this line
class Thermostat {
  constructor(fahrenheit) {
    this._fahrenheit = fahrenheit;
  }

  get temperature() {
    return (this._fahrenheit - 32) * 5 / 9;
  }
  
  set temperature(celsius) {
    this._fahrenheit = celsius * 9 / 5 + 32;
  }
}
const thermos = new Thermostat(76); 
let temp = thermos.temperature; 
console.log(temp); 
// Only change code above this line



thermos.temperature = 26; 
temp = thermos.temperature;
console.log(temp); // Output should be 26 in Celsius
