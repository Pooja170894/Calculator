
class Calculator{
	constructor(billAmt, serviceQual, numOfPeople){
		this.billAmt = billAmt;
		this.serviceQual = serviceQual;
		this.numOfPeople = numOfPeople;
	

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
	    this.total = (this.billAmt * this.serviceQual) / this.numOfPeople;
		this.total = Math.round(this.total * 100) / 100;
		this.total = this.total.toFixed(2);
		//alert(total);

		document.getElementById("totalTip").style.display = "block";
		document.getElementById("tip").innerHTML = this.total;
		//createIterator(this);

	}
	}
}



collection = [];

function iterator(){
	collection.index = 0;

	[Symbol.iterator]()
		return{
			next : ()=>{
				if (collection.index<=collection.length) {
					return { value: collection[index++], done : false};
				}
				else{
					collection.index = 0;
					return{done : true};
				}
			},
		};
	}


document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";


document.getElementById("calculate").onclick = function(){
	var billAmt = document.getElementById("billamt").value;
	var serviceQual = document.getElementById("serviceQual").value;
	var numOfPeople = document.getElementById("peopleamt").value;
	 //console.log(numOfPeople);

	const calci = new Calculator(billAmt, serviceQual, numOfPeople);
	collection.push(calci);
	calci.calculateTip();
	console.log(collection);
	
}	
	
