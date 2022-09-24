class Competitor < ApplicationRecord
  belongs_to :nationality 
  has_many :event_entries 
  has_many :teams, through: :event_entries 
  has_many :events, through: :event_entries 
end
