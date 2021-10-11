const paintWall = function(){
    console.log("The wall has been painted red.")
}

paintWall()

const paintWall1 = function(color){
    console.log("The wall has been painted " + color + ".")
}

paintWall1("green")

const paintWall2 = function(location, color){
    console.log("The " + location + " wall has been painted " + color + ".")

}

paintWall2("south-east", "red")