# Nationalities
usa = Nationality.create(name: 'USA')
uk = Nationality.create(name: 'UK')
mexico = Nationality.create(name: 'Mexico')

# Tracks
daytona = usa.tracks.create(name: 'Daytona International Speedway')

# Teams
deltawing_racing = usa.teams.create(name: 'DeltaWing Racing Cars with Claro/TracFone')
patron_esm = usa.teams.create(name: 'Tequila Patron ESM')

# Manufacturers
deltawing_cars = usa.manufacturers.create(name: 'DeltaWing Racing Cars')
wirth = usa.manufacturers.create(name: 'Wirth Research')

# Vehicles
deltawing_vehicle = deltawing_cars.vehicles.create(name: 'DeltaWing', year: '2015')
arx04b = wirth.vehicles.create(name: 'HPD ARX-04b', year: '2015')

# Competitors
legge = uk.competitors.create(first_name: "Katherine", last_name: "Legge")
rojas = mexico.competitors.create(first_name: "Memo", last_name: "Rojas")
sharp = usa.competitors.create(first_name: "Scott", last_name: "Sharp")

# Series
imsa_sc = Series.create(name: 'IMSA SportsCar Championship')

# Seasons
usc2015 = imsa_sc.seasons.create(name: '2015 United SportsCar Championship')

# Championships
uscprototype2015 = usc2015.championships.create(name: 'Prototype')

# Events
rolex = uscprototype2015.events.create(name: 'Rolex 24 at Daytona', track_id: daytona.id)

# Subevents
rolex_race = rolex.subevents.create(name: "Race", start_date: "2015-01-24", end_date: "2015-01-25")

# Team Entries
rolex_race_patron_entry = rolex_race.team_entries.create(team_id: patron_esm.id, vehicle_id: arx04b.id, vehicle_number: "1")
rolex_race_deltawing_entry = rolex_race.team_entries.create(team_id: deltawing_racing.id, vehicle_id: deltawing_vehicle.id, vehicle_number: "0")

# Competitor Entries
rolex_race_patron_sharp_entry = rolex_race_patron_entry.competitor_entries.create(competitor_id: sharp.id)
rolex_race_deltawing_legge_entry = rolex_race_deltawing_entry.competitor_entries.create(competitor_id: legge.id)
rolex_race_deltawing_rojas_entry = rolex_race_deltawing_entry.competitor_entries.create(competitor_id: rojas.id)

# Results 
# rolex_race_entry_3.create_result(finish_position: 39, finished: false, laps: 389, notes: "Gearbox failure")
# rolex_race_entry_1.create_result(finish_position: 51, finished: false, laps: 42, notes: "Transmission failure")

