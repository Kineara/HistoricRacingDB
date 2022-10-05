class EventSerializer < ActiveModel::Serializer
  attributes :id, :name

  belongs_to :championship
  belongs_to :track 
  has_many :subevents 

end
