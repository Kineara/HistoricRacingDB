# Nationalities
usa = Nationality.create(name: 'USA')
uk = Nationality.create(name: 'UK')
mexico = Nationality.create(name: 'Mexico')

# Tracks
daytona = usa.tracks.create(name: 'Daytona International Speedway')

# Teams
deltawing_racing = usa.teams.create(name: 'DeltaWing Racing Cars with Claro/TracFone')

# Manufacturers
deltawing_cars = usa.manufacturers.create(name: 'DeltaWing Racing Cars')

# Vehicles
deltawing_vehicle = deltawing_cars.vehicles.create(name: 'DeltaWing', year: '2015')

# Competitors
legge = uk.competitors.create(first_name: "Katherine", last_name: "Legge")
rojas = mexico.competitors.create(first_name: "Memo", last_name: "Rojas")

# Series
imsa_sc = Series.create(name: 'IMSA SportsCar Championship')

# Seasons
season = imsa_sc.seasons.create(name: '2015 United SportsCar Championship')

# Championships
championship = season.championships.create(name: 'Prototype')

# Events
rolex = championship.events.create(name: 'Rolex 24 at Daytona', track_id: daytona.id)

# Event Entries
rolex.event_entries.create(team_id: deltawing_racing.id, competitor_id: legge.id, vehicle_id: deltawing_vehicle.id)
rolex.event_entries.create(team_id: deltawing_racing.id, competitor_id: rojas.id, vehicle_id: deltawing_vehicle.id)

# Subevents
rolex_race = rolex.subevents.create(name: "Race", start_date: "2015-01-24", end_date: "2015-01-25")


