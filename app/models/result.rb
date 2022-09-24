class Result < ApplicationRecord
  belongs_to :entry 
  has_one :subevent, through: :entry 
end
