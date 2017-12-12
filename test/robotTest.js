const expect = chai.expect;

//TODO: separate these into different describe blocks based on Robot functions

describe("robot.js", () => {
	const wallE = new Robot();
	const directions = ["east", "west", "north", "south"];

	describe("Robot", () => {
		it("should set Robot orientation", () => {
			directions.forEach(direction => {
				wallE.setOrientation(direction);
				expect(wallE.bearing).to.eq(direction);
			});
		});

		it("should handle an invalid robot bearing", () => {
			//TODO

			expect(() => wallE.setOrientation("hotdog")).to.throw();
			expect(() => wallE.setOrientation("hotdog")).to.throw(
				/Invalid Robot Bearing/i
			);
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

		describe("Robot.prototype.translateInstructions()", () => {
			//TODO: is this test name confusing for students?
			it("should translate instructions into an array of robot instructions", () => {
				expect(wallE.translateInstructions("L")).to.be.an("array");
				expect(wallE.translateInstructions("L")).to.deep.eq(["turnLeft"]);
				expect(wallE.translateInstructions("R")).to.deep.eq(["turnRight"]);
				expect(wallE.translateInstructions("A")).to.deep.eq(["advance"]);
				expect(wallE.translateInstructions("RAAL")).to.deep.eq([
					"turnRight",
					"advance",
					"advance",
					"turnLeft"
				]);
			});
		});

		describe("Robot.prototype.place()", () => {
			it("should place and move the robot", () => {
				wallE.place({ x: -2, y: 1, direction: "east" }); //TODO: test place more thoroughly
				wallE.evaluate("RLAALAL");
				expect(wallE.coordinates).to.deep.eq([0, 2]);
				expect(wallE.bearing).to.eq("west");
			});
		});

		describe("putting everything together", () => {
			it("should instantiate and instruct multiple robots", () => {
				const R2D2 = new Robot();
				const IronGiant = new Robot();
				const HAL9000 = new Robot();
				const Bender = new Robot();

				R2D2.place({ x: 0, y: 0, direction: "north" });
				IronGiant.place({ x: 2, y: -7, direction: "east" });
				HAL9000.place({ x: 8, y: 4, direction: "south" });
				Bender.place({ x: -4, y: -4, direction: "west" });

				R2D2.evaluate("LAAARALA");
				IronGiant.evaluate("RRAAAAALA");
				HAL9000.evaluate("LAAARRRALLLL");
				Bender.evaluate("LAAARRRALLLL");

				expect(R2D2.coordinates).to.deep.eq([-4, 1]);
				expect(R2D2.bearing).to.eq("west");

				expect(IronGiant.coordinates).to.deep.eq([-3, -8]);
				expect(IronGiant.bearing).to.eq("south");

				expect(HAL9000.coordinates).to.deep.eq([11, 5]);
				expect(HAL9000.bearing).to.eq("north");

				expect(Bender.coordinates).to.deep.eq([-3, -7]);
				expect(Bender.bearing).to.eq("east");
			});
		});
	});
});
