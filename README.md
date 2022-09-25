# Historic Racing Database

## Purpose
  - Provide a central location for historic race data for research, hobby, and curiousity purposes
  - Maintain a list of sources related to historic racing events that can be used to verify data
  - Give simracers and other hobbyists a one stop location for all the information they need to recreate historic racing events
  - Allow community submission of sources and data to be added to the database after review

## User Stories

### MVP
  As a user, I can:
  - Create a profile
  - Log into the site
  - Search for events by date, location, country, vehicle, or driver/rider
  - View event information and results
  - Save an event to my profile
  - Leave public comments on an event

### Stretch Goals: 
  - Admin status for certain users, allowing them to push updates to database and approve user submitted edits
  - Submit event data/results
  - Submit corrections to existing event data
  - World visualization (show events on interactive map)
  - Wikipedia integration for detailed information on vehicles, competitors, track, and event data


## Models and Relationships
  [View ERD](https://lucid.app/lucidchart/7732b65d-93c3-4032-aa2d-36e4818644c5/view#)


## API Endpoints
  /nationalities
  - List all nationalities in the database, with associated competitors, tracks, teams, and manufacturers

  /tracks
  - List all tracks and associated nationalities

  /serieses
  - List all series and available seasons

  /events/:id
  - List complete event data for specified event ID

  /events/:id/results
  - 