function ninjaConstructor(name){
    const ninja = {};
    this.name = name;
    this.health = 100;
    // const privateSpeed = 3;
    // const privateStrength = 3;
    // below aren't really private anymore. Did not want to change variable 'thru' whole doc
    let privateSpeed = 3;
    let privateStrength = 3;

    this.sayName = function() {
        console.log("Hello the ninjas name is " + this.name );
    }
    // This should log that Ninja's name to the console.
    this.showStats = function() {
        // console.log("The ninjas strength is " + this.privateStrength + " & their speed is" + this.privateSpeed );
        console.log("The ninjas strength is " + privateStrength + " & their speed is " + privateSpeed );
    } 
    //  This should show the Ninja's Strength and Speed, as well as their health.
    this.drinkSake = function() {
        this.health += 10;
        console.log("Hello the ninjas health has increased by 10. The new health is " + this.health);
    } 
    //  This should add +10 Health to the Ninja
    this.punch = function (enemy) {
        if(enemy instanceof ninjaConstructor){
            enemy.health -= 5;
            console.log(enemy.name + " was uppercut by " + this.name + " his health dropped by 5pts");
            return this;
        }

    }
    this.kick = function (enemy) {
        if (enemy instanceof ninjaConstructor){
            enemy.health -= 15;
            console.log(enemy.name + " was whipped by " + this.name + " and lost 15 health");
            return this;
        }
    }
}

const blueNinja = new ninjaConstructor("Goemon");
const redNinja = new ninjaConstructor("Bill Gates");
redNinja.punch(blueNinja);

blueNinja.kick(redNinja);

blueNinja.sayName();
blueNinja.showStats();
redNinja.sayName();
redNinja.showStats();

redNinja.kick(blueNinja);
blueNinja.showStats();
redNinja.punch(blueNinja);
blueNinja.showStats();



