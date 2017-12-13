const expect = chai.expect;

describe("robot.js", () => {
	const wallE = new Robot();

	describe("Robot() constructor function", () => {
		const Terminator = new Robot();

		it("should create a new robot with default coordinates of [0, 0]", () => {
			expect(Terminator.coordinates).to.deep.eq([0, 0]);
		});

		it("should create a new robot with a default bearing of 'north'", () => {
			expect(Terminator.bearing).to.match(/north/i);
		});
	});

	describe("setCoordinates()", () => {
		it("should set robot coordinates", () => {
			wallE.setCoordinates(3, 0);
			expect(wallE.coordinates).to.be.an("array");
			expect(wallE.coordinates).to.deep.eq([3, 0]);

			wallE.setCoordinates(-2, 5);
			expect(wallE.coordinates).to.be.an("array");
			expect(wallE.coordinates).to.deep.eq([-2, 5]);
		});
	});

	describe("setBearing()", () => {
		const directions = ["east", "west", "north", "south"];

		it("should set Robot orientation", () => {
			directions.forEach(direction => {
				wallE.setBearing(direction);
				expect(wallE.bearing).to.eq(direction); //TODO: make this case insensitive
			});
		});

		it("should handle an invalid robot bearing", () => {
			expect(() => wallE.setBearing("hotdog")).to.throw();
			expect(() => wallE.setBearing("hotdog")).to.throw(
				/Invalid Robot Bearing/i
			);
		});
	});

	describe("place()", () => {
		it("should set robot coordinates and orientation", () => {
			wallE.place({ x: -2, y: 1, direction: "east" });
			expect(wallE.bearing).to.match(/east/i);
			expect(wallE.coordinates).to.deep.eq([-2, 1]);

			wallE.place({ x: -5, y: -7, direction: "south" });
			expect(wallE.bearing).to.match(/south/i);
			expect(wallE.coordinates).to.deep.eq([-5, -7]);
		});
	});

	describe("turnRight()", () => {
		it("should turn right when facing north", () => {
			wallE.setBearing("north");
			wallE.turnRight();
			expect(wallE.bearing).to.eq("east");
		});

		it("should turn right when facing east", () => {
			wallE.setBearing("east");
			wallE.turnRight();
			expect(wallE.bearing).to.eq("south");
		});

		it("should turn right when facing south", () => {
			wallE.setBearing("south");
			wallE.turnRight();
			expect(wallE.bearing).to.eq("west");
		});

		it("should turn right when facing west", () => {
			wallE.setBearing("west");
			wallE.turnRight();
			expect(wallE.bearing).to.eq("north");
		});
	});

	describe("turnLeft()", () => {
		it("should turn left when facing north", () => {
			wallE.setBearing("north");
			wallE.turnLeft();
			expect(wallE.bearing).to.eq("west");
		});

		it("turn left from east", () => {
			wallE.setBearing("east");
			wallE.turnLeft();
			expect(wallE.bearing).to.eq("north");
		});

		it("turn left from south", () => {
			wallE.setBearing("south");
			wallE.turnLeft();
			expect(wallE.bearing).to.eq("east");
		});

		it("turn left from west", () => {
			wallE.setBearing("west");
			wallE.turnLeft();
			expect(wallE.bearing).to.eq("south");
		});
	});

	describe("advance()", () => {
		it("should advance when facing north", () => {
			wallE.setCoordinates(0, 0);
			wallE.setBearing("north");
			wallE.advance();
			expect(wallE.coordinates).to.deep.eq([0, 1]);
		});

		it("should advance when facing east", () => {
			wallE.setCoordinates(0, 0);
			wallE.setBearing("east");
			wallE.advance();
			expect(wallE.coordinates).to.deep.eq([1, 0]);
		});

		it("should advance when facing south", () => {
			wallE.setCoordinates(0, 0);
			wallE.setBearing("south");
			wallE.advance();
			expect(wallE.coordinates).to.deep.eq([0, -1]);
		});

		it("should advance when facing west", () => {
			wallE.setCoordinates(0, 0);
			wallE.setBearing("west");
			wallE.advance();
			expect(wallE.coordinates).to.deep.eq([-1, 0]);
		});
	});

	describe("translateInstructions()", () => {
		let T1000;
		beforeEach(() => (T1000 = new Robot()));

		it("should handle 'L'", () => {
			T1000.translateInstructions("L");
			expect(T1000.bearing).to.match(/west/i);
		});

		it("should handle 'R'", () => {
			T1000.translateInstructions("R");
			expect(T1000.bearing).to.match(/east/i);
		});

		it("should handle 'A'", () => {
			T1000.translateInstructions("A");
			expect(T1000.coordinates).to.deep.eq([0, 1]);
		});

		it("should handle a complex set of instructions", () => {
			T1000.translateInstructions("RRAL");
			expect(T1000.coordinates).to.deep.eq([0, -1]);
			expect(T1000.bearing).to.match(/east/i);
		});

		it("should handle an even more complex set of instructions", () => {
			T1000.translateInstructions("LAAARRRALLLL");
			expect(T1000.coordinates).to.deep.eq([-3, -1]);
			expect(T1000.bearing).to.match(/south/i);
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

			R2D2.translateInstructions("LAAARALA");
			IronGiant.translateInstructions("RRAAAAALA");
			HAL9000.translateInstructions("LAAARRRALLLL");
			Bender.translateInstructions("LAAARRRALLLL");

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
	// });
});
