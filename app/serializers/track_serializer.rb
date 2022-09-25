class TrackSerializer < ActiveModel::Serializer
  attributes :id, :name

  belongs_to :nationality 
end
