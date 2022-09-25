class TeamSerializer < ActiveModel::Serializer
  attributes :id, :name 

  belongs_to :nationality
  has_many :team_entries
  has_many :competitor_entries 
  has_many :competitors, through: :competitor_entries  
  
end
