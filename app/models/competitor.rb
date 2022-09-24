class Competitor < ApplicationRecord
  belongs_to :nationality 
  has_many :competitor_entries, dependent: :destroy 
  has_many :team_entries, through: :competitor_entries 
end
