function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6DqS0G5I9rn":
        Script1();
        break;
      case "5Vmqe6or9Py":
        Script2();
        break;
      case "65eTfBYHr5k":
        Script3();
        break;
      case "6pF4czIbI42":
        Script4();
        break;
      case "6GiWlRXYT2A":
        Script5();
        break;
      case "5fMtGGDEULG":
        Script6();
        break;
      case "6d3QaqONCPW":
        Script7();
        break;
      case "5urRrWym3Sb":
        Script8();
        break;
      case "6eOWkiw9VUW":
        Script9();
        break;
      case "5XZBEpI23lP":
        Script10();
        break;
      case "6Izboj9TBrI":
        Script11();
        break;
      case "5c5yolUfwP2":
        Script12();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var player = GetPlayer();
var timerCounter = setInterval(Timer, 1000);
var numberTimer;
var actionTimer

function Timer () {
	numberTimer = player.GetVar("timer");
 	actionTimer = player.GetVar("action_timer");
	actionTimer ? numberTimer-- : numberTimer;
	player.SetVar("timer", numberTimer);
	if ( numberTimer == 0 || !actionTimer ){
			clearInterval(timerCounter);
		}
}
}

window.Script2 = function()
{
  var player = GetPlayer();

var count_array = [];
var all_answer_array = [];
var remove_count_array = [];

var count;

var countOutAns = 0;

for (let d = 1; d <= 8; d++) {
count = player.GetVar('counter_Show_Ans');
  if (player.GetVar(`Active_Ans_${d}`) == true ) {

    count_array.splice(d, 1);
   

   
  } else if (player.GetVar(`Active_Ans_${d}`) == false) {

    count_array.push(d);
	
  }
  all_answer_array.push(d);
  
  // player.GetVar('OutAns');
	//countOutAns++;
	//player.SetVar('OutAns', countOutAns);
}



if (player.GetVar(`Active_Ans_${count}`) == true ) {

    remove_count_array.push(count);

  }
  
	
let first = count_array.find(myFunction);
	
	function myFunction(value, index, array) {
		if (count <= 8) {
		
			return value < remove_count_array[0];
		
		}  else if (count >= 1) {
		
			return value > remove_count_array[0];
			
		} 
	}
	
	if (first <= 8) {
	
		console.log('count: ' , first);
		player.SetVar('counter_Show_Ans', first);
		
	} else if (count_array[0] >= 1) {
		console.log('count: ' , count_array[0]);
		player.SetVar('counter_Show_Ans', count_array[0]);
	} else {
		console.log('count: ' , count);
		player.SetVar('counter_Show_Ans', count);
	}

}

window.Script3 = function()
{
  var player = GetPlayer();

var count_array = [];

var remove_count_array = [];

var count;

for (let d = 1; d <= 8; d++) {
count = player.GetVar('counter_Show_Ans');

   if (player.GetVar(`Active_Ans_${d}`) == false){

    count_array.push(d);

  }
}

console.log(count_array);

	if (player.GetVar(`Active_Ans_${count}`) == true){
	
	    remove_count_array.push(count);
	
	}

 let items_plus = count_array.find(myFunction);
	
		function myFunction(value, index, array) {
			if (count >= 1) {
			
				return value > count;
				
			} else if (count <= 8) {
			
				return value < count;
			
			} 
		}
		
	if (items_plus <= 8) {
	
		console.log('count: ' , items_plus);
		player.SetVar('counter_Show_Ans', items_plus);
		
	} else if (count_array[0] >= 1) {
		console.log('count: ' , count_array[0]);
		player.SetVar('counter_Show_Ans', count_array[0]);
	} else {
		console.log('count: ' , count);
		player.SetVar('counter_Show_Ans', count);
	}
	
	
}

window.Script4 = function()
{
  var player = GetPlayer();

var count_array = [];

var remove_count_array = [];

var count;

for (let i = 1; i <= 8; i++) {

count = player.GetVar('counter_Show_Ans');

	if (player.GetVar(`Active_Ans_${i}`) == false) {
	
	    count_array.push(i);
	
  }
}
	count_array.reverse();
 let items_mens = count_array.find(myFunction);
	//var items_mens;
	
		function myFunction(value, index, array) {
			if (count >= 1) {
			
				return value < count;
				
			} else if (count <= 8 ) {
			
				return value > count;
			
			} 
		}
		
		
			//count_array.forEach(function(item, index, arr) {
			  //arr[index] = item * 10;
			 // items_mens = arr[index] < count;
			//  console.log(items_mens);
			//});
			//console.log(numbers);
				//count_array.reverse();	
		//count_array.some((value) => {
   // if (value < count) return true; // Stops the loop
  //  console.log(value);
   // return false; // Continues the loop
//});


		if (items_mens >= 1) {
	
			console.log('count: ' , items_mens);
			player.SetVar('counter_Show_Ans', items_mens);
		
		} else if (count_array[0] <= 8) {
			console.log('count: ' , count_array[0]);
			player.SetVar('counter_Show_Ans', count_array[0]);
			
		} else {
		
			console.log('count: ' , count);
			player.SetVar('counter_Show_Ans', count);
		}

 
}

