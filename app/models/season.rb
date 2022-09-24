class Season < ApplicationRecord
  belongs_to :series 
  has_many :championships, dependent: :destroy 

end
