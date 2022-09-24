class Series < ApplicationRecord
  has_many :seasons, dependent: :destroy  
end
