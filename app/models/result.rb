class Result < ApplicationRecord
  belongs_to :team_entry 
  has_one :subevent, through: :team_entry 
end
