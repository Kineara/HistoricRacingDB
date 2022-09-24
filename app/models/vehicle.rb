class Vehicle < ApplicationRecord
  belongs_to :manufacturer
  has_many :event_entries 
end
