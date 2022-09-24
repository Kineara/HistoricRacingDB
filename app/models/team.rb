class Team < ApplicationRecord
  belongs_to :nationality 
  has_many :entries 
  has_many :competitors, through: :entries 
  has_many :subevents, through: :entries 
  has_many :vehicles, through: :entries 
end
