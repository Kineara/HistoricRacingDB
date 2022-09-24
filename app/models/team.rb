class Team < ApplicationRecord
  belongs_to :nationality 
  has_many :team_entries 
  has_many :subevents, through: :team_entries 
  has_many :vehicles, through: :team_entries 
end
