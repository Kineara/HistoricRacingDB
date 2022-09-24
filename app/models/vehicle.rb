class Vehicle < ApplicationRecord
  belongs_to :manufacturer
  has_many :entries 
end
