class Team < ApplicationRecord
  has_many :competitors 
  has_many :vehicles 
  has_many :event_entries 
end
