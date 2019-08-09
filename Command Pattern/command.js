class Calculator{
	constructor(billAmt, serviceQual, numOfpeople){
		this.billAmt = billAmt;
		this.serviceQual =serviceQual;
		this.numOfPeople = numOfpeople;
	}

	calculateTip(){

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
		//alert(this.billAmt+" "+this.serviceQual+" "+this.numOfPeople);
		var total = (this.billAmt * this.serviceQual) / this.numOfPeople;
		total = Math.round(total * 100) / 100;
		total = total.toFixed(2);
		//alert(total);
		document.getElementById("totalTip").style.display = "block";
		document.getElementById("tip").innerHTML = total;
	}
}

class Command{
	constructor(task){
		this.task = task;
		this.CommandExecuted = [];
	}
	execute(command){
		this.CommandExecuted.push(command);
		console.log(this.CommandExecuted);
		return this.task[command]();
	}
}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";


document.getElementById("calculate").onclick = function(){
	var billAmt = document.getElementById("billamt").value;
	var serviceQual = document.getElementById("serviceQual").value;
	var numOfPeople = document.getElementById("peopleamt").value;
	 
	const t1= new Command(new Calculator(billAmt, serviceQual, numOfPeople));
	t1.execute('calculateTip');
	
}		

