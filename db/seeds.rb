# Nationalities
usa = Nationality.create(name: 'USA')
uk = Nationality.create(name: 'UK')
mexico = Nationality.create(name: 'Mexico')
iom = Nationality.create(name: 'Isle of Man')
germany = Nationality.create(name: 'Germany')

# Tracks
daytona = usa.tracks.create(name: 'Daytona International Speedway')
sebring = usa.tracks.create(name: 'Sebring Raceway')
snaefell = iom.tracks.create(name: 'Isle of Man TT Mountain Course')

# Teams
deltawing_racing = usa.teams.create(name: 'DeltaWing Racing Cars with Claro/TracFone')
patron_esm = usa.teams.create(name: 'Tequila Patron ESM')
hickman_bmw = uk.teams.create(name: 'Peter Hickman / BMW')

# Manufacturers
deltawing_cars = usa.manufacturers.create(name: 'DeltaWing Racing Cars')
wirth = usa.manufacturers.create(name: 'Wirth Research')
bmw = germany.manufacturers.create(name: 'BMW')

# Vehicles
deltawing_vehicle = deltawing_cars.vehicles.create(name: 'DeltaWing', year: '2015')
arx04b = wirth.vehicles.create(name: 'HPD ARX-04b', year: '2015')
s1000rr = bmw.vehicles.create(name: 'S1000RR')

# Competitors
legge = uk.competitors.create(first_name: "Katherine", last_name: "Legge")
rojas = mexico.competitors.create(first_name: "Memo", last_name: "Rojas")
sharp = usa.competitors.create(first_name: "Scott", last_name: "Sharp")
hickman = uk.competitors.create(first_name: "Peter", last_name: "Hickman")

# Series
imsa_sc = Series.create(name: 'IMSA SportsCar Championship', vehicle_type: "Car")
iom_tt = Series.create(name: 'Isle of Man Tourist Trophy', vehicle_type: "Motorcycle")

# Seasons
usc2015 = imsa_sc.seasons.create(name: '2015 United SportsCar Championship')
iom_tt_2022 = iom_tt.seasons.create(name: '2022')

# Championships
uscprototype2015 = usc2015.championships.create(name: 'Prototype')
iom_tt_2022_championship = iom_tt_2022.championships.create(name: 'Isle of Man TT')

# Events
rolex = uscprototype2015.events.create(name: 'Rolex 24 at Daytona', track_id: daytona.id)
iom_tt_2022_championship_event = iom_tt_2022_championship.events.create(name: 'Isle of Man TT', track_id: snaefell.id)

# Subevents
rolex_race = rolex.subevents.create(name: "Race", start_date: "2015-01-24", end_date: "2015-01-25")
iom_2022_senior_tt = iom_tt_2022_championship_event.subevents.create(name: "Senior TT")

# Team Entries
rolex_race_patron_entry = rolex_race.team_entries.create(team_id: patron_esm.id, vehicle_id: arx04b.id, vehicle_number: "1")
rolex_race_deltawing_entry = rolex_race.team_entries.create(team_id: deltawing_racing.id, vehicle_id: deltawing_vehicle.id, vehicle_number: "0")
iom_tt_2022_team_hickman_entry = iom_2022_senior_tt.team_entries.create(team_id: hickman_bmw.id, vehicle_id: s1000rr.id)

# Competitor Entries
rolex_race_patron_sharp_entry = rolex_race_patron_entry.competitor_entries.create(competitor_id: sharp.id)
rolex_race_deltawing_legge_entry = rolex_race_deltawing_entry.competitor_entries.create(competitor_id: legge.id)
rolex_race_deltawing_rojas_entry = rolex_race_deltawing_entry.competitor_entries.create(competitor_id: rojas.id)
iom_tt_2022_hickman_entry = iom_tt_2022_team_hickman_entry.competitor_entries.create(competitor_id: hickman.id)

# Results 
rolex_race_patron_entry.create_result(finish_position: 39, finished: false, laps: 389, notes: "Gearbox failure")
rolex_race_deltawing_entry.create_result(finish_position: 51, finished: false, laps: 42, notes: "Transmission failure")
iom_tt_2022_team_hickman_entry.create_result(finish_position: 1, finished: true, time: "01:44:56.494", speed: "129.432 mph")

