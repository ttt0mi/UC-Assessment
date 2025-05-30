import card_validation
from card_validation import *
import unittest
from unittest import TestCase


class TestCardValidationFunction(TestCase):

	def test_card_validation_existence(self):
		card_number = ['4', '1', '0', '3', '5', '4', '6', '7', '2', '3', '1', '9', '5', '3', '0', '1']
		validity = {}
		cardIssuer(validity, card_number)


	def test_card_validation_actions1(self):
		card_number = ['4', '1', '0', '3', '5', '4', '6', '7', '2', '3', '1', '9', '5', '3', '0', '1']
		validity = {}
		self.assertEqual(cardIssuer(validity, card_number), {'valid': True, 'issuer': 'Visa'})


	def test_card_validation_actions2(self):
		card_number = ['5', '1', '0', '3', '5', '4', '6', '7', '2', '3', '1', '9', '5', '3', '0', '1']
		validity = {}
		self.assertEqual(cardIssuer(validity, card_number), {'valid': True, 'issuer': 'Mastercard'})


	def test_card_validation_actions3(self):
		card_number = ['6', '1', '0', '3', '5', '4', '6', '7', '2', '3', '1', '9', '5', '3', '0', '1']
		validity = {}
		self.assertEqual(cardIssuer(validity, card_number), {'valid': True, 'issuer': 'Discover'})


	def test_card_validation_actions4(self):
		card_number = ['3', '1', '0', '3', '5', '4', '6', '7', '2', '3', '1', '9', '5', '3', '0']
		validity = {}
		self.assertEqual(cardIssuer(validity, card_number), {'valid': True, 'issuer': 'American Express'})



	def test_card_validation_invalid(self):
		card_number = ['7', '1', '0', '3', '5', '4', '6', '7', '2', '3', '1', '9', '5', '3', '0']
		validity = {}
		self.assertEqual(cardIssuer(validity, card_number), {'valid': False, 'reason': "Card Issuer does not exist"})



	def test_card_validation_invalid2(self):
		card_number = []
		validity = {}
		card_number_check = "476379199292"
		self.assertEqual(validation(validity, card_number, card_number_check), {{'valid': False, 'reason' : "Invalid length"})


