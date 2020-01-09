
var Car = function(maxSpeed, driver){

    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time){
        console.log(speed * time);
    };
    this.logDriver = function(){
        console.log("driver name is " + this.driver);
    };
}

var myCar = new Car(70, "Net Man");
var myCar2 = new Car(50, "Net");
var myCar3 = new Car(40, "Man");
var myCar4 = new Car(90, "Elo");

myCar.drive(30, 5);



