class SubeventSerializer < ActiveModel::Serializer
  attributes :id, :name, :start_date, :end_date

  belongs_to :event 
  has_many :team_entries 
  has_many :results, through: :team_entries 
  has_many :competitors, through: :team_entries 
  has_many :teams, through: :team_entries

end
