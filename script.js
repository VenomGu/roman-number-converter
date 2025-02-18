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


/*
InnerHTML = "Please enter a valid number"
innerHTML = "Please enter a number greater than or equal to 1"
innerHTML = "Please enter a number less than or equal to 3999"
Waiting:7. When the #number element contains the number 9 and the #convert-btn element is clicked, the #output element should contain the text "IX".
Waiting:8. When the #number element contains the number 16 and the #convert-btn element is clicked, the #output element should contain the text "XVI".
Waiting:9. When the #number element contains the number 649 and the #convert-btn element is clicked, the #output element should contain the text "DCXLIX".
Waiting:10. When the #number element contains the number 1023 and the #convert-btn element is clicked, the #output element should contain the text "MXXIII".
Waiting:11. When the #number element contains the number 3999 and the #convert-btn element is clicked, the #output element should contain the text "MMMCMXCIX".
Waiting:12. When the #number element contains a random negative number and the #convert-btn element is clicked, the #output element should contain the text "Please enter a number greater than or equal to 1".
Waiting:13. When the #number element contains a number greater than 4000 and the #convert-btn element is clicked, the #output element should contain the text "Please enter a number less than or equal to 3999".
*/