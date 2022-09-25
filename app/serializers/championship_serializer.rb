class ChampionshipSerializer < ActiveModel::Serializer
  attributes :id, :name 

  belongs_to :season
end
