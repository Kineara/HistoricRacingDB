Series.create!(name: 'World Rally Championship', vehicle_type: 'Car')
Series.create!(name: 'MotoGP', vehicle_type: 'Motorcycle')
Series.create!(name: 'IMSA SportsCar Championship', vehicle_type: 'Car')

motogp = Series.find_by(name: 'MotoGP')
Season.create!(name: '2021 Championship', series_id: motogp.id)
Season.create!(name: '2020 Championship', series_id: motogp.id)

wrc = Series.find_by(name: 'World Rally Championship')
Season.create!(name: '2021 Championship', series_id: wrc.id)
Season.create!(name: '2020 Championship', series_id: wrc.id)

imsa = Series.find_by(name: 'IMSA SportsCar Championship')
Season.create!(name: '2014 United SportsCar Championship', series_id: imsa.id)
Season.create!(name: '2015 United SportsCar Championship', series_id: imsa.id)

season = imsa.seasons.find_by(name: '2014 United SportsCar Championship')
Championship.create!(name: 'Prototype', season_id: season.id)
Championship.create!(name: 'Prototype Challenge', season_id: season.id)
Championship.create!(name: 'GT Le Mans', season_id: season.id)
Championship.create!(name: 'GT Daytona', season_id: season.id)

season = imsa.seasons.find_by(name: '2015 United SportsCar Championship')
Championship.create!(name: 'Prototype', season_id: season.id)
Championship.create!(name: 'Prototype Challenge', season_id: season.id)
Championship.create!(name: 'GT Le Mans', season_id: season.id)
Championship.create!(name: 'GT Daytona', season_id: season.id)

Nationality.create!(name: 'USA')
Nationality.create!(name: 'UK')
Nationality.create!(name: 'Mexico')
Nationality.create!(name: 'Colombia')

nationality = Nationality.find_by(name: 'USA')
Track.create!(name: 'Daytona International Speedway', nationality_id: nationality.id)

championship = Championship.find_by(name: 'Prototype')
track = Track.find_by(name: 'Daytona International Speedway')
Event.create!(name: 'Rolex 24 at Daytona', championship_id: championship.id, track_id: track.id)

event = Event.find_by(name: 'Rolex 24 at Daytona')
Subevent.create!(name: 'Practice', start_date: '2015-01-22', end_date: '2015-01-22', event_id: event.id)
Subevent.create!(name: 'Qualifying', start_date: '2015-01-23', end_date: '2015-01-23', event_id: event.id)
Subevent.create!(name: 'Race', start_date: '2015-01-24', end_date: '2015-01-25', event_id: event.id)

Team.create!(name: 'DeltaWing Racing Cars with Claro/TracFone', nationality_id: nationality.id)

Manufacturer.create!(name: 'DeltaWing', nationality_id: nationality.id)

nationality = Nationality.find_by(name: 'UK')
Competitor.create!(first_name: 'Katherine', last_name: 'Legge', nationality_id: nationality.id)
nationality = Nationality.find_by(name: 'Mexico')
Competitor.create!(first_name: 'Memo', last_name: 'Rojas', nationality_id: nationality.id)


