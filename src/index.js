const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let result = ''
    expr = expr.match(/.{10}/g)
    expr.forEach(element => {
        if (element === '**********') {
            result += ' '
        } else {
            while (element[0] === '0') {
                element = element.replace(element[0], '')
            }
            element = element.match(/.{2}/g)
            let morse_letter=''
            element.forEach(item => {
                if (item === '10') morse_letter += '.'
                if (item === '11') morse_letter += '-'
            });
            result += MORSE_TABLE[morse_letter]
        }
    });
    return result
}

module.exports = {
    decode
}
