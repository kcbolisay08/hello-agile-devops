from src.app import greet

def test_greet_returns_expected_message():
    assert greet("Team") == "Hello, Team! Welcome to Agile DevOps."
