
class Ninja {
    constructor(name, health, speed =3, strength =3) {
        this.name = name;
        this.health = health;
        this.speed =speed;
        this.strength = strength;
    }
    sayName() {
        console.log(`your name is ${this.name}` );

    
    }
    showStats(){
        console.log(`Ninja Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`);

    return
    }
    drinkSake(){
    
        console.log(`your health is ${this.name}`)
        this.health += 10;
    }
}




class Sensei extends Ninja {
        constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
            super(name, health, speed, strength, wisdom)
            this.wisdom = wisdom;
        }
    speakWisdom() {
        super.drinkSake();
        
        
    }
    
}
const naruto = new Ninja("naruto");


const superSensei = new Sensei ("Master Oogway");
superSensei.speakWisdom();
superSensei.showStats();