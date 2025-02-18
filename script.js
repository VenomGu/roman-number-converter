document.getElementById("convert-btn").addEventListener("click", function() {

    const numberInput = document.getElementById("number").value;
    const outputElement = document.getElementById("output");
    const number = parseInt(numberInput);

    if (isNaN(number)) {
        outputElement.innerHTML = "Please enter a valid number";
        return;
    }

    if (number < 1) {
        outputElement.innerHTML = "Please enter a number greater than or equal to 1";
        return;
    }

    if (number > 3999) {
        outputElement.innerHTML = "Please enter a number less than or equal to 3999";
        return;
    }

    const toRoman = (num) => {
        
        const romanNumerals = [
            ["M", 1000],
            ["CM", 900],
            ["D", 500],
            ["CD", 400],
            ["C", 100],
            ["XC", 90],
            ["L", 50],
            ["XL", 40],
            ["X", 10],
            ["IX", 9],
            ["V", 5],
            ["IV", 4],
            ["I", 1]
        ];
        let result = "";

        for (let i = 0; i < romanNumerals.length; i++) {
            
            while (num >= romanNumerals[i][1]) {

                result += romanNumerals[i][0];
                num -= romanNumerals[i][1];
                console.log(num);
            }
        }
        return result;
    };

    outputElement.innerHTML = toRoman(number);
});
