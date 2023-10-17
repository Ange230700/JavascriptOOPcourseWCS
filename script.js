class Character {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }
}

class Enemy extends Character {
    constructor(name, level, emoji, attackName) {
        super(name, level);
        this.emoji = emoji;
        this.attackName = attackName;
        this.enemy = true;
    }

    attack() {
        return `${this.name} ${this.attackName}!`;
    }
}

class Hero extends Character {
    constructor(name, level, weapon) {
        super(name, level);
        this.weapon = weapon;
    }

    attack() {
        return `${this.name} attacks with ${this.weapon}!`;
    }
}

const hero1 = new Hero('Bjorn', 1, 'axe');
const hero2 = new Hero('Lagertha', 1, 'sword');
const enemy1 = new Enemy('Harald', 1, '🗡', 'attacks');
const enemy2 = new Enemy('Ivar', 1, '🔥', 'burns');

console.log(hero1.attack());
console.log(hero2.attack());
console.log(enemy1.attack());
console.log(enemy2.attack());