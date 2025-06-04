const prompt = require("prompt-sync")();



function number_check(digit){

	if(isNaN(Number(digit))) return false
	else return true

}




function add(payroll, name, working_hrs, pay_per_hr, fed_tax, state_tax){

	let gross = working_hrs * pay_per_hr;
	let f_tax = gross * (fed_tax/100);
	let s_tax = gross * (state_tax/100);
	let total = f_tax + s_tax;
	let net_pay = (gross - total);

	let new_name = name.toLowerCase();

	payroll.new_name = {'Employee name' : name, 'Hours worked' : working_hrs, 'Pay rate' : pay_per_hr, 'Gross pay' : gross, 'Deductions' : ' ', '\tFederal withholding rate' : f_tax, '\tState withholding rate' : s_tax, '\tTotal deduction' : total, 'Net pay' : net_pay};

	return "employee payroll added>>>";


}




function view(payroll){

	if(payroll.length == 0) console.log("There are no payrolls available to view")

	else{
		const array = Object.values(payroll)
		
		for(let index = 0; index < array.length; index++){
			const person = array[index];
			for(const obj in person){
				console.log(`${obj}: ${person[obj]}`);
			}
			console.log();
		}
	}

}




function update(payroll, name){

	name = name.toLowerCase();
	
	const array = Object.values(payroll)

	for(let index = 0; index < array.length; index++){
		const person = array[index];
		for(const obj in person){
			if(obj == name){
				delete payroll[name];
				return true;
			}
		}	
	}

	return false;

}





const payroll = {};
let proceed = true;


while(true){

	console.log(`

	Financial Payroll for Terrorist

	1 >>> Add Payroll

	2 >>> View All Payrolls

	3 >>> Update Payroll

	0 >>> Exit

	`)

	let user_input = prompt("Choose a number: ");

	switch(user_input){
		
		case '1': {

			while(proceed){	
				let name = prompt("Employee's name: ");

				let working_hrs = prompt("How many hours did this employee work this week: ");
				if(!number_check(working_hrs)){
					console.log("Invalid");
					continue;
				}

				let pay_per_hr = prompt("What is the pay-per-hour rate: ");
				if(!number_check(working_hrs)){
					console.log("Invalid");
					continue;
				}

				let fed_tax = prompt("What is the federal withholding tax rate: ");
				if(!number_check(working_hrs)){
					console.log("Invalid");
					continue;
				}

				let state_tax = prompt("What is the state withholding tax rate: ");
				if(!number_check(working_hrs)){
					console.log("Invalid");
					continue;
				}
	
				console.log(add(payroll, name, working_hrs, pay_per_hr, fed_tax, state_tax));
				break;
			}

		break;
		}

		case '2': view(payroll)
		
		case '3': {
			while(true){
				update_name = prompt("Enter employee's name to update details: ")

				if(update(payroll, update_name) == false){
					console.log("payroll does not exist, try again")
					continue;
				}				

				while(proceed){	
					name = prompt("Employee's name: ");

					let working_hrs = prompt("How many hours did this employee work this week: ");
					if(!number_check(working_hrs)){
						console.log("Invalid");
						continue;
					}

					let pay_per_hr = prompt("What is the pay-per-hour rate: ");
					if(!number_check(working_hrs)){
						console.log("Invalid");
						continue;
					}

					let fed_tax = prompt("What is the federal withholding tax rate: ");
					if(!number_check(working_hrs)){
						console.log("Invalid");
						continue;
					}

					let state_tax = prompt("What is the state withholding tax rate: ");
					if(!number_check(working_hrs)){
						console.log("Invalid");
						continue;
					}
	
					console.log(add(payroll, name, working_hrs, pay_per_hr, fed_tax, state_tax));
					break;

				}
			break;
			}

		break;
		}

		case '0':{
			console.log("okay, fuck off then");
			break;
		}
		

		default: {
			print("that's invalid mate c'mon, try again")
			continue
		}


	}

}