window.Script5 = function()
{
  var player = GetPlayer();

var count_array = [];
var all_answer_array = [];
var remove_count_array = [];

var count;

for (let d = 1; d <= 8; d++) {
count = player.GetVar('counter_Show_Ans');
  if (player.GetVar(`Active_Ans_${d}`) == true ) {

    count_array.splice(d, 1);

  } else if (player.GetVar(`Active_Ans_${d}`) == false) {

    count_array.push(d);

  }
  all_answer_array.push(d);
}



if (player.GetVar(`Active_Ans_${count}`) == true ) {

    remove_count_array.push(count);

  }
  
	
let items = count_array.find(myFunction);
	
	function myFunction(value, index, array) {
		if (count < 8) {
		
			return value > remove_count_array[0];
			
		} else if (count > 1) {
		
			return value < remove_count_array[0];
		
		} 
	}
	
	if (items <= 8) {
	
		console.log('count: ' , items);
		player.SetVar('counter_Show_Ans', items);
		
	} else if (count_array[0] >= 1) {
		console.log('count: ' , count_array[0]);
		player.SetVar('counter_Show_Ans', count_array[0]);
	} else {
		console.log('count: ' , count);
		player.SetVar('counter_Show_Ans', count);
	}

}

window.Script6 = function()
{
  var player = GetPlayer();

var count_array = [];
var all_answer_array = [];
var remove_count_array = [];

var count;

for (let d = 1; d <= 8; d++) {
count = player.GetVar('counter_Show_Ans');
  if (player.GetVar(`Active_Ans_${d}`) == true ) {

    count_array.splice(d, 1);

  } else if (player.GetVar(`Active_Ans_${d}`) == false) {

    count_array.push(d);

  }
  all_answer_array.push(d);
}



if (player.GetVar(`Active_Ans_${count}`) == true ) {

    remove_count_array.push(count);

  }
  
	
let items = count_array.find(myFunction);
	
	function myFunction(value, index, array) {
		if (count < 8) {
		
			return value > remove_count_array[0];
			
		} else if (count > 1) {
		
			return value < remove_count_array[0];
		
		} 
	}
	
	if (items <= 8) {
	
		console.log('count: ' , items);
		player.SetVar('counter_Show_Ans', items);
		
	} else if (count_array[0] >= 1) {
		console.log('count: ' , count_array[0]);
		player.SetVar('counter_Show_Ans', count_array[0]);
	} else {
		console.log('count: ' , count);
		player.SetVar('counter_Show_Ans', count);
	}

}

window.Script7 = function()
{
  var player = GetPlayer();

var count_array = [];
var all_answer_array = [];
var remove_count_array = [];

var count;

for (let d = 1; d <= 8; d++) {
count = player.GetVar('counter_Show_Ans');
  if (player.GetVar(`Active_Ans_${d}`) == true ) {

    count_array.splice(d, 1);

  } else if (player.GetVar(`Active_Ans_${d}`) == false) {

    count_array.push(d);

  }
  all_answer_array.push(d);
}



if (player.GetVar(`Active_Ans_${count}`) == true ) {

    remove_count_array.push(count);

  }
  
	
let items = count_array.find(myFunction);
	
	function myFunction(value, index, array) {
		if (count < 8) {
		
			return value > remove_count_array[0];
			
		} else if (count > 1) {
		
			return value < remove_count_array[0];
		
		} 
	}
	
	if (items <= 8) {
	
		console.log('count: ' , items);
		player.SetVar('counter_Show_Ans', items);
		
	} else if (count_array[0] >= 1) {
		console.log('count: ' , count_array[0]);
		player.SetVar('counter_Show_Ans', count_array[0]);
	} else {
		console.log('count: ' , count);
		player.SetVar('counter_Show_Ans', count);
	}

}

window.Script8 = function()
{
  var player = GetPlayer();

var count_array = [];
var all_answer_array = [];
var remove_count_array = [];

var count;

for (let d = 1; d <= 8; d++) {
count = player.GetVar('counter_Show_Ans');
  if (player.GetVar(`Active_Ans_${d}`) == true ) {

    count_array.splice(d, 1);

  } else if (player.GetVar(`Active_Ans_${d}`) == false) {

    count_array.push(d);

  }
  all_answer_array.push(d);
}



if (player.GetVar(`Active_Ans_${count}`) == true ) {

    remove_count_array.push(count);

  }
  
	
let items = count_array.find(myFunction);
	
	function myFunction(value, index, array) {
		if (count < 8) {
		
			return value > remove_count_array[0];
			
		} else if (count > 1) {
		
			return value < remove_count_array[0];
		
		} 
	}
	
	if (items <= 8) {
	
		console.log('count: ' , items);
		player.SetVar('counter_Show_Ans', items);
		
	} else if (count_array[0] >= 1) {
		console.log('count: ' , count_array[0]);
		player.SetVar('counter_Show_Ans', count_array[0]);
	} else {
		console.log('count: ' , count);
		player.SetVar('counter_Show_Ans', count);
	}

}

