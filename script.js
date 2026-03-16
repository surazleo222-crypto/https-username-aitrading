// script.js for Crypto Trading Dashboard

// Example functionality to fetch cryptocurrency prices
async function fetchCryptoPrices() {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd');
    const data = await response.json();
    console.log('Bitcoin Price: ', data.bitcoin.usd);
    console.log('Ethereum Price: ', data.ethereum.usd);
}

fetchCryptoPrices();
