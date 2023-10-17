function createEnemy(name, level, emoji, attackName) {
    const enemy = {};

    enemy.name = name;
    enemy.level = level;
    enemy.emoji = emoji;
    enemy.attackName = attackName;

    enemy.attack = function() {
        `${enemy.name} ${enemy.attackName} you!`;
    }

    return enemy;
}

const enemies = [
    createEnemy('Spider', 1, '🕷️', 'bites'),
    createEnemy('Snake', 1, '🐍', 'bites'),
    createEnemy('Bear', 1, '🐻', 'scratches'),
];

console.log(enemies);