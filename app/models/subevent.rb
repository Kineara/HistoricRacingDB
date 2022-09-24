class Subevent < ApplicationRecord
  belongs_to :event 
  has_many :team_entries, dependent: :destroy 
  has_many :results, through: :team_entries 
  has_many :competitors, through: :team_entries 
  has_many :teams, through: :team_entries 
end
