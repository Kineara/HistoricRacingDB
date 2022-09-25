class Event < ApplicationRecord
  belongs_to :championship 
  belongs_to :track 
  has_many :subevents, dependent: :destroy 

end
