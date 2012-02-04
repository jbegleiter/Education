function expression(polyval){

	this.express = function(html_replace){
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

}
function create_polyval(x0,x1,x2){
	var poly = new Array();
	poly[0] = x0;
	poly[1] = x1;
	poly[2] = x2;
	return poly;
}