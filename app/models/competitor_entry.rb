class CompetitorEntry < ApplicationRecord
   belongs_to :competitor 
   belongs_to :team_entry
end
