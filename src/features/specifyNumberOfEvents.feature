Feature: Specify number of events

Scenario: When user hasn’t specified a number, 32 is the default number
Given the app is loaded.
When the user hasn’t specified the number of events.
Then a list of 32 events is served to the user.

Scenario: User can change the number of events they want to see
Given a list of events has been served to the user. 
When the user specifies the number of events to be loaded.
Then a list with the specified number of events is served to the user.
