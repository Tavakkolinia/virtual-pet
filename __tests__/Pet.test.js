const Pet = require("../src/Pet.js");

describe("constructor", () => {
	it("returns an object", () => {
		expect(new Pet("Fido")).toBeInstanceOf(Object);
	});

	it("sets the name property", () => {
		const fido = new Pet("Fido");
		expect(fido.name).toEqual("Fido");
        
	});

	it("has an initial age of 0", () => {
		const fido = new Pet("Fido");
		expect(fido.age).toEqual(0);
	});
	it("increases the age by 1, decreases fitness by 3 and increases hunger by 5", () => {
		const fido = new Pet("Fido");
		fido.growUp();
		expect(fido.age).toEqual(1);
		expect(fido.hunger).toEqual(5);
		expect(fido.fitness).toEqual(7)
	});

	
	it("increases fitness by 4 to a maximum of 10", () => {
		const fido = new Pet("Fido");
		fido.fitness = 8;
		fido.walk();
		expect(fido.fitness).toEqual(10);
	});

	it("decreases hunger level by 3", () => {
		const fido = new Pet("Fido");
		fido.hunger = 7;
		fido.feed();
		expect(fido.hunger).toEqual(4);

	});	

	it("")
    
    
});
  