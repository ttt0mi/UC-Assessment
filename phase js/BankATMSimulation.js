const prompt = require("prompt-sync")();

let transactions = []
let proceed = true

const BalanceCheck =(balance)=>{

	balanceStr = balance.toString()
	
	temp = balanceStr.replace('.','',1)

	if(balance < 0) temp = temp.replace('-','',1)
	
	for(let digit of temp){
		if(typeof digit != 'number') return "invalid balance entered"
	}

	if(!temp.startsWith('0')) return "account balance cannot start with 0"

	if(balance <= 0) return "account balance must be a positive number" 

	if(balance < 1000) return "minimum limit not exceeded"

	else return balance

}


const AmountCheck =(balance, amount)=>{
	
	amountStr = amount.toString()
	
	temp = amountStr.replace('.','',1)

	if(amount < 0) temp = temp.replace('-','',1)
	
	for(let digit of temp){
		if(typeof digit != 'number') return "invalid amount entered"
	}

	if(!temp.startsWith('0')) return "amount cannot start with 0"

	amount = Number(amount)

	if(amount <= 0) return "invalid amount entered"
	else
	if(amount > 20000) return "maximum withdrawal limit reached"
	else
	if(amount % 500 != 0) return "invalid amount, only multiples of £500/£1000 allowed"
	else
	if(amount > (account_balance * 0.9)) return "invalid amount, cannot withdraw more than 90% of account balance"
	else return amount

}



const Withdraw =(transactions, balance, amount)=>{

	balance -= (amount + 100)
	
	transactions.push({'withdrawal amount' : amount, 'withdrawal fee' : 100, 'remaining balance' : account_balance})
	return balance

}


const details =(transactions) =>{

	for(let transaction in transactions){
		for(const [iden, info] of transaction.entries()){
			console.log(`${iden}: £${info}`)
		console.log()
	}

}




while(proceed){

	let balance = prompt("What is your account balance: ")

	if(typeof BalanceCheck(balance) != 'number'){
		console.log(BalanceCheck(balance))
		continue
	}

	balance = BalanceCheck(balance)
	console.log(`Your current balance: £${balance}`)

	while(proceed){
	
		let amount = prompt("How much do you want to withdraw: ")

		if(typeof AmountCheck(balance, amount) != 'number'){
			console.log(AmountCheck(balance, amount))
			continue
		}

		amount = AmountCheck(balance, amount)
		balance = Withdraw(transaction, balance, amount)
		console.log("Transaction Successful!")
		details(transactions)

		while(proceed){
			let choice = prompt("do you want to make another withdrawal. |yes or no|: ")
			choice = choice.toLowerCase()

				if(choice == "yes") break
				else
				if(choice == "no"){
					proceed = false
					break
				}
				else{
					comsole.log("Invalid input, try again")
					continue
				}

		}

	}

}















