function expression(){

	this.express = function(html_replace,polyval){
		var st = ""; var pow = 0;
		for(i=0; i< polyval.length; i++){
			if(polyval[i]!= 0){
				sign = ""; val = polyval[i];
				if(val>0 && st != "" ){ sign = " + "; }
				else if(val<0 && st != "") { 
					sign = " - "; 
					val = val.toString().replace("-","");
				}
				if(polyval.length - i - 1!=0){
					pow = "x<sup>" + (polyval.length - i - 1) + "</sup>";
				} 
				else { pow = ""}
			//create string 
				st = st + sign + val+ pow;
			}
		}
		document.getElementById(html_replace).innerHTML = st;
	}	
	this.generate = function(dim){
		a = new Array();
		for(i=0;i<dim;i++){
			a[i] = Math.floor(Math.random()*11);
		}
		return a;
	}
	//this.opp = Math.floor(Math.random()*40);
	this.solution = function(coef,opp,html_replace){
		//used for quadratic for now
		if(coef.length == 3){
			sol = new Array();
			var a = coef[0]; var b = coef[1]; var c = coef[2]; 
			sol[0] = (b*-1)+Math.sqrt((Math.pow(b,2) - (4*a*c))/(2*a));
			//document.getElementById(html_replace).innerHTML = sol[0];
			//document.write(sol[0]);
		}
		return sol;
	}
}
function gen(){
ex = new expression();
arr = ex.generate(4);
ex.express("formula", arr);
//ex.solution(arr.slice(0,2),arr.slice(-1),"response");
document.getElementById("response").innerHTML = arr.slice(0,3);
}