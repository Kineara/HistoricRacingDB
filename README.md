# Historic Racing Database

## Purpose
  - Provide a central location for historic race data for research, hobby, and curiousity purposes
  - Maintain a list of sources related to historic racing events that can be used to verify data
  - Give simracers and other hobbyists a one stop location for all the information they need to recreate historic racing events
  - Allow community submission of sources and data to be added to the database after review

## Description
  - This is a project that started as a Capstone assignment for Flatiron School's Web Development Bootcamp, but has since become an ongoing project with a far larger scope than I originally intended (i.e., I listed out the features I wanted when I started this and had no idea when to say "STOP.") Functionality is limited in the initial release, with the frontend mainly being a direct provider of information from the API. Development from this point will be focused on integrating more data types and improving the front-end experience to allow more direct user interaction with the database.

### Current Features
  Users can:
  - Create a profile
  - Log into the site
  - Search for events by location, country, vehicle, or driver/rider
  - View event information and results

### Stretch Goals: 
  - Admin status for certain users, allowing them to push updates to database and approve user submitted edits
  - Favorites lists for users, allowing them to save events (pending login functionality refactor)
  - Submit event data/results
  - Submit corrections to existing event data
  - World visualization (show events on interactive map)
  - Wikipedia integration for detailed information on vehicles, competitors, track, and event data


## Models and Relationships
  [View ERD](https://lucid.app/lucidchart/7732b65d-93c3-4032-aa2d-36e4818644c5/view#)


## API Endpoints
  ```api/v1/nationalities```
  - List all nationalities in the database, with associated competitors, tracks, teams, and manufacturers

  ```api/v1/tracks```
  - List all tracks and associated nationalities

  ```api/v1/serieses```
  - List all series and available seasons

  ```api/v1/seasons/:id```
  - Show specific season information

  ```api/v1/championships/:id```
  - Show specific championship information

  ```api/v1/events/:id```
  - List complete event data for specified event ID

  ```api/v1/competitors```
  - List all riders/drivers

  ```api/v1/manufacturers```
  - List all manufacturers

  ```api/v1/teams```
  - List all teams

  ```api/v1/db_summary```
  - Gives an overview of the information currently stored in the database


  ## Local Setup
  - Clone the repository, and then run ```npm install --prefix client``` to install the dependencies
  - Start the backend server with ```rails s```
  - Start the frontend client with ```npm start --prefix client```


  ## Heroku Link
  ```https://historic-racing-db.herokuapp.com/```

