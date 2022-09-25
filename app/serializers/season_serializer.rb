class SeasonSerializer < ActiveModel::Serializer
  attributes :id, :name 

  belongs_to :series 
  has_many :championships 
end
