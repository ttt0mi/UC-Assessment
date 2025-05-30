def validation(validity, card_number):

	if not card_number or card_number.isspace():
		validity.update({'valid': False, 'reason' : "Card number cannot be empty"})
		return validity

	elif not card_number.isdecimal():
		validity.update({'valid': False, 'reason' : "Invalid characters present"})
		return validity

	elif len(card_number) not in range(15, 17):
		validity.update({'valid': False, 'reason' : "Invalid length"})
		return validity

	elif not card_number.startswith(('4', '5', '6', '3')):
		validity.update({'valid': False, 'reason': "Card Issuer does not exist"})
		return validity

	else:
		return True



def cardIssuer(validity, card_number_list):

	match len(card_number_list):

		case 15:

			if card_number_list[0] == "3":
				validity.update({'valid': True, 'issuer': "American Express"})
				return validity
			else:
				validity.update({'valid': False, 'reason': "Card Issuer does not exist"})
				return validity

		case 16:

			if card_number_list[0] == "4":
				validity.update({'valid': True, 'issuer': "Visa"})
				return validity

			elif card_number_list[0] == "5":
				validity.update({'valid': True, 'issuer': "Mastercard"})
				return validity

			elif card_number_list[0] == "6":
				validity.update({'valid': True, 'issuer': "Discover"})
				return validity
			else:
				validity.update({'valid': False, 'reason': "Card Issuer does not exist"})
				return validity



"""

card_number = []
validity = {}

card_number_check = str(input("What is your card number: "))

if validation(validity, card_number_check):
	for digit in card_number_check:
		card_number.append(digit)

	print(cardIssuer(validity, card_number))

else: print(validation(validity, card_number_check))


"""

			




	