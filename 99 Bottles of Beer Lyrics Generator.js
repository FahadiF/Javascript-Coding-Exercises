var numberOfBottles = 99;

function beer() {

  while (numberOfBottles > 0 && numberOfBottles != 1) {

    console.log(numberOfBottles + " bottles of beer on the wall, " + numberOfBottles + " bottles of beer.");

    numberOfBottles = numberOfBottles - 1; // or numberOfBottles--;

    if (numberOfBottles === 1) {
      console.log("Take one down and pass it around, " + numberOfBottles + " bottle of beer on the wall.");
      console.log(" ");
    }
    else {
      console.log("Take one down and pass it around, " + numberOfBottles + " bottles of beer on the wall.");
      console.log(" ");
    }

    if (numberOfBottles === 1) {

      console.log("1 bottle of beer on the wall, 1 bottle of beer.");
      console.log("Take one down and pass it around, no more bottles of beer on the wall.");
      console.log(" ");
      console.log("No more bottles of beer on the wall, no more bottles of beer.");
      console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");

    }
  }
}

beer();
