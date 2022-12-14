const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toLocaleUpperCase();
const dataNumbers = '0123456789';
const dataSymbols ="^¨?.ù:;&$éè'\"()-_ç";
const rangeValue = document.getElementById('password-length');

const passwordOutput = document.getElementById('password-output');



const generatePassword = () => {
    let data = [];
    let password = "";

    // Add spread operator for breaking elements in array into distinct elements
    if(lowercase.checked) data.push(...dataLowercase);
    if(uppercase.checked) data.push(...dataUppercase);
    if(numbers.checked) data.push(...dataNumbers);
    if(symbols.checked) data.push(...dataSymbols);

    if(data.length === 0 ){
        alert("Sélectionnez une option pour votre mot de passe");
        return;
    }

    for(i = 0; i<rangeValue.value; i++){
        password  += (data[Math.floor(Math.random() * data.length)]);
       
    }
    passwordOutput.value = password;

    passwordOutput.select();
    document.execCommand('copy');

    generateButton.textContent = 'Copié !'

    setTimeout(()=>{
        generateButton.textContent = 'Générer un mot de passe'
    }, 2000)
}

generateButton.addEventListener('click', generatePassword)