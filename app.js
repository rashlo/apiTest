//XMLHttpRequest//

/*
let request = new XMLHttpRequest();
request.open("GET", "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true");
request.send();
request.onload = () => {
	console.log(JSON.parse(request.response));
}
*/


//Displaying data from an external JSON file referenced in index.html//

/*
let mydatastring = JSON.stringify(data);
let mydata = JSON.parse(mydatastring);

for(i = 0; i < mydata.length; i++) {
	console.log(mydata[i].id)
	console.log(mydata[i].price)
}
*/


//Console logging data without the use of recursive code//

/*
//console.log(mydata[0].id);
//console.log(mydata[0].price);
//console.log(mydata[1].id);
//console.log(mydata[1].price);
*/


//Coingecko API for 100 coins displayed across 3 pages (300 total)//

//https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=3

/*
async function showData() {
	const data = document.querySelector("#data");
	let response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true");
	const obj = await response.json();
	let p = document.createElement("p");
	p.innerHTML = obj.bitcoin.usd;
	data.appendChild(p);
	console.log(obj)
}
*/

//showData()

const data = document.querySelector("#data");

fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
.then(response => response.json())
.then(json => {
	for(i = 0; i < json.length; i++) {
		let coinHeader = document.createElement("h1");
		//let coinName = document.createElement("h1");
		let coinPrice = document.createElement("p");
		//coinName.innerHTML = json[i].id;
		coinHeader.innerHTML = json[i].market_cap_rank + ': ' + json[i].id;
		coinPrice.innerHTML = json[i].current_price;
		data.appendChild(coinHeader);
		//data.appendChild(coinName);
		data.appendChild(coinPrice);
	}
	console.log(json)
});


