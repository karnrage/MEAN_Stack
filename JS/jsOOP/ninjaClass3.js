// ES6 classes used to recreate the ninja classes
class ninja {
    constructor (name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3; 
    }
    // This should log that Ninja's name to the console.
    sayName() {
        console.log('This ninjas name is ' + this.name);
    }
    // This should show the Ninja's Strength and Speed, as well as their health.
    showStats() {
        console.log('This ninjas strength is ' + this.strength + ' & its speed is ' + this.speed);
    } 
    // This should add +10 Health to the Ninja
    drinkSake() {
        this.health += 10;
        console.log("Hello the ninjas health has increased by 10. The new health is " + this.health);
    } 
}

class Sensei extends ninja{
    constructor(name){
        super(name);
        this.name = name;
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        // NEED super. in front of drinkSake();
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
    showStats(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}, Wisdom: ${this.wisdom}`);
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();


// const blueNinja = new ninja("Goemon");
// const redNinja = new ninja("Bill Gates");




// blueNinja.sayName();
// blueNinja.showStats();
// redNinja.sayName();
// redNinja.showStats();


// blueNinja.showStats();

// blueNinja.showStats();