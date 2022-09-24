class Track < ApplicationRecord
  belongs_to :nationality 
  has_many :events, dependent: :destroy 
end
