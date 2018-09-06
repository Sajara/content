

function display() {
	/*
	 * var fName, lName; fName = 'Rajasri'; lName = 'Arulselvam';
	 * 
	 * var para=document.getElementById("first"); var paraText= para.innerHTML;
	 * paraText.innerHTML="hello india"; var
	 * paraUsingTag=document.getElementsByTagName("div");
	 * paraUsingTag[0].innerHTML="bye byw"; paraUsingTag[1].innerHTML="h";
	 */
	/*
	 * document.write(Date());
	 * 
	 * window.alert("Welcome" + " " + fName + " " + lName);
	 */

	var para = document.createElement("p");
	var node = document.createTextNode("This is third line");
	para.appendChild(node);

	var paradiv = document.getElementById("first");
	paradiv.appendChild(para);

	var myCar = new Object();
	myCar.make = "Ford";
	myCar.model = "Mustang";
	myCar.year = "1998";
	myCar["colour"] = "Blue";

	document.write(myCar["make"] + " " + myCar["model"] + " " + myCar["year"]
			+ " " + myCar["colour"]);

	for (x in myCar) {
		document.write(myCar[x] + "   ");

	}

	var myHonda = {
		color : "red",
		wheels : 4,
		engine : {
			cylinders : 7,
			size : 2.2
		}
	};
	document.write(myHonda["color"] + "  " + myHonda["wheels"] + "  "
			+ myHonda.engine["cylinders"] + "  " + myHonda.engine["size"]);

	function displayCar(){
		var result="A Beautiful"+" "+this.year+" "+this.make+" "+this.model;
		return result;
	}

	function Car(make, model, year) {
		this.make = make;
		this.model = model;
		this.year = year;
		this.displayCar=displayCar;
	}
	
	var myC = new Car("eagle", "TTT", 1998);
	var result=myC.displayCar();
		document.write(result);
	

}



function season() {
	var num = document.login.snum.value;

	switch (num) {
	case '1' || '2' || '3':
		document.write("Spring");
		break;
	case '4' || '5' || '6':
		document.write("Summer");
		break;
	case '7' || '8' || '9':
		document.write("Autumn");
		break;
	case '10' || '11' || '12':
		document.write("Winter");
		break;
	default:
		document.write("Nothing" + num);
		break;
	}
	for (var n = 0; n < 8; n++) {
		document.write(n);
	}
	var name = Array(2);
	name[0] = 'Raja';
	name[1] = 'sri';
	for (x in name) {
		document.write(name[x]);
	}

}