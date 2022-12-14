class TeamEntry < ApplicationRecord
  belongs_to :team 
  belongs_to :subevent 
  belongs_to :vehicle
  has_many :competitor_entries, dependent: :destroy 
  has_many :competitors, through: :competitor_entries 
  has_one :result, dependent: :destroy 
end
