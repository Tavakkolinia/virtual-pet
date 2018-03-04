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
		expect(fido.fitness).toEqual(7);
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

	it("returns iam hungry when hunger lever is 5 or above", () => {
		const fido = new Pet("Fido");
		fido.hunger = 7;
		expect(fido.checkUp()).toBe("I am hungry");

	});
	it("returns true when hunger is under 10, fitness above 0 and age under 30", () => {
		const fido = new Pet("Fido");
		fido.age = 29;
		fido.fitness = 1;
		fido.hunger = 9;
		expect(fido.isAlive).toBeTruthy();
		
		
	});
	it("returns false if hunger is over 10 or fitness less than 0 or age above 30", () => {
		const fido = new Pet("Fido");
		fido.age = 31;
		fido.fitness = 0;
		fido.hunger = 10;
		expect(fido.isAlive).toBeFalsy();
		
		
	});
    
	xit("throws an error if the pet is not alive", () => {
		const fido = new Pet("Fido");
  
		fido.age = 13;
  
		expect(fido.feed).toThrow("Your pet is no longer alive :(");
	});
});
  
  

  