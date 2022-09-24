class Entry < ApplicationRecord
  belongs_to :team 
  belongs_to :competitor 
  belongs_to :subevent 
  belongs_to :vehicle 
  has_one :result 
end
