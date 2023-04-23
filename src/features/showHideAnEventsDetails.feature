Feature: Show and hide event details

Scenario: An event element is collapsed by default
Given the app is loaded.
When a list of events has been served to the user.
Then the event details are not visible to the user.

Scenario: User can expand an event to see its details
Given the list of events is loaded
When the user clicks on the “Show details” button of the event.
Then the event is expanded to show details

Scenario: User can collapse an event to hide its details
Given an event has been expanded to show details.
When the user clicks on the “Hide details” button of the event.
Then the details of the event are hidden. 
