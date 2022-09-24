class Event < ApplicationRecord
  belongs_to :championship 
  has_many :subevents 
  has_many :event_entries
  has_many :competitors, through: :event_entries 
  has_many :teams, through: :event_entries 
end
