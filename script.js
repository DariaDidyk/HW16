// Реализовать интерфейс при помощи классов.
// Внутри массива squad должен храниться список из MilitaryResource которых вы должны создать 
// сами при после объявления класса.
// Методы самодукоментируемы, но если будут вопросы про то что они должны делать - в чат!)

// function MilitaryResource(type, health, distance, maxHealth, maxDistance) {
//     this.type = type;
//     this.health = health;
//     this.maxHealth = maxHealth;
//     this.distance = distance;
//     this.maxDistance = maxDistance;
// }

// MilitaryResource.prototype.isReadyToMove;
// MilitaryResource.prototype.isReadyToFight;
// MilitaryResource.prototype.restore;
// MilitaryResource.prototype.clone;


// function Squad(defaultResources) {
// this.squad = [
//     new MilitaryResource('soldier'),
//     new MilitaryResource('soldier'),
//     new MilitaryResource('soldier'),
// ];
// if (defaultResources) this.combineResources(defaultResources);
// }

// Squad.prototype.isReadyToMove;
// Squad.prototype.isReadyToFight;
// Squad.prototype.restore;
// Squad.prototype.getReadyToMoveResources;
// Squad.prototype.combineResources;
// Squad.prototype.cloneResource;


const units = [new Unit('Virus', 200, 500)]

units.push(units[0].clone());

console.log(units);


const squad = new Squad(units);

console.log(squad);