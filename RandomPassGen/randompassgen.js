function generatePassword(length,includeLowercase,includeUppercase,includeNumbers,includeSymbols){

    const lowercaseChars="abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars="ABCDEFGHIJKlmNOPQRSTUVWXYZ"
    const numberChars="0123456789"
    const symbolChars="!@#$%^&*()";

    let allowedChar="";
    let password= "";

    allowedChar+= includeLowercase?lowercaseChars:"";
    allowedChar+= includeUppercase?uppercaseChars:"";
    allowedChar+= includeNumbers?numberChars:"";
    allowedChar+= includeSymbols?symbolChars:"";

    if(length<=0){
        return `(password length must be at least 1)`;
    }
    if (allowedChar.length===0){
        return `(Atleast 1 set of characters must be selected)`;
    }
    for (let i=0;i<length;i++){
        const randomIndex= Math.floor(Math.random()*allowedChar.length);
        password+=allowedChar[randomIndex];
    }
    return password;
}

const length=12;
const includeLowercase=true;
const includeUppercase=true;
const includeNumbers=true;
const includeSymbols=true;

const password = generatePassword(length,includeLowercase,includeUppercase,includeNumbers,includeSymbols);
console.log(`Generated password: ${[password]}`);