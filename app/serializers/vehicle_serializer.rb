class VehicleSerializer < ActiveModel::Serializer
  attributes :id, :name, :year

  belongs_to :manufacturer 
end
