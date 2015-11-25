'use strict';

function Robot() {
  this.orient = function(direction){
    if(direction === 'east' || direction === 'west' || direction === 'north' || direction === 'south') {
      this.bearing = direction;
    } else {
      throw new Error("Invalid Robot Bearing");
    }
  }

  this.turnRight = function() {
    if(this.bearing === 'north') {
      this.bearing = 'east';
    } else if (this.bearing === 'east') {
      this.bearing = 'south';
    } else if (this.bearing === 'south') {
      this.bearing = 'west';
    } else {
      this.bearing = 'north';
    }
  }

  this.turnLeft = function() {
    if(this.bearing === 'north') {
      this.bearing = 'west';
    } else if (this.bearing === 'east') {
      this.bearing = 'north';
    } else if (this.bearing === 'south') {
      this.bearing = 'east';
    } else {
      this.bearing = 'south';
    }
  }

  this.at = function(x,y) {
    this.coordinates = [x,y];
  }

  this.advance = function() {
    var x = this.coordinates[0];
    var y = this.coordinates[1];
    if(this.bearing === 'north'){
      y+=1;
    } else if (this.bearing === 'east') {
      x+=1;
    } else if (this.bearing === 'south') {
      y-=1;
    } else {
      x-=1;
    }
    this.coordinates = [x,y];
  }

  this.instructions = function(instructions) {
    var directions = [];
    for(var i=0;i<instructions.length;i++) {
      if(instructions[i] == "L") {
        directions.push("turnLeft");
      } else if(instructions[i] == "R") {
        directions.push("turnRight");
      } else if(instructions[i] == "A") {
        directions.push("advance");
      }
    }
    return directions;
  }

  this.place = function(obj) {
    this.bearing = obj["direction"];
    this.coordinates = [obj["x"], obj["y"]];
  }

  this.evaluate = function(instructions) {
    var func_array = this.instructions(instructions);
    for(var i =0;i<func_array.length;i++){
      this[func_array[i]]();
    }
  }
}

