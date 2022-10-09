class CompetitorSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :name 

  belongs_to :nationality

  def name
    "#{self.object.last_name}, #{self.object.first_name}"
  end
end
