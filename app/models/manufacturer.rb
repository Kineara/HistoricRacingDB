class Manufacturer < ApplicationRecord
  belongs_to :nationality 
  has_many :vehicles, dependent: :destroy  
end
