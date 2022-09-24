class Nationality < ApplicationRecord
  has_many :tracks 
  has_many :manufacturers 
  has_many :competitors 
end
