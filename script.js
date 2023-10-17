class Enemy {
    constructor(name, level, emoji, attackName) {
        this.name = name;
        this.level = level;
        this.emoji = emoji;
        this.attackName = attackName;
    }

    attack() {
        return `${this.name} ${this.attackName}!`;
    }
}

const enemies = [
    new Enemy('Goblin', 1, '👺', 'punches'),
    new Enemy('Troll', 5, '👹', 'bites'),
    new Enemy('Dragon', 10, '🐲', 'burns'),
    new Enemy('Demon', 20, '😈', 'eats'),
    new Enemy('Satan', 50, '👿', 'destroys')
];

const enemy = enemies[Math.floor(Math.random() * enemies.length)];

console.log(enemy.attack());

class Hero {
    constructor(name, level, weapon) {
        this.name = name;
        this.level = level;
        this.weapon = weapon;
    }

    attack() {
        return `${this.name} attacks with ${this.weapon}!`;
    }

    equipWeapon(newWeapon) {
        this.weapon = newWeapon;
    }
}

const heroes = [
    new Hero('Warrior', 1, 'sword'),
    new Hero('Valkyrie', 5, 'axe'),
    new Hero('Wizard', 10, 'staff'),
    new Hero('Elf', 20, 'bow'),
    new Hero('Dwarf', 50, 'hammer')
];

const hero = heroes[Math.floor(Math.random() * heroes.length)];

console.log(hero.attack());