class Calculator{
	createCalci = function(){
	document.getElementById("calculate").onclick = function(){
		var billAmt = document.getElementById("billamt").value;
		var serviceQual = document.getElementById("serviceQual").value;
		var numOfPeople = document.getElementById("peopleamt").value;

		let newCalci = new tipCalculator(billAmt, serviceQual, numOfPeople);
		newCalci.calculateTip();
	}
}
}

class tipCalculator{
	constructor(billAmt, serviceQual, numOfPeople){
		this.billAmt = billAmt;
		this.serviceQual = serviceQual;
		this.numOfPeople = numOfPeople;
//alert(this.billAmt+" "+this.serviceQual+" "+this.numOfPeople);

		this.calculateTip = function(){
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

			var total = (this.billAmt * this.serviceQual) / this.numOfPeople;
			total = Math.round(total * 100) / 100;
			total = total.toFixed(2);
		//alert(total);

			document.getElementById("totalTip").style.display = "block";
			document.getElementById("tip").innerHTML = total;

		};

	}
}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

const myCalci = new Calculator();
const myTip = myCalci.createCalci();

