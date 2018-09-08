function next1(){
	
	if (document.getElementById('answer1').checked) {
		var option=document.getElementById('answer1').value;
		if(option=="fission"){
			alert('correct');
		}
		}
}	
function next2(){
	if (document.getElementById('answer2').checked) {
		var option=document.getElementById('answer2').value;
		if(option.substring(1,9)=="cascading"){
			alert('correct');
		}
		else
			{
			alert('option.substring(1,9)');
			}
		}
}