class arrayFunc {
    // Map Method - Change dates from US date format to UK date format

    mapExample() {
        const dates = ["07-14-2024", "10-24-2033", "12-09-2224", "09-20-1998"];
        
        function changeFormat(date) {
            let individual = date.split("-");


            return `${individual[1]}/${individual[0]}/${individual[2]}`;
        }

        console.log(dates.map(changeFormat));
    }



    // Filter Example - Check whether adult age or not
    ageCheckAdult() {
        const ages = [25, 15, 65, 13, 32, 16, 12, 19];

        const adultAge = ages.filter((age) => age >= 18);
        console.log(adultAge);

    }
    // Reduce Function - Give a repeated char in an object
    reduceExmp() {
        const chars = ['a', 'b', 'a', 'c', 'b', 'a', 'd', 'c'];

        const repeatedChar = chars.reduce((prev, curr) => {
            if (prev[curr]) {

                prev[curr] += 1;
            } else {
                prev[curr] = 1;

            }
            return prev;
        }, {});
        console.log(repeatedChar);
    }
    // Find example

    findExample() {
        const fruits = ['kiwi', 'Watermelon', 'honeyDEw', 'gRapEs'];

        const bigNameFruits = fruits.find((fruit) => {
            return fruit.length > 4;

        });
        console.log(bigNameFruits);
    }


    // Includes Example

    includesEmp() {
        const ages = [25, 15, 65, 13, 32, 16, 12, 19];
        const wantedAge = ages.includes(27);
        console.log(wantedAge);
    }

    // Join Example
    joinEmp() {

        const fruits = ['kiwi', 'Watermelon', 'honeyDEw', 'gRapEs'];
        
        console.log(fruits.join('*'));

    }
}

// Usage examples
const arrayFunc = new arrayFunc();

arrayFunc.mapExample(); // Map method example
arrayFunc.ageCheckAdult(); // Filter method example
arrayFunc.reduceExmp(); // Reduce method example
arrayFunc.findExample(); // Find method example
arrayFunc.includesEmp(); // Includes method example
arrayFunc.joinEmp(); // Join method example
