function createHero(name, level, weapon) {
    const hero = {};

    hero.name = name;
    hero.level = level;
    hero.weapon = weapon;

    hero.sayHello = function() {
        return `Hello, my name is ${this.name}`;
    }

    hero.attack = function() {
        return `Attack with ${this.weapon}`;
    }

    return hero;
}

const hero1 = createHero('John', 1, 'sword');
const hero2 = createHero('Bob', 2, 'knife');

console.log(hero1.sayHello());
console.log(hero2.sayHello());