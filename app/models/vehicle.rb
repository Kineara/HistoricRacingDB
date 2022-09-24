class Vehicle < ApplicationRecord
  belongs_to :manufacturer
  has_many :team_entries 
end
