# Meet-App

# Objective
To build a serverless, progressive web application (PWA) with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.

# Context
Serverless and PWAs have grown in popularity over the last few years, and they’re both considered to
be the future of web development. By combining these two concepts, your app will not only work as a
normal web application, but it will also reap the benefits of both serverless architecture and PWAs:

● Serverless: No backend maintenance, easy to scale, always available, no cost for idle time.

● PWAs: Instant loading, offline support, push notifications, “add to home screen” prompt,
responsive design, and cross-platform compatibility.

For this app, I used the TDD approach, where I wrote tests before writing the actual
functionality for your app in code. Writing tests forces you to focus on the requirements of your
application before jumping into the code. TDD relies on the repetition of a very short development
cycle, allowing you to get immediate feedback and deliver high-quality code.

Last but not least, I added some graphs to the app, which made it more visually appealing and
allow users to easily draw conclusions from the data. A picture is worth a thousand words, right?

The app allows users to search for a city and get a list of events hosted in that city. For the data visualization component, I added two
charts—one that shows how many events will take place in that city on upcoming days, and another
that visualizes the popularity of event genres in the form of a pie chart.

# The 5 Ws

1. Who—The users of your Meet application. They could be you, your friends, your professional
network, or your potential employers.

2. What—A progressive web app with the ability to work offline and a serverless backend
developed using a TDD technique.

3. When—Users of this app will be able to use it whenever they want to view upcoming events
for a specific city. Your recruiter will be able to see your code immediately on GitHub.

4. Where—The server, in this case, is a serverless function hosted by a cloud provider (e.g.,
AWS). The application itself is also hosted online to make it shareable and installable. It can
be used even when the user is offline. As it’s responsive, it displays well on any device.

5. Why—Serverless is the next generation of cloud infrastructure, PWA provides great user
experience and performance, and the TDD technique ensures you have quality code and
adequate test coverage. All of these skills, together with data visualization, will distinguish
you from other web developers.

# Features and Requirements

Key Features:

● Filter events by city.

● Show/hide event details.

● Specify the number of events.

● Use the app when offline.

● Add an app shortcut to the home screen.

● View a chart showing the number of upcoming events by city.

# User Stories:

● As a user, I would like to be able to filter events by city so that I can see the list of events that
take place in that city.

● As a user, I would like to be able to show/hide event details so that I can see more/less
information about an event.

● As a user, I would like to be able to specify the number of events I want to view in the app so
that I can see more or fewer events in the events list at once.

● As a user, I would like to be able to use the app when offline so that I can see the events I
viewed the last time I was online.

● As a user, I would like to be able to add the app shortcut to my home screen so that I can
open the app faster.

● As a user, I would like to be able to see a chart showing the upcoming events in each city so
that I know what events are organized in which city.

# Technical Requirements:

● The app is a React application.

● The app is built using the TDD technique.

● The app uses the Google Calendar API and OAuth2 authentication flow.

● The app uses serverless functions (AWS lambda is preferred) for the authorization server
instead of using a traditional server.

● The app’s code is hosted in a Git repository on GitHub.

● The app works on the latest versions of Chrome, Firefox, Safari, Edge, and Opera, as well
as on IE11.

● The app displays well on all screen sizes (including mobile and tablet) with widths of 1920px
and 320px.

● The app passes Lighthouse’s PWA checklist.

● The app works offline or in slow network conditions with the help of a service worker.

● Users may be able to install the app on a desktop and add the app to their home screen on
mobile.

● The app is deployed on GitHub Pages.

● The API call uses React Axios and async/await.

● The app implements an alert system using an OOP approach to show information to the
user.

● The app makes use of data visualization (recharts preferred).

● The app is covered by tests with a coverage rate >= 90%.

● The app is monitored using an online monitoring tool.

# Data Visualization: 

![image](https://github.com/LisaGenner/Meet-App/assets/116294867/bfad4a1c-347b-4e5f-95e8-b8fbb4a1eebe)

