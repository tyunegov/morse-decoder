const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let countWords=expr.length / 10;
    let words =[];
    let j=0;
    let result="";
    let parseInMorse="";
    for(let i=0; i<countWords;i++){
        words[i]=expr.slice(j,j+10); 
        j=j+10;
        if (words[i][1]!='*')
        {
        let positionOfOne=words[i].indexOf(1);
        words[i]=words[i].slice(positionOfOne);
        } else words[i]=0;
        
        for(let x=0; x<words[i].length; x=x+2 ){
            
            if (words[i].slice(x,x+2)=="10"){
                parseInMorse=parseInMorse+".";
            }
            else if(words[i].slice(x,x+2)=="11"){
                parseInMorse=parseInMorse+"-";
            }
            else parseInMorse=parseInMorse+" ";

        }
        words[i]=parseInMorse;
    }
    for (let i=0; i<words.length; i++){
        let b=words[i];
        
       if (words[i]!=0) {result=result+MORSE_TABLE[b]}
       else result=result+" ";
    }

    return result;
}

module.exports = {
    decode
}