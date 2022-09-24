class Nationality < ApplicationRecord
  has_many :tracks, dependent: :destroy
  has_many :manufacturers, dependent: :destroy 
  has_many :competitors, dependent: :destroy 
  has_many :teams, dependent: :destroy 
end
