# Fighters game :muscle::facepunch::boom:

Here I had the opportunity to create an interesting game by following the necessary requirements and creating the necessary functions.

## 1) Create a Fighter:

You should create a function or class **‘Fighter’** which takes an object with fighter properties and returns interface with fighter methods:
```javascript
const myFighter = new Fighter({name: ‘Maximus, damage: 25, hp: 100, strength: 30, agility: 25}); 
// returns an object with methods
```
**Fighter methods:**

**getName.** This function returns fighter’s name property.
```javascript
let name = myFighter.getName();
console.log(name); // Maximus
```
**getDamage.** This function returns fighter’s damage property.
```javascript
let damage = myFighter.getDamage();
console.log(damage); // 20
```

**getStrength.** This function returns fighter’s strength property.
```javascript
let strength = myFIghter.getStrength();
console.log(strength); // 30
```

**getAgility.** This function returns fighter’s agility property.
```javascript
let agility = myFighter.getAgility();
console.log(agility); // 25
```
**getHealth.** This function returns fighter’s current HP property.
```javascript
let health = myFighter.getHealth();
console.log(health); // 100
```
**attack.** This function takes argument (instance of ‘Fighter’), which will be a defender. Then it randomly calculates if current 
attack is successful (probability of success is inversely proportional to defender’s strength + agility property). For example, if 
defender’s strength is 30 and agility is 20, success probability of current attack will be 50%. If defender’s strength is 15 and 
agility is 10, success probability of current attack will be 75% etc. If attack is successful, defenders’ current HP property is 
decreased by number of points equal to attacker’s damage property and message about successful attack is logged in console. Otherwise, 
message about missed attack is logged.
```javascript
myFighter.attack(myFighter2);
// Maximus makes 20 damage to Commodus
myFighter2.attack(myFighter);
// Commodus attack missed
```
**logCombatHistory.** This function logs to console information about fighter’s combat
history.
```javascript
myFighter.logCombatHistory(); // Name: Maximus, Wins: 0, Losses: 0
```
**heal.** This function takes amount of health points and add this amount to fighter’s current
HP (if result is higher than fighter’s total HP, than it heals only to total HP).
```javascript
myFighter.heal(50);
```
**dealDamage.** This function takes amount of health points and reduces these amount from fighter’s current HP (if it results to 
a negative number, current HP should equal 0):
```javascript
myFighter.dealDamage(20);
```
**addWin.** This function increases fighter’s wins property by one.
```javascript
myFighter.addWin();
```
**addLoss.** This function increases fighter’s losses property by one.
```javascript
myFighter.addLoss();
```

## 2) Create a ‘battle’ function:
This function takes 2 arguments (instances of ‘Fighter’)  and simulates battle between them. It performs attacks of each fighter on 
another until one of them is dead (current HP is 0). After that it logs the message with the name of the winner and increases 
winner’s ‘wins’ property and loser’s ‘losses’ property by one.

If at the start of battle one of given fighter’s is dead (his HP equal to 0), battle shouldn’t be simulated and warning message 
about it should be logged in console.

## Demonstration

[Here in the console](https://kanoleg.com/fighters-game/) you can come up with your fighters and after checking the work of this program the correct function.

**Example**
```javascript
const myFighter1 = new Fighter({name: 'Maximus', damage: 20, strength: 20, agility: 15, hp: 100});
const myFighter2 = new Fighter({name: 'Comodus', damage: 25, strength: 25, agility: 20, hp: 90});
battle(myFighter1, myFighter2);
```
```
Comodus attack missed
Maximus attack missed
Maximus makes 20 damage to Comodus
Maximus attack missed
Maximus makes 20 damage to Comodus
Maximus attack missed
Comodus attack missed
Maximus attack missed
Comodus attack missed
Comodus makes 25 damage to Maximus
Maximus makes 20 damage to Comodus
Comodus makes 25 damage to Maximus
Maximus makes 20 damage to Comodus
Comodus makes 25 damage to Maximus
Maximus makes 20 damage to Comodus
Maximus won
```
```javascript
battle(myFighter1, myFighter2);
```
```
Comodus is dead and can't fight
```
```javascript
myFighter2.heal(50);
battle(myFighter1, myFighter2);
myFighter1.logCombatHistory();
```
```
Maximus makes 20 damage to Comodus
Comodus makes 25 damage to Maximus
Maximus makes 20 damage to Comodus
Comodus makes 25 damage to Maximus
Comodus attack missed
Comodus makes 25 damage to Maximus
Comodus won
Name: Maximus, Wins: 1, Losses: 1
```
