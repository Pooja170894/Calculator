class Calculator{
	constructor(billAmt, serviceQual, numOfPeople){
		this.billAmt = billAmt;
		this.serviceQual = serviceQual;
		this.numOfPeople = numOfPeople;

	}
	validate(){
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
		this.calculate();

	}
}

class calculateTip extends Calculator{
	constructor(billAmt, serviceQual, numOfPeople){
		super(billAmt, serviceQual, numOfPeople);
	}
	calculate(){
		var total = (this.billAmt * this.serviceQual) / this.numOfPeople;
		total = Math.round(total * 100) / 100;
		total = total.toFixed(2);
		//alert(total);
		console.log("Tip calculator extending super class calculator");
		document.getElementById("totalTip").style.display = "block";
		document.getElementById("tip").innerHTML = total;
	}
}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";


document.getElementById("calculate").onclick = function(){
	var billAmt = document.getElementById("billamt").value;
	var serviceQual = document.getElementById("serviceQual").value;
	var numOfPeople = document.getElementById("peopleamt").value;
	 //console.log(numOfPeople);
	const calci = new calculateTip(billAmt, serviceQual, numOfPeople);
	calci.validate();
}		