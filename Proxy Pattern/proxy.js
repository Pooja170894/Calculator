class RealCalculator{
	constructor(billAmt, serviceQual, numOfPeople){
		this.billAmt = billAmt;
		this.serviceQual = serviceQual;
		this.numOfPeople = numOfPeople;

		if (this.billAmt === "" || this.serviceQual == 0) {
			alert("please enter values");
			return;
		}
		if (this.numOfPeople === "" || this.numOfPeople <= 1) {
			numOfPeople = 1;
			document.getElementById("each").style.display = "none";
		}
		else{
			document.getElementById("each").style.display = "block";
		}
	
	
		this.total = (this.billAmt * this.serviceQual) / this.numOfPeople;
		this.total = Math.round(this.total * 100) / 100;
		this.total = this.total.toFixed(2);
		//alert(total);
		document.getElementById("totalTip").style.display = "block";
		document.getElementById("tip").innerHTML = this.total;
}
}


function calculateTip(billAmt, serviceQual, numOfPeople){
	const myCalci = new RealCalculator(billAmt, serviceQual, numOfPeople);
	cache.push(myCalci);
	return myCalci;

}
class ProxyCalculator{
	proxyCalci(billAmt, serviceQual,numOfPeople){
		let calci =this.getDetails(billAmt,serviceQual,numOfPeople);

		if(calci){
			console.log("Result from proxy")
			document.getElementById("totalTip").style.display = "block";
			document.getElementById("tip").innerHTML = calci.total;
			return calci;
		}
		else{
			const newCalci = calculateTip(billAmt, serviceQual, numOfPeople);
			console.log("result from original function")
			return newCalci;
	}
}


getDetails(billAmt, serviceQual, numOfPeople){
	//alert("hi");
	return cache.find(calci => (calci.billAmt === billAmt) &&
								(calci.serviceQual === serviceQual) &&
								(calci.numOfPeople === numOfPeople)	);
}
}

cache = [];

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";


document.getElementById("calculate").onclick = function(){
	var billAmt = document.getElementById("billamt").value;
	var serviceQual = document.getElementById("serviceQual").value;
	var numOfPeople = document.getElementById("peopleamt").value;
	 //console.log(numOfPeople);
	const cal = new ProxyCalculator();
	const myCalci = cal.proxyCalci(billAmt, serviceQual, numOfPeople);
	console.log(myCalci);
}		

