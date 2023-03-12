function getGBP(){
    const url = "http://api.nbp.pl/api/exchangerates/rates/a/gbp/?format=json";

    return a = axios.get(url)
    .then(function (response) {
        j = response.data
        return j;
        
    })

}

function setRate(){
    getGBP().then(function(){
        document.getElementById('rate').innerText = j.rates[0].mid.toFixed(2);
        document.getElementById('GBP').value = 1.00;
        document.getElementById('PLN').value = 1.00 * j.rates[0].mid.toFixed(2);
    });
}

function isNumeric(value){
    return /^[0-9]+(\.[0-9]+)?$/.test(value);
}


function convertCurrencies(currency, value){
    id  = currency == 'GBP' ? 'PLN' :  'GBP';
    
    if(isNumeric(value)){
        
        rate = document.getElementById('rate').innerText;
        document.getElementById(id).value = (id == "PLN" ? (value * rate).toFixed(2) : (value / rate).toFixed(2));
    
    }    
    else {
        document.getElementById(id).value = "";
    }    

}







