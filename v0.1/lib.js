function expression(){

	this.express = function(html_replace,polyval){
		var i=0; var st = ""; var pow = 0;
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
	this.generate = function(dim, html_replace){
		a = new Array();
		for(i=0;i<dim;i++){
			a[i] = Math.floor(Math.random()*11);
		}
		//document.getElementById(html_replace).innerHTML = a[0];
		return a;
	}
}
function gen(){
//p = new Array(3,-1,3);
ex = new expression();
arr = ex.generate(4,"response");
ex.express("formula", arr);

}