// Write your classes here
// Define a Tree class that will act as our parent
class Tree {
	// A Tree instance should take in one parameter when created, species, and assign this to a property named species
	constructor(species) {
		this.species = species
	}

	// A Tree should have a static method, definition(), that returns a short definition of all trees
	static definition() {
		return 'A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.'
	}
}

// Define a Deciduous class that extends Tree
class Deciduous extends Tree {
	// A Deciduous instance takes two parameters, species and name. Use super() in the constructor to use the parent class constructor to assign species. After super(), assign the name parameter to the a name property in the Deciduous constructor
	constructor(species, name) {
		super(species) // call the parent constructor with species
		this.name = name // assign name to a property
	}

	// Create a static method, definition(), that uses super to access definition() from Tree and add the following to the provide a specific definition for Deciduous
	static definition() {
		return `${super.definition()} Deciduous trees shed their leaves annually.` // use template literals and super to call the parent method and add more text
	}
}

// Define an Evergreen class that extends Tree
class Evergreen extends Tree {
	// An Evergreen instance takes two parameters, species and name. Use super() in the constructor to use the parent class constructor to assign species, then assign name to a property in the Evergreen constructor
	constructor(species, name) {
		super(species) // call the parent constructor with species
		this.name = name // assign name to a property
	}

	// Create a static method, definition(), that uses super to access definition() from Tree and add the following to provide a specific definition for Evergreen
	static definition() {
		return `${super.definition()} Evergreens keep their leaves all year round.` // use template literals and super to call the parent method and add more text
	}
}
