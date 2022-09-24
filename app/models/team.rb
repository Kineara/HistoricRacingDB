class Team < ApplicationRecord
  belongs_to :nationality 
  has_many :event_entries 
  has_many :competitors, through: :event_entries 
  has_many :events, through: :event_entries 
  has_many :vehicles, through: :event_entries 
end
