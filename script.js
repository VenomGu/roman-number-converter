function convert() {
    let num = document.getElementById("number").value;
    let output = document.getElementById("output");

    if (num < 1 || num > 3999 || isNaN(num)) {
        output.innerHTML = "Por favor, coloque um número válido entre 1 e 3999."; 
        return;
    }

    let romanNumeral = toRoman(num);
    output.innerHTML = romanNumeral; 
}

function toRoman(num) {
    const romanNumerals = [
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" }
    ];

    let result = "";
    for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i].value) {
            result += romanNumerals[i].symbol;
            num -= romanNumerals[i].value;
        }
    }
    return result;
}

function speak() {
    let outputText = document.getElementById("output").innerText;  // Obtém o texto do div de output
    let romanNumeral = outputText.trim();  // Remove espaços extras

    let pronunciation = getRomanPronunciation(romanNumeral);  // Obtém a pronúncia correta
    let msg = new SpeechSynthesisUtterance(pronunciation);  // Cria uma instância de fala
    msg.lang = "it-IT";  // Usando o idioma italiano para melhorar a pronúncia
    speechSynthesis.speak(msg);  // Faz a fala do texto
    console.log("Texto de saída: ", outputText);
    console.log("Mensagem de fala: ", pronunciation);
}

// Função para obter a pronúncia dos números romanos
function getRomanPronunciation(romanNumeral) {
    const pronunciationMap = {
        'I': 'ee',  // Pronúncia de 'I' (1)
        'II': 'ee ee',  // Pronúncia de 'II' (2)
        'III': 'ee ee ee',  // Pronúncia de 'III' (3)
        'IV': 'ee vee',  // Pronúncia de 'IV' (4)
        'V': 'vee',  // Pronúncia de 'V' (5)
        'VI': 'vee ee',  // Pronúncia de 'VI' (6)
        'VII': 'vee ee ee',  // Pronúncia de 'VII' (7)
        'VIII': 'vee ee ee ee',  // Pronúncia de 'VIII' (8)
        'IX': 'ee ex',  // Pronúncia de 'IX' (9)
        'X': 'ex',  // Pronúncia de 'X' (10)
        'XI': 'ex ee',  // Pronúncia de 'XI' (11)
        'XII': 'ex ee ee',  // Pronúncia de 'XII' (12)
        'XIII': 'ex ee ee ee',  // Pronúncia de 'XIII' (13)
        'XIV': 'ex ee vee',  // Pronúncia de 'XIV' (14)
        'XV': 'ex vee',  // Pronúncia de 'XV' (15)
        'XVI': 'ex vee ee',  // Pronúncia de 'XVI' (16)
        'XX': 'ex ex',  // Pronúncia de 'XX' (20)
        'XXX': 'ex ex ex',  // Pronúncia de 'XXX' (30)
        'L': 'elle',  // Pronúncia de 'L' (50)
        'C': 'chee',  // Pronúncia de 'C' (100)
        'D': 'dee',  // Pronúncia de 'D' (500)
        'M': 'emme',  // Pronúncia de 'M' (1000)
    };

    let pronunciation = "";
    for (let i = 0; i < romanNumeral.length; i++) {
        let char = romanNumeral[i];
        pronunciation += pronunciationMap[char] ? pronunciationMap[char] + " " : "";
    }
    
    return pronunciation.trim();
}
