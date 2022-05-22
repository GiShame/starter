//challenge (objects methods)

// const Mark = {
//     name: 'Mark',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.bmi = this.mass / (this.height ** 2)
//         return this.bmi
//     }
// }

// const John = {
//     name: 'John',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.bmi = this.mass / (this.height ** 2)
//         return this.bmi
//     }
// }

// Mark.calcBMI();
// John.calcBMI();
// if (John.bmi > Mark.bmi) {
//     console.log (`${John.name}'s BMI ${John.bmi} is higher than ${Mark.name}'s BMI ${Mark.bmi}`)
// } else {
//     console.log (`${Mark.name}'s BMI ${Mark.bmi} is higher than ${John.name}'s BMI ${John.bmi}`)
// }

// Introduction to Arrays

// const population = [10, 80, 100, 70];

// function percentageOfWorld1(population) {
//    return (population / 7900) * 100;
// }
// const percentages = [
//  percentageOfWorld1(population[0]),
//  percentageOfWorld1(population[1]),
//  percentageOfWorld1(population[2]),
//  percentageOfWorld1(population[3])
// ];
// console.log(percentages); 

// Array methods

// let neighbours = ['Russia', 'Poland', 'Lithuania']

// neighbours.push('Utopia')
// console.log(neighbours)
// neighbours.pop();
// console.log(neighbours)
// neighbours.includes('Germany') ? console.log('Cobiray shmotki') : console.log('Probably not a central European country')
// neighbours[neighbours.indexOf('Polad')] = 'Republic of Poland'
// console.log(neighbours)

// Introduction to Objects

// const myCountry = {
//    country: 'Belarus',
//    capital: 'Minsk',
//    language: 'russian',
//    population: 10,
//    neighbours: ['Russia', 'Poland', 'Lithuania'],
//    description: function () {
//    console.log(`There is ${this.country} with a capital named ${this.capital}`)
//    },
//    checkIsland: function() {
//       this.isIsland = this.neighbours.length === 0 ? true : false
//    }
// }
// myCountry.description()
// myCountry.checkIsland();
// console.log(myCountry);

// console.log(`${myCountry.country} has ${myCountry.population - 2} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`)

// myCountry['population'] += 2;
// console.log(myCountry)

// introducing to loop

// for(voter = 1; voter <= 50; voter++) {
//    console.log(`Voter number ${voter}  is currently voting`)
// }

const population = [10, 80, 100, 70]
//