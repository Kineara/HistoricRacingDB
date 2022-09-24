class Subevent < ApplicationRecord
  belongs_to :event 
  has_many :results 
  has_many :entries
  has_many :competitors, through: :entries 
  has_many :teams, through: :entries 
end
