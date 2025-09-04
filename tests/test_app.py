from src.app import greet
from datetime import date

today = date.today()

def test_greet_returns_expected_message():
    assert greet("Team") == "Hello, Team! Welcome to Agile DevOps."
    print(greet("Team"))