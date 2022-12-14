class Team < ApplicationRecord
  belongs_to :nationality 
  has_many :team_entries, dependent: :destroy 
  has_many :subevents, through: :team_entries 
  has_many :vehicles, through: :team_entries 
  has_many :competitor_entries, through: :team_entries
  has_many :competitors, through: :competitor_entries  
end
