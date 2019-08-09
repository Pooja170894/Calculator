class Calculator{
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

class AllCalculator{

	// constructor(){
	// 	//this.calculators = [];
	// }


	newCalculator(billAmt, serviceQual,numOfPeople){
		let calci =this.getDetails(billAmt,serviceQual,numOfPeople);

		if(calci){
			console.log("The instance already exist");
			document.getElementById("totalTip").style.display = "block";
			document.getElementById("tip").innerHTML = calci.total;
			return calci;
		}
		else{
		console.log("creating new instance");
		const newCalci = new Calculator(billAmt, serviceQual, numOfPeople);
		calculators.push(newCalci);
		console.log(calculators);
		return newCalci;
	}
}

getDetails(billAmt, serviceQual, numOfPeople){
	alert("hi");
	return calculators.find(calci => (calci.billAmt === billAmt) &&
								(calci.serviceQual === serviceQual) &&
								(calci.numOfPeople === numOfPeople)	);
}
}

calculators = [];

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";


document.getElementById("calculate").onclick = function(){
	var billAmt = document.getElementById("billamt").value;
	var serviceQual = document.getElementById("serviceQual").value;
	var numOfPeople = document.getElementById("peopleamt").value;
	 //console.log(numOfPeople);
	const cal = new AllCalculator();
	const myCalci = cal.newCalculator(billAmt, serviceQual, numOfPeople);
	console.log(myCalci);
}		