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