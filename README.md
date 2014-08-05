---
languages: javascript
tags: hard, ai, grid
---

# Robot Simulator
## Getting Started

Run `npm install`

## Tests

Review the `robot.js` file inside the `lib` directory, and then the `robot.spec.js` file inside the `spec` directory. Review each of the tests, and then start implementing your solutions to make each test pass in `robot.js`.

Run `grunt watch` then edit your files. Grunt will watch for changes. Grunt
will only run tests that start with `it`. When you finish passing a test,
remove the `x` from `xit` to convert it to a runnable test.

## Background

### Step 1

The robot factory manufactures robots that have three possible movements:

* turn right
* turn left
* advance

Robots are placed on a hypothetical infinite grid, facing a particular
direction (north, east, south, or west) at a set of {x,y} coordinates, e.g.,
{3,8}.

### Step 2

Robots can pivot left and right.

The robot factory manufactures robots that have three possible movements:

* turn right
* turn left
* advance

The factory's test facility needs a program to verify robot movements.

There are a number of different rooms of varying sizes, measured in Robot
Units, the distance a robot moves when you instruct it to `advance`.

The floor of the room is a grid, each square of which measures 1 square RU
(Robot Unit).

The rooms are always oriented so that each wall faces east, south, west, and
north.

The test algorithm is to place a robot at a coordinate in the room, facing in
a particular direction.

The robot then receives a number of instructions, at which point the testing
facility verifies the robot's new position, and in which direction it is
pointing.

### Step 3

The robot factory manufactures robots that have three possible movements:

* turn right
* turn left
* advance

The robot factory's test facility has a simulator which can take a string of
letters and feed this into a robot as instructions.

- The letter-string "RAALAL" means:
  - Turn right
  - Advance twice
  - Turn left
  - Advance once
  - Turn left yet again
- Say a robot starts at {7, 3} facing north.
  Then running this stream of instructions should leave it
  at {9, 4} facing west.
