let bitcoin = document.getElementById("bitcoin");
let ethereum = document.getElementById("ethereum");
let dogecoin = document.getElementById("dogecoin");

let url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd";
fetch(url)
.then((response)=>{
    console.log(response);
    return response.json();

})
.then((data)=>{
    bitcoin.innerHTML = data.bitcoin.usd;
    ethereum.innerHTML = data.ethereum.usd;
    dogecoin.innerHTML = data.dogecoin.usd;

})
.catch((err)=>{
    console.log("Error-",err);
})