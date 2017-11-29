function ninjaConstructor(name){
    const ninja = {};
    ninja.name = name;
    ninja.health = 100;
    const privateSpeed = 3;
    const privateStrength = 3;

    this.sayName = function() {
        console.log("Hello the ninjas name is " + ninja.name );
    }
    // This should log that Ninja's name to the console.
    this.showStats = function() {
        console.log("The ninjas strength is " + ninja.privateStrength + " & their speed is" + ninja.privateSpeed );
    } 
    //  This should show the Ninja's Strength and Speed, as well as their health.
    this.drinkSake = function() {
        ninja.health += 10;
        console.log("Hello the ninjas health has increased by 10. The new health is " + ninja.health);
    } 
    //  This should add +10 Health to the Ninja
}