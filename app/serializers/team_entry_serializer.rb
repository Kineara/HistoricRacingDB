class TeamEntrySerializer < ActiveModel::Serializer
  attributes :id, :vehicle_number

  belongs_to :subevent 
  belongs_to :team
  belongs_to :vehicle 
  has_many :competitors, through: :team_entries 
  has_one :result 
end
