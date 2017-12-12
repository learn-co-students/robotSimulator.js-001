const expect = chai.expect;

//TODO: separate these into different describe blocks based on Robot functions

describe("robot.js", () => {
	const wallE = new Robot();
	const directions = ["east", "west", "north", "south"];
	// before(() => {
	// });
	describe("Robot", () => {
		it("should set Robot orientation", () => {
			directions.forEach(direction => {
				wallE.setOrientation(direction);
				expect(wallE.bearing).to.eq(direction);
			});
		});

		it("should handle an invalid robot bearing", () => {
			//TODO
			// expect(wallE.setOrientation("hotdog")).to.throw(/Invalid Robot Bearing/);
			// expect(wallE.setOrientation("hotdog")).to.throw(
			// 	new Error("Invalid Robot Bearing")
			// );
		});

		it("should turn right when facing north", () => {
			wallE.setOrientation("north");
			wallE.turnRight();
			expect(wallE.bearing).to.eq("east");
		});

		it("should turn right when facing east", () => {
			wallE.setOrientation("east");
			wallE.turnRight();
			expect(wallE.bearing).to.eq("south");
		});

		it("should turn right when facing south", () => {
			wallE.setOrientation("south");
			wallE.turnRight();
			expect(wallE.bearing).to.eq("west");
		});

		it("should turn right when facing west", () => {
			wallE.setOrientation("west");
			wallE.turnRight();
			expect(wallE.bearing).to.eq("north");
		});

		it("should turn left when facing north", () => {
			wallE.setOrientation("north");
			wallE.turnLeft();
			expect(wallE.bearing).to.eq("west");
		});

		it("turn left from east", () => {
			wallE.setOrientation("east");
			wallE.turnLeft();
			expect(wallE.bearing).to.eq("north");
		});

		it("turn left from south", () => {
			wallE.setOrientation("south");
			wallE.turnLeft();
			expect(wallE.bearing).to.eq("east");
		});

		it("turn left from west", () => {
			wallE.setOrientation("west");
			wallE.turnLeft();
			expect(wallE.bearing).to.eq("south");
		});

		it("should set its coordinates", () => {
			wallE.at(3, 0);
			expect(wallE.coordinates).to.be.an("array");
			expect(wallE.coordinates).to.deep.eq([3, 0]);
			//TODO: should these be separate tests?
			wallE.at(-2, 5);
			expect(wallE.coordinates).to.be.an("array");
			expect(wallE.coordinates).to.deep.eq([-2, 5]);
		});

		it("should advance when facing north", () => {
			wallE.at(0, 0);
			wallE.setOrientation("north");
			wallE.advance();
			expect(wallE.coordinates).to.deep.eq([0, 1]);
		});

		it("should advance when facing east", () => {
			wallE.at(0, 0);
			wallE.setOrientation("east");
			wallE.advance();
			expect(wallE.coordinates).to.deep.eq([1, 0]);
		});

		it("should advance when facing south", () => {
			wallE.at(0, 0);
			wallE.setOrientation("south");
			wallE.advance();
			expect(wallE.coordinates).to.deep.eq([0, -1]);
		});

		it("should advance when facing west", () => {
			wallE.at(0, 0);
			wallE.setOrientation("west");
			wallE.advance();
			expect(wallE.coordinates).to.deep.eq([-1, 0]);
		});
	});
});

/*
  it("advance when facing west", function() {
    robot.at(0,0);
    wallE.setOrientation('west');
    robot.advance();
    expect(robot.coordinates).toEqual([-1,0]);
  });

  it("instructions for turning left", function() {
    expect(robot.instructions("L")).toEqual(["turnLeft"]);
  });

  it("instructions for turning right", function() {
    expect(robot.instructions("R")).toEqual(["turnRight"]);
  });

  it("instructions for advancing", function() {
    expect(robot.instructions("A")).toEqual(["advance"]);
  });

  it("series of instructions", function() {
    expect(robot.instructions("RAAL"))
      .toEqual(["turnRight", "advance", "advance", "turnLeft"]);
  });

  it("instruct robot", function() {
    robot.place({x: -2, y: 1, direction: "east"});
    robot.evaluate("RLAALAL");
    expect(robot.coordinates).toEqual([0,2]);
    expect(robot.bearing).toEqual("west");
  });

  it("instruct many robots", function() {
    var robot1 = new Robot();
    var robot2 = new Robot();
    var robot3 = new Robot();
    robot1.place({x: 0, y: 0, direction: "north"});
    robot2.place({x: 2, y: -7, direction: "east"});
    robot3.place({x: 8, y: 4, direction: "south"});
    robot1.evaluate("LAAARALA");
    robot2.evaluate("RRAAAAALA");
    robot3.evaluate("LAAARRRALLLL");

    expect(robot1.coordinates).toEqual([-4, 1]);
    expect(robot1.bearing).toEqual("west");

    expect(robot2.coordinates).toEqual([-3, -8]);
    expect(robot2.bearing).toEqual("south");

    expect(robot3.coordinates).toEqual([11, 5]);
    expect(robot3.bearing).toEqual("north");
  });
});

it("invalid robot bearing", function() {
	expect(function() {
		wallE.setOrientation("crood");
	}).toThrow(new Error("Invalid Robot Bearing"));
});

*/
