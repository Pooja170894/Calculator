class OldCalculator{
	constructor(billAmt, serviceQual, numOfPeople){
		this.billAmt = billAmt;
		this.serviceQual = serviceQual;
		this.numOfPeople = numOfPeople;
	}
	calculateTip = function(){
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

		//alert(this.billamt+" "+this.serviceQual+" "+this.numOfPeople);

	    //calculateTip
		var total = (this.billamt * this.serviceQual) / this.numOfPeople;
		total = Math.round(total * 100) / 100;
		total = total.toFixed(2);
		//alert(total);

		document.getElementById("totalTip").style.display = "block";
		document.getElementById("tip").innerHTML = total;
	};
}

NewCalculator = (function(){

	var Amt, Qual, People, total;
	function getValue(billAmt, serviceQual, numOfPeople){
	 	Amt = billAmt;
	 	Qual = serviceQual;
	 	People = numOfPeople;
	 	calculateTip();

	 }

	function calculateTip(){
		if (Amt === "" || Qual == 0) {
			alert("please enter values");
			return;
		}
		if (People === "" || People <= 1) {
			People = 1;
			document.getElementById("each").style.display = "none";
		}
		else{
			document.getElementById("each").style.display = "block";
		}

		//alert(this.billamt+" "+this.serviceQual+" "+this.numOfPeople);

	    //calculateTip
	    total = (Amt * Qual) / People;
		total = Math.round(total * 100) / 100;
		total = total.toFixed(2);
		//alert(total);

		document.getElementById("totalTip").style.display = "block";
		document.getElementById("tip").innerHTML = total;
		}

		return{
			getDetails : getValue,
			result : total

		};

})();

class CalcAdapter{
	constructor(billAmt, serviceQual, numOfPeople){
		this.calculateTip = function(){
			NewCalculator.getDetails(billAmt, serviceQual, numOfPeople);
		}

	}

}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";


document.getElementById("calculate").onclick = function(){
	var billAmt = document.getElementById("billamt").value;
	var serviceQual = document.getElementById("serviceQual").value;
	var numOfPeople = document.getElementById("peopleamt").value;
	 
	const a = new OldCalculator(billAmt, serviceQual, numOfPeople);
	a.calculateTip();

	NewCalculator.getDetails(billAmt, serviceQual, numOfPeople);

	const b = new CalcAdapter(billAmt, serviceQual, numOfPeople);
	b.calculateTip();

	console.log("abc");
}		