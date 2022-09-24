class Competitor < ApplicationRecord
  belongs_to :nationality 
  has_many :entries 
  has_many :teams, through: :entries 
  has_many :subevents, through: :entries 
end
