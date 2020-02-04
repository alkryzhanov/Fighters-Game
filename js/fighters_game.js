function Fighter (object) {
    const name = object.name;
    const damage = object.damage;
    const strength = object.strength;
    const agility = object.agility;
    let hp = object.hp;
    let wins = 0;
    let losses = 0;
    const maxAbil = 100;
    const half = 0.5;
    return {
        getName: () => name,
        getDamage: () => damage,
        getStrength: () => strength,
        getAgility: () => agility,
        getHealth: () => hp,
        dealDamage(amount) {
            let currentHp = hp - amount;
            currentHp < 0 ? currentHp = 0 : currentHp;
            hp = currentHp;
        },
        attack(def) {
            let successAtt = maxAbil - def.getStrength() - def.getAgility();
            let random = Math.round(0 - half + Math.random() * (maxAbil - 0 + 1));
            if (successAtt > random) {
                def.dealDamage(damage);
                console.log(`${name} makes ${strength} damage to ${def.getName()}`);
            } else {
                console.log(`${def.getName()} attack missed`);
            }
        },
        heal(amountHealth) {
            const resultAddHealth = hp + amountHealth;
            resultAddHealth > object.hp ? hp = object.hp : hp = resultAddHealth;
        },
        logCombatHistory() {
            console.log(`Name: ${name}, Wins: ${wins}, Losses: ${losses}`);
        },
        addWin() {
            ++wins;
        },
        addLoss() {
            ++losses;
        }
    }
}
function battle(fighter1, fighter2) {
    if (fighter1.getHealth() === 0) {
        console.log(`${fighter1.getName()} is dead and can't fight`);
        return;
    } else if (fighter2.getHealth() === 0) {
        console.log(`${fighter2.getName()} is dead and can't fight`);
        return;
    } else {
        while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
            fighter1.attack(fighter2);
            if (fighter2.getHealth() > 0) {
                fighter2.attack(fighter1);
            }
        }
        if (fighter1.getHealth() > 0) {
            console.log(`${fighter1.getName()} won`);
            fighter1.addWin() && fighter2.addLoss();
        } else {
            console.log(`${fighter2.getName()} won`);
            fighter2.addWin();
            fighter1.addLoss();
        }
    }
}

const myFighter1 = new Fighter({name: 'Maximus', damage: 20, strength: 20, agility: 15, hp: 100});
const myFighter2 = new Fighter({name: 'Comodus', damage: 25, strength: 25, agility: 20, hp: 90});