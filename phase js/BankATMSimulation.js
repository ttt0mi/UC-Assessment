const prompt = require("prompt-sync")();


function BalanceCheck(balance){

	balanceStr = balance.toString();
	
	temp = balanceStr.replace('.','',1);

	if(balance < 0) temp = temp.replace('-','',1);

	if(temp.startsWith('0')) return "account balance cannot start with 0";

	if(isNaN(Number(balance))) return "invalid balance entered";

	balance = Number(balance);

	if(balance <= 0) return "account balance must be a positive number";

	if(balance < 1000) return "minimum limit not exceeded";

	else return balance;

}


function AmountCheck(balance, amount){
	
	amountStr = amount.toString();
	
	temp = amountStr.replace('.','',1);

	if(amount < 0) temp = temp.replace('-','',1);

	if(temp.startsWith('0')) return "amount cannot start with 0";



	if(isNaN(Number(balance))) return "invalid amount entered";

	amount = Number(amount);

	if(amount <= 0) return "invalid amount entered";
	else
	if(amount > 20000) return "maximum withdrawal limit reached";
	else
	if(amount % 500 != 0) return "invalid amount, only multiples of £500/£1000 allowed";
	else
	if(amount > (balance * 0.9)) return "invalid amount, cannot withdraw more than 90% of account balance";
	else return amount;

}



function Withdraw(transactions, balance, amount){

	balance -= (amount + 100);
	
	transactions.push({'withdrawal amount' : amount, 'withdrawal fee' : 100, 'remaining balance' : balance});
	return balance;

}


function Details(transactions){

	for(let index = 0; index < transactions.length; index++){
		const transaction = transactions[index];
		for(const obj in transaction){
			console.log(`${obj}: £${transaction[obj]}`);
		}
		console.log();
	}

}

const transactions = []
let proceed = true


while(proceed){

	let balance = prompt("What is your account balance: ");

	if(typeof BalanceCheck(balance) != 'number'){
		console.log(BalanceCheck(balance));
		continue;
	}

	balance = BalanceCheck(balance);
	console.log(`Your current balance: £${balance}`);

	while(proceed){
	
		let amount = prompt("How much do you want to withdraw: ")

		if(typeof AmountCheck(balance, amount) != 'number'){
			console.log(AmountCheck(balance, amount))
			continue
		}

		amount = AmountCheck(balance, amount);
		balance = Withdraw(transactions, balance, amount);
		console.log("Transaction Successful!");
		Details(transactions);

		while(proceed){
			let choice = prompt("do you want to make another withdrawal. |yes or no|: ");
			choice = choice.toLowerCase();

				if(choice == "yes") break;
				else
				if(choice == "no"){
					proceed = false;
					break;
				}
				else{
					comsole.log("Invalid input, try again");
					continue;
				}

		}

	}

}















