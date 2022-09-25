class ChampionshipSerializer < ActiveModel::Serializer
  attributes :id, :name 

  belongs_to :season
  has_many :events 
end
