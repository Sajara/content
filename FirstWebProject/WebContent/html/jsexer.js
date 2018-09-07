
function explore(){
	var books = [
		  {title: 'She broke up but i did not',
		   author: 'Durjoy Datta',
		   read: false
		  },
		  {title: 'Will you still love me',
		  author: 'Ravinder Singh',
		  read: true
		  },
		  {title: 'One indian girl',
			   author: 'Chetan Bhagat',
			   read: true
		   }];

		for (var x in books) {
		  var book = books[x];
		  var bookInfo = book.title + '" by ' + book.author + "   ";
		  if (book.read) {
		    document.write('You already read "' + bookInfo);
		  } else {
		    document.write('You still need to read "' + bookInfo);
		  }
		}

		var favMovie = [
			{
				title:'Acham yenbathu madamaiyada',
				duration: 2.30,
				actors: {
					hero:'Simbhu',
						shero:'manjima'}},
						
				{
							title:'OK Kanmani',
							duration: 2.30,
							actors: {
								hero:'Dulquer',
									shero:'Nithya'}	
				}];
		
		for (var x in favMovie) {
			  var fav = favMovie[x];
			  var favInfo = fav.title + '" duration ' + fav.duration + "   actors" + fav.actors.hero+" "+fav.actors.shero;
			 document.write(favInfo);
			}

}

function cashRegister(){
	var cartForParty = {
			banana:1.25,
			handkerchief:.99,
			tshirt:25.01,
			apple:0.60,
			nalgene:10.35,
			proteinShake:22.36
	};
	var cartForDinner = {
			biscuits:22.2,
			milkShake:30.9,
			chocolates:56.8
	};
	var totPriceParty=0;
	for(x in cartForParty)
		{
			totPriceParty+=cartForParty[x];
		}
	var totPriceDinner=0;
	for(x in cartForDinner)
	{
		totPriceDinner=totPriceDinner+cartForDinner[x];
	}
	var num=totPriceParty+totPriceDinner;
	
	document.write(Math.round(num*100)/100);
}

function checkdate()
{
	var curday = function(sp){
		today = new Date();
		var dd =today.getDate() ;
		var mm = today.getMonth()+1; 
		var yyyy = today.getFullYear();
		if(dd<10){
			dd='0'+dd;
		}
		if(mm<10){
			mm='0'+mm;
		}
		return (mm+sp+dd+sp+yyyy);

		};

		console.log(curday('/'));
		console.log(curday('-'));

}





