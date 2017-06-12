'use strict';

function Robot() {
  var position = ["north", "east", "south", "west", "north"]
  this.turnRight = function(){
    var newPos = position.indexOf(this.bearing) + 1
    this.bearing = position[newPos]
  }
  this.turnLeft = function(){
    var newPos = position.indexOf(this.bearing, 1) - 1
    this.bearing = position[newPos]
  }
  this.advance = function(){
    if(this.bearing === "north"){
      this.coordinates[1] += 1
    } else if(this.bearing === "east"){
      this.coordinates[0] += 1
    } else if(this.bearing === "south"){
      this.coordinates[1] -= 1
    } else if(this.bearing === "west"){
      this.coordinates[0] -= 1
    }
  }
  this.instructions = function(inputs){
    var posits = inputs.split("")
    var dir = []
    if(posits.length >= 2){
      posits.forEach(function(x){
        if(x === "R"){
          // this.turnRight()
          dir.push("turnRight")
        } else if(x === "L"){
          // this.turnLeft()
          dir.push("turnLeft")
        } else if(x === "A"){
          // this.advance()
          dir.push("advance")
        }
      })
    } else {
      if(inputs === "R"){
        // this.turnRight()
        dir.push("turnRight")
      } else if(inputs === "L"){
        // this.turnLeft()
        dir.push("turnLeft")
      } else if(inputs === "A"){
        // this.advance()
        dir.push("advance")
      }
    }
    return dir
  }
  this.bearing =  "north"
  this.coordinates = [0,0]
  this.at = function(x,y){
    this.coordinates = [x,y]
  }
  this.place = function(pos){
    this.coordinates[0] = pos.x
    this.coordinates[1] = pos.y
    this.bearing = pos.direction
  }
  this.evaluate = function(direct){
    var r = this;
    this.instructions(direct).forEach(function(x){
      eval("r." + x + "()");
   }.bind(direct))
  }
  this.orient = function(currentDirection){
    if(currentDirection === "north" || currentDirection === "east" || currentDirection === "south" || currentDirection ===  "west"){
      this.bearing = currentDirection
    } else{
      throw new Error("Invalid Robot Bearing")
    }
  }

}
