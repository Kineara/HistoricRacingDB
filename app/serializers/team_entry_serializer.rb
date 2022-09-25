class TeamEntrySerializer < ActiveModel::Serializer
  attributes :vehicle_number

  belongs_to :subevent 
  belongs_to :event, through: :subevent
  belongs_to :team
  belongs_to :vehicle 
  has_many :competitors, through: :team_entries 
  has_one :result 
end
