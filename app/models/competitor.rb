class Competitor < ApplicationRecord
  belongs_to :nationality 
  has_many :event_entries 
end
