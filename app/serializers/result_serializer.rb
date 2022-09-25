class ResultSerializer < ActiveModel::Serializer
  attributes :id, :start_position, :finish_position, :time, :speed, :finished, :laps, :notes
  
  belongs_to :team, through: :team_entries 
end
