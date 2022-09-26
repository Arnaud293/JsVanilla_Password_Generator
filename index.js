const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toLocaleUpperCase();
const dataNumbers = '0123456789';
const dataSymbols ="^¨?.ù:;&$éè'\"()-_ç";



const generatePassword = () => {
    let data = [];

    // Add spread operator for breaking elements in array into distinct elements
    if(lowercase.checked) data.push(...dataLowercase);
    if(uppercase.checked) data.push(...dataUppercase);
    if(numbers.checked) data.push(...dataNumbers);
    if(symbols.checked) data.push(...dataSymbols);

    console.log(data);
}

generateButton.addEventListener('click', generatePassword)