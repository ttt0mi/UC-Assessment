const prompt = require("prompt-sync")();

const subtract =(number1, number2)=>{
	return number1 - number2;
}

let scoreCounter = 0, questionCounter = 0;

while(questionCounter < 10){

	random1 = Math.random() * 100;
	numb1 =  Math.round(random1, 2);

	random2 = Math.random() * 100;

	if(random1 < random2) continue;
	else numb2 = Math.round(random2, 2);	

	for(let attempt  = 0; attempt < 2; attempt++){

		answer = prompt(`what is ${numb1} minus ${numb2}? `)

		if(subtract(numb1, numb2) == answer){
			console.log("nice!");
			scoreCounter++;
			break;
		}
		else{
			console.log(attempt == 0 ? "oops, try again" : "that's wrong mate. moving on..")
		}
	}

	questionCounter++
}

console.log(`Your score is ${scoreCounter}`)











/*



			if(attempt == 0) console.log("oops, try again")
			else if(attempt == 1) console.log("that's wrong mate. moving on..")

console.log(attempt == 0 ? continue; : "oops, try again" : "that's wrong mate. moving on..")



prompt("what is your number? ")

console.log()


	random1 < random2 ? continue; : numb2 = Math.round(random2, 2);




	if(random1 < random2){
		continue
	}
	else{
		numb2 = Math.round(random2, 2) 
	}
*/