const enemies = [
    {
        name: 'Spider',
        level: 1,
        emoji: '🕷️',
        attackName: 'bites',
        attack: function() {
            return `${this.name} ${this.attackName} you!`;
        },
    },
    {
        name: 'Snake',
        level: 1,
        emoji: '🐍',
        attackName: 'bites',
        attack: function() {
            return `${this.name} ${this.attackName} you!`;
        },
    },
    {
        name: 'Bear',
        level: 1,
        emoji: '🐻',
        attackName: 'scratches',
        attack: function() {
            return `${this.name} ${this.attackName} you!`;
        },
    },
];

enemies.forEach(enemy => console.log(enemy.attack()));

// function createEnemy(name, level, emoji, attackName) {
//     const enemy = {};

//     enemy.name = name;
//     enemy.level = level;
//     enemy.emoji = emoji;
//     enemy.attackName = attackName;

//     enemy.attack = () => `${enemy.name} ${enemy.attackName} you!`;

//     return enemy;
// }

// const enemies = [
//     createEnemy('Spider', 1, '🕷️', 'bites'),
//     createEnemy('Snake', 1, '🐍', 'bites'),
//     createEnemy('Bear', 1, '🐻', 'scratches'),
// ];

// console.log(enemies);