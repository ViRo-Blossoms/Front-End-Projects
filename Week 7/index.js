// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
    var age = [3, 9, 23, 64, 2, 8, 28, 93];
    console.log(age)

 //     Programmatically subtract the value of the first element in the array from the value in the last element of the array.
//         Do not use numbers to reference the last element, find it programmatically.
//         ages[7] - ages[0] is not allowed!
    function FmL (age) {
        console.log(age[age.length - 1] - age[0])
    }
    console.log("First minus Last = ")
    FmL(age);

//     Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
    age.push(14, 37, 105);
    console.log(age)
    console.log("Dynamic test First minus Last = ")
    FmL(age);

//     Use a loop to iterate through the array and calculate the average age.
    var avgage = 0
    for (let i = 0; i <= age.length - 1; i++) {
        avgage += age[i]
    }
    console.log("avg age is " + avgage / age.length)

// Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
    var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
    console.log(names)

//     Use a loop to iterate through the array and calculate the average number of letters per name.
    var avgletname = 0;
    var namepl = 'pl'
    for (let i = 0; i <= names.length - 1; i++) {
        namepl = names[i]
        avgletname += namepl.length
    }
    console.log("Avg name length = " + avgletname/names.length)

//     Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
    var conames = ''
    for (let i = 0; i <= names.length - 1; i++) {
        conames += names[i]
        conames += " "
    }
    console.log(conames)

// How do you access the last element of any array?
    console.log("Last Element = " + names[names.length - 1])

// How do you access the first element of any array?
    console.log("First Element = " + age[0])

// Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
    var nameLengths = []

// For example:
// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array
    for (let i = 0; i <= names.length - 1; i++) {
        namepl = names[i]
        nameLengths.push(namepl.length)
    }
    console.log(nameLengths)

// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
    var nlsum = 0
    for (let i = 0; i <= nameLengths.length - 1; i++) {
        nlsum += nameLengths[i]
    }
    console.log("sum = " + nlsum)

// Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
    function echo (word, n) {
        var echoWord = ''
        for (let i = 0; i <= n - 1; i++) {
        echoWord += word
        }
        return echoWord
    }

    console.log(echo('Echo', 5))

// Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
    function fullName (firstName, lastName) {
        var fullNam = firstName + " " + lastName
        return fullNam
    }

    console.log(fullName("ViRo", "Blossoms"))

// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
    function versus99 (arraySum) { //Funcs cant start w/ numbers? wack!
        var aSum = 0
        arraySum.forEach(aElement => {
            aSum += parseInt(aElement); //Screaming
        });
        console.log(aSum)
        if (aSum > 100) { 
            return true
        }
        else {
            return false
        }
    }

    console.log(versus99(age) + "V99 of age")
    
    var bigOlAr = [2, 64, 3, 4, 1]
    console.log(versus99(bigOlAr) + "V99 of BOA")

// Write a function that takes an array of numbers and returns the average of all the elements in the array.
    function middleOfTheRoad (array2average) {
        var aAverage = 0;
        array2average.forEach(a2Element => {
            aAverage += parseInt(a2Element);
    });
    aAverage = aAverage / array2average.length;
    return aAverage;    
    }

    console.log(middleOfTheRoad(bigOlAr) + " Avg of BigOlAr");

// Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
    function scales (a1, a2) {
        var a1s = 0
        var a2s = 0
        a1.forEach(a1E => {
            a1s += a1E;
        });
        a2.forEach(a2e => {
            a2s += a2e;
        })
        if ((a1s / a1.length) > (a2s / a2.length)) {
            return true
        }
        else {
            return false
        }
    }

    console.log(scales(age, bigOlAr) + " Scales test #1")
    console.log(scales(bigOlAr, age) + " Scales test #2")

// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
    function willBuyDrink (isHotOutside, moneyInPocket) {
        if (isHotOutside == true && moneyInPocket > 10.50) {
            return true
        }
        else {
            return false
        }
    }
    console.log("Test for drinkbuy, exp F F F T")
    console.log(willBuyDrink(false, 2))
    console.log(willBuyDrink(true, 8.63))
    console.log(willBuyDrink(false, 20.50))
    console.log(willBuyDrink(true, 10.51))

// Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
    function homestuculator (pageNumber) {
        var prog = (pageNumber / 8130) * 100;
        console.log("You are " + prog + "% of the way through Homestuck!")
        if (prog < 0) {
            console.log("Bruh")
        }
        else if (prog == 0) (
            console.log("You're missing out, Go read it!")
        )
        else if (prog == 100) {
            console.log("Thanks for reading!")
        }
        else if (prog > 100) {
            console.log("Readin' the epilogues?")
        }

        else if (prog > 50) {
            console.log("Halfway there!")
        }
        else if (prog > 16.703) {
            console.log("Gettin' good right?")
        }
        else {
            console.log("We swear it picks up.")
        }
    }

    homestuculator(-2)    
    homestuculator(0)    
    homestuculator(413)    
    homestuculator(2000)    
    homestuculator(4500)    
    homestuculator(8130)    
    homestuculator(9999)
    //  Homestuck is an epic, in the old sense where it's a long story that gets weird. Clocking in at over 8000 pages, hours of music, hours of animations, and probably
    // an hour worth of games its definitely an effort to get through. It however is an excellently told story that couldn't be replicated in any other medium than online webcomic.
    // This is a simple percentage calculator that takes an int and prints how far you are and a statement about your progress.