class Championship < ApplicationRecord
  belongs_to :season 
  has_many :events 
end
