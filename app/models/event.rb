class Event < ApplicationRecord
  belongs_to :championship 
  has_many :subevents 
end