window.Script9 = function()
{
  var player = GetPlayer();

var count_array = [];
var all_answer_array = [];
var remove_count_array = [];

var count;

for (let d = 1; d <= 8; d++) {
count = player.GetVar('counter_Show_Ans');
  if (player.GetVar(`Active_Ans_${d}`) == true ) {

    count_array.splice(d, 1);

  } else if (player.GetVar(`Active_Ans_${d}`) == false) {

    count_array.push(d);

  }
  all_answer_array.push(d);
}



if (player.GetVar(`Active_Ans_${count}`) == true ) {

    remove_count_array.push(count);

  }
  
	
let items = count_array.find(myFunction);
	
	function myFunction(value, index, array) {
		if (count < 8) {
		
			return value > remove_count_array[0];
			
		} else if (count > 1) {
		
			return value < remove_count_array[0];
		
		} 
	}
	
	if (items <= 8) {
	
		console.log('count: ' , items);
		player.SetVar('counter_Show_Ans', items);
		
	} else if (count_array[0] >= 1) {
		console.log('count: ' , count_array[0]);
		player.SetVar('counter_Show_Ans', count_array[0]);
	} else {
		console.log('count: ' , count);
		player.SetVar('counter_Show_Ans', count);
	}

}

window.Script10 = function()
{
  var player = GetPlayer();

var count_array = [];
var all_answer_array = [];
var remove_count_array = [];

var count;

for (let d = 1; d <= 8; d++) {
count = player.GetVar('counter_Show_Ans');
  if (player.GetVar(`Active_Ans_${d}`) == true ) {

    count_array.splice(d, 1);

  } else if (player.GetVar(`Active_Ans_${d}`) == false) {

    count_array.push(d);

  }
  all_answer_array.push(d);
}



if (player.GetVar(`Active_Ans_${count}`) == true ) {

    remove_count_array.push(count);

  }
  
	
let items = count_array.find(myFunction);
	
	function myFunction(value, index, array) {
		if (count < 8) {
		
			return value > remove_count_array[0];
			
		} else if (count > 1) {
		
			return value < remove_count_array[0];
		
		} 
	}
	
	if (items <= 8) {
	
		console.log('count: ' , items);
		player.SetVar('counter_Show_Ans', items);
		
	} else if (count_array[0] >= 1) {
		console.log('count: ' , count_array[0]);
		player.SetVar('counter_Show_Ans', count_array[0]);
	} else {
		console.log('count: ' , count);
		player.SetVar('counter_Show_Ans', count);
	}

}

window.Script11 = function()
{
  var player = GetPlayer();

var count_array = [];
var all_answer_array = [];
var remove_count_array = [];

var count;

for (let d = 1; d <= 8; d++) {
count = player.GetVar('counter_Show_Ans');
  if (player.GetVar(`Active_Ans_${d}`) == true ) {

    count_array.splice(d, 1);

  } else if (player.GetVar(`Active_Ans_${d}`) == false) {

    count_array.push(d);

  }
  all_answer_array.push(d);
}



if (player.GetVar(`Active_Ans_${count}`) == true ) {

    remove_count_array.push(count);

  }
  
	
let items = count_array.find(myFunction);
	
	function myFunction(value, index, array) {
		if (count < 8) {
		
			return value > remove_count_array[0];
			
		} else if (count > 1) {
		
			return value < remove_count_array[0];
		
		} 
	}
	
	if (items <= 8) {
	
		console.log('count: ' , items);
		player.SetVar('counter_Show_Ans', items);
		
	} else if (count_array[0] >= 1) {
		console.log('count: ' , count_array[0]);
		player.SetVar('counter_Show_Ans', count_array[0]);
	} else {
		console.log('count: ' , count);
		player.SetVar('counter_Show_Ans', count);
	}

}

window.Script12 = function()
{
  var player = GetPlayer();

var count_array = [];
var all_answer_array = [];
var remove_count_array = [];

var count;

for (let d = 1; d <= 8; d++) {
count = player.GetVar('counter_Show_Ans');
  if (player.GetVar(`Active_Ans_${d}`) == true ) {

    count_array.splice(d, 1);

  } else if (player.GetVar(`Active_Ans_${d}`) == false) {

    count_array.push(d);

  }
  all_answer_array.push(d);
}



if (player.GetVar(`Active_Ans_${count}`) == true ) {

    remove_count_array.push(count);

  }
  
	
let items = count_array.find(myFunction);
	
	function myFunction(value, index, array) {
		if (count < 8) {
		
			return value > remove_count_array[0];
			
		} else if (count > 1) {
		
			return value < remove_count_array[0];
		
		} 
	}
	
	if (items <= 8) {
	
		console.log('count: ' , items);
		player.SetVar('counter_Show_Ans', items);
		
	} else if (count_array[0] >= 1) {
		console.log('count: ' , count_array[0]);
		player.SetVar('counter_Show_Ans', count_array[0]);
	} else {
		console.log('count: ' , count);
		player.SetVar('counter_Show_Ans', count);
	}

}

};
