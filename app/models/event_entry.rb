class EventEntry < ApplicationRecord
  belongs_to :competitor 
  belongs_to :team 
  belongs_to :event 
  belongs_to :vehicle 
end
