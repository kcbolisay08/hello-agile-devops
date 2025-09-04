from src.app import greet
from datetime import date

# Get today's date
today = date.today()

def test_greet_returns_expected_message():
    assert greet("Team") == "Hello, Team! Welcome to Agile DevOps."
    print(greet("Team"));
    print("Today's date is: ", today)