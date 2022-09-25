class ManufacturerSerializer < ActiveModel::Serializer
  attributes :id, :name

  belongs_to :nationality 
  has_many :vehicles 
end
