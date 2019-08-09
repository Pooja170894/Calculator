class Calculator{
	constructor(billAmt, serviceQual, numOfPeople){
		this.billAmt = billAmt;
		this.serviceQual = serviceQual;
		this.numOfPeople = numOfPeople;
	}
}

function calculateTip(newCalci){
		var total = (newCalci.billAmt * newCalci.serviceQual) / newCalci.numOfPeople;
		total = Math.round(total * 100) / 100;
		total = total.toFixed(2);
		//alert(total);
		displayResult(total);

		
}

function displayResult(result){
	document.getElementById("totalTip").style.display = "block";
	document.getElementById("tip").innerHTML = result;

}

function validation(calci){
	alert(calci.billAmt);
		if (calci.billAmt === "" || calci.serviceQual == 0) {
			alert("please enter values");
			return;
		}
		if (calci.numOfPeople === "" || calci.numOfPeople <= 1) {
			numOfPeople = 1;
			document.getElementById("each").style.display = "none";
		}
		else{
	 
			calculateTip(calci);
			document.getElementById("each").style.display = "block";

			}				
			
		}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";


	document.getElementById("calculate").onclick = function(){
		var billAmt = document.getElementById("billamt").value;
		var serviceQual = document.getElementById("serviceQual").value;
		var numOfPeople = document.getElementById("peopleamt").value;

		const a = new Calculator(billAmt, serviceQual, numOfPeople);
		validation(a);
		
	}		

