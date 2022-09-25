class NationalitySerializer < ActiveModel::Serializer
  attributes :id, :name 

  has_many :competitors 
  has_many :tracks 
  has_many :manufacturers 
  has_many :teams 
end
