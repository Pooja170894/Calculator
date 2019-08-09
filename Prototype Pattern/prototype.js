var Calculator = {

	calculateTip : function(billAmt, serviceQual, numOfPeople){

		if (billAmt === "" || serviceQual == 0) {
			alert("please enter values");
			return;
		}
		if (numOfPeople === "" || numOfPeople <= 1) {
			numOfPeople = 1;
			document.getElementById("each").style.display = "none";
		}
		else{
			document.getElementById("each").style.display = "block";
		}

		var total = (billAmt * serviceQual) / numOfPeople;
		total = Math.round(total * 100) / 100;
		total = total.toFixed(2);
		//alert(total);

		document.getElementById("totalTip").style.display = "block";
		document.getElementById("tip").innerHTML = total;

	}
};

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";


document.getElementById("calculate").onclick = function(){
	var billAmt = document.getElementById("billamt").value;
	var serviceQual = document.getElementById("serviceQual").value;
	var numOfPeople = document.getElementById("peopleamt").value;
	 //console.log(numOfPeople);
	
	var myCalci = Object.create(Calculator);
	myCalci.calculateTip(billAmt, serviceQual, numOfPeople);
}		