function Enemy(name, level, emoji, attackName) {
    this.name = name;
    this.level = level;
    this.emoji = emoji;
    this.attackName = attackName;
    this.attack = function() {
        return `${this.name} ${this.attackName}!`;
    }
}

const enemy1 = new Enemy('Rat', 1, '🐀', 'Bites');

console.log(enemy1.attack()); // Rat Bites!

function Heroes(name, level, weapon) {
    this.name = name;
    this.level = level;
    this.weapon = weapon;
    this.attack = function() {
        return `${this.name} attacks with ${this.weapon}!`;
    }
}

const hero1 = new Heroes('Bjorn', 1, 'axe');
const hero2 = new Heroes('Layla', 1, 'bow');

console.log(hero1.attack()); // Bjorn attacks with axe!
console.log(hero2.attack()); // Layla attacks with bow!